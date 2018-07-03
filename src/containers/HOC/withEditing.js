import React from 'react';

const withEditing = (Component) => (
  class ComponentWithEditing extends React.Component {
    onInputValueChange = (e) => {
      console.log(e.target);
    }

    render() {
      return (
        <div onBlur={() => console.log('blur')} contentEditable suppressContentEditableWarning>
          <Component {...this.props} />
        </div>
      )
    }
  }
)

export default withEditing;
