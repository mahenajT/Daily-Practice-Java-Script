// Selects all elements with the class name "list".
let lists = document.getElementsByClassName("list");

// Gets the element with the ID "right", which is the right box.
let rightBox = document.getElementById("right");

// Gets the element with the ID "left", which is the left box.
let leftBox = document.getElementById("left");

// Loops through each element with the class name "list".
for (let list of lists) {
  // Adds an event listener for the "dragstart" event.
  list.addEventListener("dragstart", function (e) {
    // Stores the element being dragged in the "selected" variable.
    let selected = e.target;

    // Adds an event listener for the "dragover" event on the right box.
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault(); // Prevents the default behavior to allow dropping.
    });

    // Adds an event listener for the "drop" event on the right box.
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected); // Appends the dragged element to the right box.
      selected = null; // Clears the reference to the dragged element.
    });

    // Adds an event listener for the "dragover" event on the left box.
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault(); // Prevents the default behavior to allow dropping.
    });

    // Adds an event listener for the "drop" event on the left box.
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected); // Appends the dragged element to the left box.
      selected = null; // Clears the reference to the dragged element.
    });
  });
}
