import AttendanceTable from "./AttendanceTable";

/* eslint-disable react/prop-types */
const Attendance = ({ attendance }) => {
  // console.log(attendance);
  return (
    <div className="attendance-section">
      <div className="attendance-heading">ATTENDANCE</div>
      <div className="attendance-table">
        <AttendanceTable attendanceData={attendance} />
      </div>
    </div>
  );
};

export default Attendance;
