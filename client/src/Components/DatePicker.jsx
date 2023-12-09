import { useEffect } from "react";

function DatePicker({ Date, DateChange, DateType }) {
  //component accepts the date, function to change date, and what the date is for (eg. Birthday, Completion Date, etc.)
  //component allows user to pick a date
  var years;
  if (DateType === "Birthday") {
    years = Array.from({ length: 110 }, (_, i) => 2023 - i);
  } else {
    years = Array.from({ length: 3 }, (_, i) => 2023 + i);
  }
  console.log(Date);
  function changeSelectedDate(daysInMonth) {
    DateChange({ ...Date, day: daysInMonth });
  }

  const handleMonthChange = (e) => {
    DateChange({ ...Date, month: e.target.value });
  };

  const handleDayChange = (e) => {
    DateChange({ ...Date, day: e.target.value });
  };

  const handleYearChange = (e) => {
    DateChange({ ...Date, year: e.target.value });
  };

  const calculateDaysInMonth = (month, year) => {
    if (month === "1") {
      return year % 4 === 0 ? 29 : 28;
    } else if (["3", "5", "8", "10"].includes(month)) {
      return 30;
    } else {
      return 31;
    }
  };

  useEffect(() => {
    const daysInMonth = calculateDaysInMonth(Date.month, Date.year);
    if (Date.day >= daysInMonth) {
      changeSelectedDate(daysInMonth);
    }
  }, [Date.day, Date.month, Date.year]);

  return (
    <>
      <label htmlFor="birthday" className="block mb-3 text-gray-600">
        {DateType}
      </label>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="month" className="block text-gray-600">
            Month
          </label>
          <select
            id="month"
            name="month"
            onChange={handleMonthChange}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>
        <div>
          <label htmlFor="day" className="block text-gray-600">
            Day
          </label>
          <select
            id="day"
            name="day"
            onChange={handleDayChange}
            value={Date.day}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {Array.from(
              { length: calculateDaysInMonth(Date.month, Date.year) },
              (_, i) => i + 1
            ).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year" className="block text-gray-600">
            Year
          </label>
          <select
            id="year"
            name="year"
            onChange={handleYearChange}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default DatePicker;
