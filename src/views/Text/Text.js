import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withEditing from '../../containers/HOC/withEditing';

import EditorPanel from "../../components/EditorPanel/EditorPanel";
import TextElement from '../../components/TextElement/TextElement';

import './Text.scss';

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    textAlign: PropTypes.string,
    backgroundImg: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setData: PropTypes.func.isRequired
}

const WithEditingTextElement = withEditing(TextElement);

class Text extends Component {
  state = {
    isEditing: false,
    textAlign: this.props.data.textAlign,
    backgroundImg: this.props.data.backgroundImg,
    title: this.props.data.title,
    subtitle: this.props.data.subtitle,
    description: this.props.data.description,
  }

  toggleEditorState = () => {
    const data = {
      id: this.props.data.id,
      type: this.props.data.type,
      textAlign: this.state.textAlign,
      backgroundImg: this.state.backgroundImg,
      title: this.state.title,
      subtitle: this.state.subtitle,
      description: this.state.description
    }

    if (this.state.isEditing) {
      this.props.setData(this.props.data.id, data);
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value })
  }

  render() {
    return (
      <React.Fragment>
        <section className="text" style={{ backgroundImage: `url(${this.state.backgroundImg})` }}>
          <EditorPanel fields={[{ name: 'backgroundImg', value: this.state.backgroundImg }, { name: 'textAlign', value: this.state.textAlign }]} handleChange={this.handleChange} />
          <div className="container">
            <div className="text__content" style={{ textAlign: this.state.textAlign }}>
              <WithEditingTextElement type='h2' className='text__title'>{this.state.title}</WithEditingTextElement>
              <WithEditingTextElement type='h3' className='text__subtitle'>{this.state.subtitle}</WithEditingTextElement>
              <WithEditingTextElement type='article' className='text__description'>{this.state.description}</WithEditingTextElement>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

Text.propTypes = propTypes;

export default Text;