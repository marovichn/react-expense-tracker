import { useState } from "react";

import "./ExpenseItem.css";
import ExpanseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("title#2");
    console.log("vale ");
  };

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date}></ExpanseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
