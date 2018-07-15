import React, { Component } from 'react';
import './Holiday.css';

class Holiday extends Component {

    render() {

        return (
            <article>
                <form id="holiday">
            		<section>
            			<label>City</label>
            			<input type="text" name="city" />
                        <span className="form-warning">error</span>
            		</section>

            		<section>
            			<label>Passport</label>
            			<input type="text" name="passport" />
                        <span className="form-warning">error</span>
            		</section>

            		<input type="submit" value="Buy Holiday"/>
            	</form>
            </article>
        );
    }
}

export default Holiday;
