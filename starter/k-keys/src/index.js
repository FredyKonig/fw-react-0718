import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import { getFruit } from "./testdata.js";

ReactDOM.render(<Todo getFruit={getFruit}/>, document.getElementById('root'));
