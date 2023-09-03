// Make project aware of corresponding css file
import "./ExpenseItem.css";

// Props holds all the values (k:v pairs) that are passed in
// Here props contains, date, title, amount
function ExpenseItem(props) {
    // Add Javascript code to function containing HTML
    // Data is date object so can't be put in as a string
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 270.70
    // Use curly braces for parameters or Javascript expression

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// Use a corresponding css file for the component.
// Then import it to use it
