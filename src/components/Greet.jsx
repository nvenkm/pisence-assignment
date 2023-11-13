const Greet = ({ name = "User" }) => {
  return <div className="greet">Hello! {name}</div>;
};

export default Greet;
