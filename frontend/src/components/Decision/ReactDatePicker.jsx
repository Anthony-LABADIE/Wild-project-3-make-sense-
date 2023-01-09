import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
    />
  );
}
export default ReactDatePicker;
