import React from 'react';

const withEditing = (Component) => (
  class ComponentWithEditing extends React.Component {

    onEnterKeyPress = (e) => {
      if (e.key === 'Enter') {
        document.execCommand('insertHTML', false, '<br/><br/>');
        e.preventDefault();
      }
    }

    render() {
      return (
          <Component {...this.props} isEditable onBlur={() => console.log('blur')} onKeyPress={this.onEnterKeyPress} />
      )
    }
  }
)

export default withEditing;
