
import React, { Component } from 'react';
import { Switch,Route,BrowserRouter,Link,Redirect } from 'react-router-dom'

import { MountainShed } from "./packs.js" ;

// ---------------------------------------------------------------------------

class Hike extends Component {

  render() {

    return (
        <section>
            <NavBar/>
        </section>
    );
  }
}

// ---------------------------------------------------------------------------

const NavBar = props => (

    <header>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/team'>Team</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/packs'>Packs</a></li>
            <li><a href='/admin'>Admin</a></li>
          </ul>
        </nav>

        <img src="/images/hike.png" alt="hiking"/>
    </header>

)

// ---------------------------------------------------------------------------

let Home = () => <h2><span>Mountain Shed</span> for all your hiking needs</h2>

let Admin = () => <h2>Admin tools</h2>

let Team = () => <h2>Our Team</h2>

let Contact = () => <h2>Contact Us</h2>

// ---------------------------------------------------------------------------

let Packs = props => {

    return (
        <section className="packs">
            <h2>Packs</h2>
        </section>
    )
}

// ---------------------------------------------------------------------------

let Error = ({location}) => <h2>404 No page called <span>{location.pathname}</span></h2>

// ---------------------------------------------------------------------------

export default Hike;
