import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // Means to unpack the values inside
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // Using props to pass values up to parent
    // (Pass data so we're lifting the state up)
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      {/* Use on because we're going to have a function for the prop to define 
      behaviour when something happens */}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
