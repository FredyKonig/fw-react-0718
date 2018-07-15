// Plain JS code that turns an array into markup. React-like.

// Turn array into an array of strings containing markup

let basket = [ "Apples", "Pears" ];

basket.map( f => "<li>" + f + "</li>" )

// Glue all list items together

basket.map( f => "<li>" + f + "</li>" ).reduce((a,b) => a+b )

// Function that turns array into a list.

let turnArrayIntoList = data => "<ul>" + data.map( f => "<li>" + f + "</li>" ).reduce((a,b) => a+b ) + "</ul>";

// Inject markup into DOM:

document.querySelector("body").innerHTML = turnArrayIntoList( [ "Apples", "Pears" ] )
