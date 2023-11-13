import Header from "./components/Header";
import "./App.css";
import Greet from "./components/Greet";
import Attendance from "./components/Attendance";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Homework from "./components/Homework";
import Behaviour from "./components/Behaviour";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch("../data/data.json");
        const data = await res.json();
        // console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message, error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="main-section">
            <Greet />
            <Attendance attendance={data.ATTENDANCE} />
            <div className="bottom">
              <Homework homework={data.homework} />
              <Behaviour behavioralAnalytics={data.behavioralAnalytics} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
