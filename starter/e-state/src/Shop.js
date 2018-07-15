import React, { Component } from "react";

class Shop extends Component {

    render() {
        return (
            <section className="shop">

                {this.props.basket.map((name, n) => {

                    return (
                        <section className="panel" key={n}>
                            <h2>0</h2>
                            <h4>{name}</h4>
                            <p>Up</p>
                            <p>Down</p>
                        </section>
                    );
                    
                })}

            </section>
        );
    }
}

export default Shop;
