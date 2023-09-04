// Import another component
import React, { useState } from 'react'

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Make project aware of corresponding css file
import "./ExpenseItem.css";

// Props holds all the values (k:v pairs) that are passed in
// Here props contains, date, title, amount
// Can also create props using object destructuring from JS {}
function ExpenseItem(props) {

  //use State returns an array that contains two elements
  // 1. Variable itself
  // 2. func to assigning new value to the variable
  const [title, setTitle] = useState(props.title)

  // Use state is a React hook (Begin with use)
  // Must be called within component functions
  // NOT nested within
  // Use State creates a special vairable that when changed
  // causes React to re-evaluate the component
  // Argument is initial state
  useState(props.title);

  const clickHandler = () => {
    // This causes react to redraw the screen
    setTitle('Updated!');
  };
  // Add Javascript code to function containing HTML
  // Data is date object so can't be put in as a string
  // Use curly braces for parameters or Javascript expression

  // In React we can use DOM events for any HTML element
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// Use a corresponding css file for the component.
// Then import it to use it
// <ExpenseDate /> is self-closing if no content between tags
