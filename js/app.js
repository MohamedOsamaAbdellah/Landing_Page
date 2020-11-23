/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var sections = document.querySelectorAll('section');
var section = document.querySelector('section');
var nav = document.querySelector('nav');
var navList = document.querySelector('#navbar__list');

var sectionsArray = [...sections];
console.log(sectionsArray);            // Checking the array of sections

for (let i = 0; i < sectionsArray.length; i++) {
    var listElement = document.createElement("LI");                       // Create a <li> 
    var listElementAnchor = document.createElement("a");                  // Create a <a>
    listElementAnchor.href = "#section"+(i+1);
    listElementAnchor.classList.add('nav-item');
    var textListElement = document.createTextNode("Section " + (i + 1));         // Create a textListElement
    listElement.appendChild(listElementAnchor);                             // Append the anchor tag to <li>
    listElementAnchor.appendChild(textListElement);                             // Append the text to <a>

    listElement.classList.add('section__');
    listElement.classList.add('section__' + (i + 1));

    navList.appendChild(listElement);

    

}                           // Adding the navbar elements dynamically

console.log(navList);                                               // Checking <ul> has the right elements






// Adding the click events to every navElement

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


