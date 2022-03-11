import React from 'react';
import ReactDom from 'react-dom';
// import RemoteButton2 from 'app2/Button2';
// import RemoteButton4 from 'app4/Button4';
const RemoteButton2 = React.lazy(() => import('app2/Button2'));
const RemoteButton4 = React.lazy(() => import('app4/Button4'));

window.a = 1;
console.log('in app1', __webpack_require__.S)
const App = () => 
{
  return (
  <div>
    <h1>Basic Host-Remote App1</h1>
    <h2>App 1 React.version: {React.version}</h2>
    <h2>App 1 ReactDom.version {ReactDom.version}</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton2 />
      <br />
      <br />
      <RemoteButton4 />
      {/* <RemoteButton3 /> */}
    </React.Suspense>
  </div>
);
  }

export default App;
