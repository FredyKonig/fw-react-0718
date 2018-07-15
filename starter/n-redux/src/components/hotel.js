import React, { Component } from 'react';
import '../style.css';

class Hotel extends Component {

  render() {

    return (

        <form className="panel">
            <input type="radio" name="hotel" id="four" defaultChecked/>
            <label htmlFor="four">Four Star</label>
            <input type="radio" name="hotel" id="five"/>
            <label htmlFor="five">Five Star</label>
        </form>

    );
  }
}

export { Hotel }
