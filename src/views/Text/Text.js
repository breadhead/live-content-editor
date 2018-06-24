import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditButton from '../../components/EditButton/EditButton';
import TextTitle from '../../components/TextTitle/TextTitle';
import TextSubtitle from '../../components/TextSubtitle/TextSubtitle';
import TextDescription from '../../components/TextDescription/TextDescription';
import TextPoster from '../../components/TextPoster/TextPoster';
import TextContent from '../../components/TextContent/TextContent';

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
    description: this.props.data.description,
    poster: this.props.data.backgroundImg,
    textAlign: this.props.data.textAlign
  }

  toggleEditorState = () => {
    if (this.state.isEditing) {
      console.log('put request');
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange = (fieldId, value) => {
    this.setState({ [fieldId]: value })
  }

  render() {
    return (
      <TextPoster poster={this.state.poster} isEditing={this.state.isEditing} handleChange={this.handleChange} >
        <div className="container">
          <TextContent textAlign={this.state.textAlign} isEditing={this.state.isEditing} handleChange={this.handleChange}>
            <TextTitle title={this.state.title} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            <TextSubtitle subtitle={this.state.subtitle} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            <TextDescription description={this.state.description} isEditing={this.state.isEditing} handleChange={this.handleChange} />
          </TextContent>
          <EditButton onClick={this.toggleEditorState} isEditing={this.state.isEditing} />
        </div>
      </TextPoster>
    )
  }
}

Text.propTypes = propTypes;

export default Text;