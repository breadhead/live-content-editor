import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoId from 'nanoid';

import EditButton from '../../components/EditButton/EditButton';
import TextTitle from '../../components/TextTitle/TextTitle';
import TextSubtitle from '../../components/TextSubtitle/TextSubtitle';

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
    console.log('title', this.state.title);
    return (
      <section className="text" style={this.componentStyles}>
        <div className="container">
          <div className="text__content" style={this.contentStyles}>
            <TextTitle title={this.state.title} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            <TextSubtitle subtitle={this.state.subtitle} isEditing={this.state.isEditing} handleChange={this.handleChange} />
            {this.props.data.description[0].replace(/\n/g, '***').split('***').map(item => <p key={nanoId()} className="text__description">{item}</p>)}
          </div>
          <EditButton onClick={this.toggleEditorState} isEditing={this.state.isEditing} />
        </div>
      </section>
    )
  }
}

Text.propTypes = propTypes;

export default Text;