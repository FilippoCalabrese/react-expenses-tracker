import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";

function Expenses(props) {

    const [year, setYear] = useState(2020);

    const onChangeHandler = (newYear) => {
        setYear(newYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year
    });



    return(
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeYear={onChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>

        </Card>
    );
}

export default Expenses;