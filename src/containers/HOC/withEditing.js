import React from 'react';

const withEditing = (Component) => (props) => <Component {...props} contentEditable suppressContentEditableWarning onBlur={() => console.log('blur')} />

export default withEditing;
