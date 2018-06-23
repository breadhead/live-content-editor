import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import '../../images/two_arrows.png'


import './Hero.scss';

class Hero extends Component {
  state = {}
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero__menu">
            <Button className="hero__button-burger">menu</Button>
            <Button className="hero__button-switch-screen hero__button-switch-screen--prev">Great</Button>
            <Button className="hero__button-burger" />

          </div>
          <h1 className="hero__title">
            Lorem ipsum dolor
          </h1>
          <Button className="hero__button-switch-screen hero__button-switch-screen--next">next screen</Button>
        </div>
      </section>
    )
  }
}

export default Hero;