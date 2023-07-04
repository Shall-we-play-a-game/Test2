const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define the Fruit class
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// Sample fruits data
const fruits = [
  new Fruit(1, "Apple", "Red"),
  new Fruit(2, "Banana", "Yellow"),
  new Fruit(3, "Grapes", "Green"),
  new Fruit(4, "Orange", "Orange"),
  new Fruit(5, "Blueberry", "Blue"),
  new Fruit(6, "Raspberry", "Pink"),
];

// Define a route to render the fruits view
app.get("/fruits", (req, res) => {
  // Sort the fruits based on color
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.render("fruits", { fruits: sortedFruits });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
