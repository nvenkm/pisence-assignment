import Box from "./Box";

/* eslint-disable react/prop-types */
const AttendanceTable = ({ attendanceData }) => {
  // Extract days, dates, fn attendance, and an attendance from the data
  const days = Object.keys(attendanceData);
  const dates = days.map((day) => attendanceData[day].date);
  const fnAttendance = days.map((day) => attendanceData[day].fn);
  const anAttendance = days.map((day) => attendanceData[day].an);

  return (
    <table>
      <thead>
        {/* <tr>
          <th>Day</th>
          <th>Date</th>
          <th>FN Attendance</th>
          <th>AN Attendance</th>
        </tr> */}
      </thead>
      <tbody>
        {/* DAYS */}
        <tr>
          <th></th>
          {days.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>

        {/* DATE */}
        <tr>
          <td></td>
          {dates.map((date, index) => (
            <td className="table-date" key={index}>
              {date}
            </td>
          ))}
        </tr>

        {/* FN */}
        <tr>
          <td className="table-date">FN</td>
          {fnAttendance.map((fn, index) => (
            <td key={index}>
              <div className="box-container">
                {fn === "present" ? <Box color="green" /> : <Box color="red" />}
              </div>
            </td>
          ))}
        </tr>

        {/* AN */}
        <tr>
          <td className="table-date">AN</td>
          {anAttendance.map((an, index) => (
            <td key={index}>
              <div className="box-container">
                {an === "present" ? <Box color="green" /> : <Box color="red" />}
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default AttendanceTable;
