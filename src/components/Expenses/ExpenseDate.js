import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const dateMonth = props.date.toLocaleString("en-US", { month: "long" });
  const dateYear = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateMonth}</div>
      <div className="expense-date__year">{dateYear}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
