import React, { Component } from 'react';
import './App.css';

class Nutrition extends Component {

    render() {

        let { name, calories, protein,type } = this.props;

        return (
            <section className="panel">
                <p><span>Name</span>{ name }</p>
                <p><span>Calories</span>{ calories }</p>
                <p><span>Protein</span>{ protein }</p>
                <p><span>Type</span>{ type }</p>
            </section>
        )
    }
}

export default Nutrition;
