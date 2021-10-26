import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo'
import Test from './Test'
import Notes from './Notes'
import Setup from './Setup'
import Signature from './Signature'

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Setup />
    <Test />
    <Notes />
    <Signature />
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);


