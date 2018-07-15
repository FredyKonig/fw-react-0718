import React, { Component } from 'react';
import '../style.css';

const LHR = "Heathrow";
const LGW = "Gatwick" ;

class Airport extends Component {

  render() {

    return (
      <form className="panel">
            <input type="radio" name="airport" id={LGW} defaultChecked />
            <label htmlFor={LGW}>{LGW}</label>
            <input type="radio" name="airport" id={LHR}/>
            <label htmlFor={LHR}>{LHR}</label>
      </form>
    );
  }
}

export { Airport }
