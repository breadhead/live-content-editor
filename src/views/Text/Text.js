import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withEditing from '../../containers/HOC/withEditing';

import EditorPanel from "../../components/EditorPanel/EditorPanel";
import TextElement from '../../components/TextElement/TextElement';

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
    textAlign: this.props.data.textAlign,
    backgroundImg: this.props.data.backgroundImg,
    title: this.props.data.title,
    subtitle: this.props.data.subtitle,
    description: this.props.data.description,
    editorPanelVisible: false
  }

  saveResult = () => {
    const data = {
      id: this.props.data.id,
      type: this.props.data.type,
      textAlign: this.state.textAlign,
      backgroundImg: this.state.backgroundImg,
      title: this.state.title,
      subtitle: this.state.subtitle,
      description: this.state.description
    }

    this.props.setData(this.props.data.id, data);
  }

  handleChange = (fieldId, value) => this.setState({ [fieldId]: value })

  openEditorPanel = () => this.setState({ editorPanelVisible: true })

  resetState = () => this.setState({ backgroundImg: this.props.data.backgroundImg, textAlign: this.props.data.textAlign })

  closeEditorPanel = () => this.setState({ editorPanelVisible: false })

  render() {
    return (
      <section className="text" style={{ backgroundImage: `url(${this.state.backgroundImg})` }}>
        <EditorPanel
          visible={this.state.editorPanelVisible}
          closeEditorPanel={this.closeEditorPanel}
          saveResult={this.saveResult}
          resetResult={this.resetState}
          fields={[{ name: 'backgroundImg', value: this.state.backgroundImg, label: 'фоновое изображение' }, { name: 'textAlign', value: this.state.textAlign, label: 'выравнивание текста' }]}
          handleChange={this.handleChange}
        />
        <div className="container">
          <button onClick={this.openEditorPanel} className="button-burger">menu</button>
          <div className="text__content" style={{ textAlign: this.state.textAlign }}>
            <WithEditingTextElement type='h2' className='text__title' saveResult={this.saveResult}>{this.state.title}</WithEditingTextElement>
            <WithEditingTextElement type='h3' className='text__subtitle' saveResult={this.saveResult}>{this.state.subtitle}</WithEditingTextElement>
            <WithEditingTextElement type='article' className='text__description' saveResult={this.saveResult}>{this.state.description}</WithEditingTextElement>
          </div>
        </div>
      </section>
    )
  }
}

Text.propTypes = propTypes;

export default Text;