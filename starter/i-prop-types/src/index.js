import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nutrition from './Nutrition';

let Demo = () =>

    <section className="panels">
        <Nutrition name="broccoli" calories={28} protein={87} type="cruciferous"/>
        <Nutrition name="cucumber" calories={42} protein={56} type="marrow" />
    </section>

ReactDOM.render(<Demo />, document.getElementById('root'));
