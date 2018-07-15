import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Life.css';
import Life from './Life';

class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            json:[ "spain-2017.json","spain-2018.json" ]
        }
    }

    changeData = () => {
        let json = [...this.state.json];
        json.unshift(json.pop())
        this.setState( { json:json })
    }

    render() {

        let file = this.state.json[0];

        return (
            <section>
                <Life json={file}/>
                <p className="button" onClick={this.changeData}>Change data</p>
            </section>
        )
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
