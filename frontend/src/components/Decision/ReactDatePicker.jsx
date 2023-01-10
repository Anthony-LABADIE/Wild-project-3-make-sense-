import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import CurrentDecisionContext from "../../Contexts/DecisionContexts";

import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const { setInput, input } = useContext(CurrentDecisionContext);
  // function handleDate(date) {
  //   setStartDate(date);
  //   handleDateChange;
  // }
  const handleDateChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      onSelect={handleDateChange}
      dateFormat="yyyy/MM/dd/"
      filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
      name="Date"
      value=""
    />
  );
}
export default ReactDatePicker;
