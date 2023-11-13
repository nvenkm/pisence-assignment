function Homework({ homework }) {
  return (
    <div className="homework-container">
      <div className="homework-heading">Homeworks</div>
      <div className="homework-content">
        {homework.map((subject) => (
          <span className="subject" key={subject}>
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Homework;
