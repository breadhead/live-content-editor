import React from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";

const propTypes = {
  fields: PropTypes.arrayOf((PropTypes.objectOf(PropTypes.string))).isRequired,
  handleChange: PropTypes.func.isRequired,
};

const EditorPanel = (props) => {

  const onInputValueChange = (propName, e) => {
    props.handleChange(propName, e.target.value);
  };

  const renderRegularField = (field) => (
    <React.Fragment key={field.name}>
      <div className="editor-panel__item">
        <label className="editor-panel__label" htmlFor={field.name}>
          {field.name}:
        </label>
        <Input id={field.name} className="editor-panel__input" onInputValueChange={e => onInputValueChange(field.name, e)} type="text" value={field.value} />
      </div>
    </React.Fragment>
  );

  return (
    <article className="editor-panel">
      <button className="editor-panel__button">save</button>
      <button className="editor-panel__button editor-panel__button--close">
        save and close
      </button>
      <div className="editor-panel__controls">
        {props.fields.map(field => renderRegularField(field))}
      </div>
    </article>
  );
}

EditorPanel.propTypes = propTypes;

export default EditorPanel;
