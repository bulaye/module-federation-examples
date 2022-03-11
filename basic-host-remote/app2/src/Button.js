import React from 'react';
import ReactDom from 'react-dom'
console.log('in app2', __webpack_require__.S)
const Button = () => <button>{window.a} React: {React.version}, ReactDom: {ReactDom.version} ||  App 2 Button</button>;

export default Button;
