import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <Router basename='/videoclub/'>
      <App />
    </Router>
  </React.StrictMode>
);

// references
// https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
// https://codedamn.com/news/javascript/javascript-round-a-number-to-2-decimal-places-with-examples
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
