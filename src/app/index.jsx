import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './components/Notes';


require('../views/assets/bootstrap/normalize.css');
require('../views/assets/bootstrap/bootstrap.css');
require('../views/styles/style.css');
ReactDOM.render(<Notes />, document.getElementById('notes'));
