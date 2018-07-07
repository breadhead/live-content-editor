import React, { Component } from "react";
import PropTypes from "prop-types";

import withEditing from "../../containers/HOC/withEditing";

import EditorPanel from "../../components/EditorPanel/EditorPanel";
import TextElement from "../../components/TextElement/TextElement";

import "./Hero.scss";

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.shape({
      poster: PropTypes.string,
      src: PropTypes.string
    })
  }).isRequired,
  setData: PropTypes.func.isRequired
};

const WithEditingTextElement = withEditing(TextElement);

class Hero extends Component {

  state = {
    title: this.props.data.title,
    poster: this.props.data.video.poster,
    src: this.props.data.video.src,
    editorPanelVisible: false
  };

  saveResult = () => {
    const data = {
      id: this.props.data.id,
      type: this.props.data.type,
      title: this.state.title,
      video: {
        poster: this.state.poster,
        src: this.state.src
      }
    };

    this.props.setData(this.props.data.id, data);
  }


  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value });
  };

  openEditorPanel = () => this.setState({ editorPanelVisible: true })

  closeEditorPanel = () => this.setState({ editorPanelVisible: false })


  render() {
    return (
      <section className="hero">
        <EditorPanel visible={this.state.editorPanelVisible} closeEditorPanel={this.closeEditorPanel} saveResult={this.saveResult} fields={[{ name: 'src', value: this.state.src }, { name: 'poster', value: this.state.poster }]} handleChange={this.handleChange} />
        <video className="hero__video" poster={this.state.poster} src={this.state.src} autoPlay loop muted />
        <div className="container">
          <div className="hero__menu">
            <button onClick={this.openEditorPanel} className="hero__button-burger">menu</button>
            <button className="hero__button-switch-screen hero__button-switch-screen--prev">Great</button>
          </div>
          <WithEditingTextElement type="h1" className="hero__title">
            {this.state.title}
          </WithEditingTextElement>
          <div className="hero__footer">
            <button className="hero__button-switch-screen hero__button-switch-screen--next">next screen</button>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = propTypes;

export default Hero;
