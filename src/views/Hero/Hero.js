import React, { Component } from "react";
import PropTypes from "prop-types";

import withEditing from "../../containers/HOC/withEditing";

import EditorPanel from "../../components/EditorPanel/EditorPanel";
import TextElement from "../../components/TextElement/TextElement";
import Button from "../../components/Button/Button";
import EditButton from "../../components/EditButton/EditButton";

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
    isEditing: false,
    title: this.props.data.title,
    poster: this.props.data.video.poster,
    src: this.props.data.video.src
  };

  toggleEditorState = () => {
    const data = {
      id: this.props.data.id,
      type: this.props.data.type,
      title: this.state.title,
      video: {
        poster: this.state.poster,
        src: this.state.src
      }
    };

    if (this.state.isEditing) {
      this.props.setData(this.props.data.id, data);
    }
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value });
  };

  render() {
    return (
      <section className="hero">
        <EditorPanel src={this.state.src} poster={this.state.poster} handleChange={this.handleChange} />
        <video className="hero__video" poster={this.state.poster} src={this.state.src} autoPlay loop muted />
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger">menu</Button>
            <Button className="hero__button-switch-screen hero__button-switch-screen--prev">
              Great
            </Button>
          </div>
          <WithEditingTextElement type="h1" className="hero__title">
            {this.state.title}
          </WithEditingTextElement>
          <div className="hero__footer">
            <Button className="hero__button-switch-screen hero__button-switch-screen--next">
              next screen
            </Button>
            <EditButton
              onClick={this.toggleEditorState}
              isEditing={this.state.isEditing}
            />
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = propTypes;

export default Hero;
