import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';
import '../../images/two_arrows.png'

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
  state = {}
  render() {
    console.log('hero', this.props.data);
    return (
      <section className="hero">
          <video className="hero__video" src={this.props.data.video.src} autoPlay loop muted />
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger">menu</Button>
            <Button className="hero__button-switch-screen hero__button-switch-screen--prev">Great</Button>
          </div>
          <h1 className="hero__title">
            {this.props.data.title}
          </h1>
          <Button className="hero__button-switch-screen hero__button-switch-screen--next">next screen</Button>
        </div>
      </section>
    )
  }
}

Hero.propTypes = propTypes;

export default Hero;