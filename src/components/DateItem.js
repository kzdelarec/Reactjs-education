import "./DateItem.css";

const DateItem = (props) => {
  const date =
    props.date.toLocaleString("hr-HR", { day: "2-digit" }) +
    props.date.toLocaleString("hr-HR", { month: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date-item">
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
};

export default DateItem;
