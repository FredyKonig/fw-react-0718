import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { list : [ this.createItem() ] }
    }

    addItem = () => {
        let list = [ ...this.state.list ];
        list.push( this.createItem());
        this.setState( { list:list })
    }

    createItem = () => {
        let desc = this.props.getFruit();
        return { desc:desc }
    }

    render = () => <Draw list={this.state.list} addItem={this.addItem}/>

}

let Draw = props =>

    <section>
        <p className="button" onClick={props.addItem}>Add item</p>
        <hr/>

        <section>
            <ul>{ props.list.map((item,n) => <li><label>{item.desc}</label><input type="text"/></li> )}</ul>
        </section>
    </section>


export default Todo;
