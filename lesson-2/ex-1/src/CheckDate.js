import React from "react";

function CheckDate() {
  return (
    <div>
      <h3>Today {isFriday(new Date()) ? "is" : "is not"} Friday</h3>
    </div>
  );

  function isFriday(date) {
    return date.getDay() === 5 ? true : false;
  }
}

export default CheckDate;
