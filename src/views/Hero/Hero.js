import React, { Component } from 'react';

import Button from '../../components/Button/Button';

import './Hero.scss';

class Hero extends Component {
  state = {}
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger" />
            <span>Great</span>
          </div>
          <h1 className="hero__title">
            Lorem ipsum dolor
          </h1>
          <Button className="hero__button-switch-screen" />
        </div>
      </section>
    )
  }
}

export default Hero;