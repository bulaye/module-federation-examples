import React from 'react';
import ReactDom from 'react-dom'
console.log('in app4', __webpack_require__.S)

const Button = () => <button>{window.a} React: {React.version}, ReactDom: {ReactDom.version} ||  App 4 Button</button>;

export default Button;
