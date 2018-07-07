import React from 'react';
import PropTypes from "prop-types";

import Input from "../Input/Input";

const propTypes = {
  fields: PropTypes.arrayOf((PropTypes.objectOf(PropTypes.string))).isRequired,
  handleChange: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  closeEditorPanel: PropTypes.func.isRequired,
  saveResult: PropTypes.func.isRequired
};

const EditorPanel = props => {
  const onInputValueChange = (propName, e) => {
    props.handleChange(propName, e.target.value);
  };

  const renderField = field => (
    <React.Fragment key={field.name}>
      <div className="editor-panel__item">
        <label className="editor-panel__label" htmlFor={field.name}>
          {field.name}:
      </label>
        <Input id={field.name} className="editor-panel__input" onInputValueChange={e => onInputValueChange(field.name, e)} type="text" value={field.value} />
      </div>
    </React.Fragment>
  );

  return props.visible ? <React.Fragment>
    <article className="editor-panel">
      <div className="editor-panel__buttons">
        <button onClick={props.closeEditorPanel} className="editor-panel__button">close</button>
        <button onClick={props.saveResult} className="editor-panel__button">save</button>
        <button className="editor-panel__button editor-panel__button--save-close">save and close</button>
      </div>
      <div className="editor-panel__controls">
        {props.fields.map(field => renderField(field))}
      </div>
    </article>
  </React.Fragment> : null;
}

EditorPanel.propTypes = propTypes;

export default EditorPanel;
