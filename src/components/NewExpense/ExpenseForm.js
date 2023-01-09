import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmoount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const [addingExpense, setAddingExpense] = useState(false);

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);

        //QUANDO L'AGGIORNAMENTO DI STATO DIPENDE DALLO STATO PRECEDENTE, NON SI USA MAI QUESTA FORMULA PER EVITARE
        //DI FARE RIFERIMENTO A UNO STATO ERRATO. SI USA INVECE LA ARROW FUNCTION
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value
        //})
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    }

    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })
    }

    const dateChangedHandler = (event) => {
        //setEnteredDate(event.target.value);
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        props.onSaveExpenseData(expenseData)
    }

    const formTogglerHandler = (event) => {
        setAddingExpense((prevSettingExpenses) => {
            return !prevSettingExpenses;
        })
    }

    if(addingExpense) {
        return (<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={formTogglerHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>);
    } else {
        return (<button onClick={formTogglerHandler}>Add New Expense</button>);
    }

}

export default ExpenseForm;