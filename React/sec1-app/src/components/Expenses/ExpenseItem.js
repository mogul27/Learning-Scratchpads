// Import another component
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

// Make project aware of corresponding css file
import "./ExpenseItem.css";


// Props holds all the values (k:v pairs) that are passed in
// Here props contains, date, title, amount
// Can also create props using object destructuring from JS {}
function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!")
  }
    // Add Javascript code to function containing HTML
    // Data is date object so can't be put in as a string
    // Use curly braces for parameters or Javascript expression

    // In React we can use DOM events for any HTML element
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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