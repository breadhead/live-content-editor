import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';
import EditButton from '../../components/EditButton/EditButton';
import HeroTitle from '../../components/HeroTitle/HeroTitle';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import HeroPoster from '../../components/HeroPoster/HeroPoster';

import './Hero.scss';

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.shape({
      poster: PropTypes.string,
      src: PropTypes.string
    })
  }).isRequired
}

class Hero extends Component {
  state = {
    isEditing: false,
    title: this.props.data.title,
    poster: this.props.data.video.poster,
    src: this.props.data.video.src
  }

  styles = {
    backgroundImage: `url(${this.props.data.video.poster})`
  }

  toggleEditorState = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value })
  }

  render() {
    return (
      <HeroPoster poster={this.state.poster} isEditing={this.state.isEditing} handleChange={this.handleChange} >
        <HeroVideo src={this.state.src} isEditing={this.state.isEditing} handleChange={this.handleChange} />
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger">menu</Button>
            <Button className="hero__button-switch-screen hero__button-switch-screen--prev">Great</Button>
          </div>
          <HeroTitle title={this.state.title} isEditing={this.state.isEditing} handleChange={this.handleChange} />
          <div className="hero__footer">
            <Button className="hero__button-switch-screen hero__button-switch-screen--next">next screen</Button>
            <EditButton onClick={this.toggleEditorState} isEditing={this.state.isEditing} />
          </div>
        </div>
      </HeroPoster>
    )
  }
}

Hero.propTypes = propTypes;

export default Hero;