import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if(props.items.length===0){
        return <p className="expenses-list__fallback">Found no expenses</p>
    }

    return <ul className="expenses-list">
        {
            props.items.map((item)=> (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                ></ExpenseItem>
            ))
        }
    </ul>
}

export default ExpensesList;