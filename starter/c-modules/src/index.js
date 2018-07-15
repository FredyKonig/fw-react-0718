import React from 'react';
import { render } from 'react-dom';

import './style.css';

// ================================================================

var books = [
	{ author:"Matt Haig", title:"The Humans"},
	{ author:"Elizabeth Strout", title:"My Name is Lucy Barton"}
]

// ================================================================

let Book = ({ title, author }) =>

	<article>
		<p>{ title }</p>
		<p>{ author }</p>
	</article>

// ================================================================

let BookShelf = ({ shelf }) =>

	<section>
		{ shelf.map( (book,i) =>
			<Book key={i} {...book} />
		)}
	</section>

// ================================================================

render( <BookShelf shelf={books} />,document.getElementById("root"))
