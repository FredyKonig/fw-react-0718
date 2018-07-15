
import React, {Component} from 'react';
import './Life.css';

class Life extends Component {

    constructor(props) {
        super(props)
        this.state = { data: [], letters:[] }
        console.log("constructor");
    }

    componentDidUpdate( prevProps ) {

        console.log("componentDidUpdate", prevProps, this.props );

        if(prevProps.json !== this.props.json) {
            this.getJson("componentDidUpdate");
        }
    }

    componentDidMount() {
        this.getJson("componentDidMount");
    }

    getJson( debug ) {

        console.log("getJson" , debug , this.props.json );

        fetch( this.props.json )
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ data:data })
            })
            .catch( e => {
                this.setState({ data:[] });
            })
    }

    createLetter = () => {
        let random = String.fromCharCode(65 + Math.floor(Math.random() * 25));
        this.setState({ letters : [...this.state.letters, random ] })
    }

    render() {

        console.log("render");

        let {data,letters} = this.state;
        let {json} = this.props;

        return (
            <section>
                <p className="data">{json}<span>{JSON.stringify(data)}</span></p>
                <p>Letters<span>{letters.join(' ')}</span></p>
                <p className="button" onClick={this.createLetter}>Random Letter</p>
            </section>
        );
    }
}

export default Life;
