import React from 'react';
import { render } from 'react-dom';
import BookShelf from './Books';
import { winners } from './data';

import './style.css';

render(<BookShelf books={winners} />, document.querySelector('#root'));
