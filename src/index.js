import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo'
import Test from './Test'
import Notes from './Notes'
import Setup from './Setup'
import Signature from './Signature'
import Summary from './Summary'
import './index.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Setup />
    <Container>
    <Test />
    <Notes />
    <Summary />
    <Signature />
    <Demo />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


