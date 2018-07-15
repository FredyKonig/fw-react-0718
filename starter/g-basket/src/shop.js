
import React from 'react';

class Shop extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};
	}

	render() {
		return (
			<section className="shelf">
				{ this.props.fruit.map((item,n) => <Item key={n} name={item} /> )}
			</section>
		)
	}
}

let Item = props => <p>{props.name}</p>

export default Shop;
