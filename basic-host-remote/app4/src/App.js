import LocalButton from './Button';
import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <div>
    <h1>Basic App 4</h1>
    <h2>react version {React.version}</h2>
    <h2>reactDom version {ReactDom.version}</h2>
    <LocalButton />
  </div>
);

export default App;
