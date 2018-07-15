import React from 'react';
import { render } from 'react-dom';
import Shop from './shop';
import { fruitVeg } from './data';

import './style.css';

render(<Shop fruit={fruitVeg} />, document.querySelector('#root'));
