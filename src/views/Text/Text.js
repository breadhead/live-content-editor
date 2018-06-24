import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditButton from '../../components/EditButton/EditButton';
import TextTitle from '../../components/TextTitle/TextTitle';
import TextSubtitle from '../../components/TextSubtitle/TextSubtitle';
import TextDescription from '../../components/TextDescription/TextDescription';

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
  }).isRequired
}

class Text extends Component {
  state = {
    isEditing: false,
    title: this.props.data.title,
    subtitle: this.props.data.subtitle,
    description: this.props.data.description
  }

  componentStyles = {
    backgroundImage: `url(${this.props.data.backgroundImg})`
  }

  contentStyles = {
    justifyContent: this.props.data.textAlign
  }

  toggleEditorState = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value })
  }


  render() {
    console.log('text state', this.state);
    return (
      <section className="text" style={this.componentStyles}>
        <div className="container">
          <div className="text__content" style={this.contentStyles}>
            <TextTitle title={this.state.title} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            <TextSubtitle subtitle={this.state.subtitle} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            <TextDescription description={this.state.description} isEditing={this.state.isEditing} handleChange={this.handleChange} />
          </div>
          <EditButton onClick={this.toggleEditorState} isEditing={this.state.isEditing} />
        </div>
      </section>
    )
  }
}

Text.propTypes = propTypes;

export default Text;