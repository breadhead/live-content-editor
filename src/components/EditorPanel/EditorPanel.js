import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

class EditorPanel extends Component {
  state = {
    src: this.props.src,
    poster: this.props.poster
  }

  onInputValueChange = (e) => {
    console.log('e', e.target);
  }

  render() {
    return (
      <article className="editor-panel">
        <button className="editor-panel__button">save</button>
        <button className="editor-panel__button editor-panel__button--close">save and close</button>
        <div className="editor-panel__controls">
          <div className="editor-panel__item">
            <label className="editor-panel__label" htmlFor="video">видео:</label>
            <Input id="video" className="editor-panel__input" onInputValueChange={this.onInputValueChange} type="text" value={this.state.src} />
          </div>
          <div className="editor-panel__item">
            <label className="editor-panel__label" htmlFor="poster">постер:</label>
            <Input id="poster" className="editor-panel__input" onInputValueChange={this.onInputValueChange} type="text" value={this.state.poster} />
          </div>
        </div>
      </article>
    )
  }
}

EditorPanel.propTypes = propTypes;

export default EditorPanel;