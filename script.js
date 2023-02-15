// when the page finishes loading, execute the rest of the code
window.onload = function() {

// Define the function for adding a border to a point
function clickPoint() {
	// Extract the `cx` and `cy` attributes of the clicked point
	let { cx, cy } = this.attributes;
	
	// Toggle the class of the clicked point based on the event listener to highlight
	this.classList.toggle("highlightBorder");
	
	// Update the display elements with the x and y coordinates of the clicked point
	document.querySelector("#last_point_placeholder").textContent = "Last point clicked: ";
	document.querySelector("#actual_point").textContent = `(${cx.value / 50},${(500 - cy.value) / 50})`;
  }

// Define the function for adding a new point to the graph
function addNewPoint() {
	// Get references to the input fields for the x and y coordinates
	let xInput = document.querySelector("#x-coordinate");
	let yInput = document.querySelector("#y-coordinate");
  
	// Convert the input values to the same scale as the graph
	let x = xInput.value * 50;
	let y = 500 - (yInput.value * 50);
  
	// Get a reference to the graph
	let axis = document.querySelector("#axis");
  
	// Add a new circle to the graph at the specified x and y coordinates
	axis.innerHTML += '<circle cx="' + x + '" cy="' + y + '" r="10"/>';
  
	// Get a list of all the points on the graph
	let points = document.getElementsByTagName("circle");
  
	// Loop through all the points and add an event listener for clicks
	for (let i = 0; i < points.length; i++) {
	  let currPoint = points[i];
	  currPoint.addEventListener("click", clickPoint);
	}
  }

// Get the submit button
let submit = document.querySelector("#submit");

// Add an event listener for clicks on the submit button
submit.addEventListener("click", addNewPoint);

// Get the list of all points on the graph
let points = document.getElementsByTagName("circle");

// Loop through all the points and add an event listener for clicks
for (let i = 0; i < points.length; i++) {
	let currPoint = points[i];
	currPoint.addEventListener("click", clickPoint);
}
};