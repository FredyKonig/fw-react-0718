import React, { Component } from 'react';
import { render } from 'react-dom';
import { Airport } from './components/airport';
import { Hotel } from './components/hotel';
import { Trips } from './components/trips';
import './style.css';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
        <section>

            <section className="panels">
                <Airport/>
                <Hotel/>
            </section>

            <Trips/>
        </section>
    )
  }
}

render( <App/> , document.getElementById('root'));
