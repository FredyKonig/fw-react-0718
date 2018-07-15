import React, { Component } from "react";

class DataComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        let { json } = this.props;

        fetch(json)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ data: data });
            });
    }

    render() {
        return <Regions data={this.state.data} />;
    }
}

const Regions = props => (
    <ul className="flex">
        {props.data.map((city, n) => (
            <li key={n}>
                {city.name}
                <span>{city.region}</span>
            </li>
        ))}
    </ul>
);

export { DataComponent };

// ===================================================================
