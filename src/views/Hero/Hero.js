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
    isEditing: false
  }

  styles = {
    backgroundImage: `url(${this.props.data.video.poster})`
  }

  toggleEditorState = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    return (
      <HeroPoster poster={this.props.data.video.poster} isEditing={this.state.isEditing}>
        <HeroVideo src={this.props.data.video.src} isEditing={this.state.isEditing} />
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger">menu</Button>
            <Button className="hero__button-switch-screen hero__button-switch-screen--prev">Great</Button>
          </div>
          <HeroTitle title={this.props.data.title} isEditing={this.state.isEditing} />
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