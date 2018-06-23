import React, { Component } from 'react';

import './Text.scss';

class Text extends Component {
  state = {}
  render() {
    return (
      <section className="text">
        <div className="container">
          <div className="text__content">
            <h2 className="text__title">
              Lorem
            </h2>
            <h3 className="text__subtitle">
              Lorem ipsum dolor
            </h3>
            <p className="text__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere maxime similique mollitia corrupti, iure accusamus obcaecati harum libero delectus veniam provident, id nulla dignissimos praesentium! Nihil quae hic repellat!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Text;