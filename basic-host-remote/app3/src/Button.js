import React from 'react';
import ReactDom from 'react-dom'
console.log(ReactDom)
console.log(React)
const Button = () => <button>React: {React.version}, ReactDom: {ReactDom.version} ||  App 3 Button</button>;

export default Button;
