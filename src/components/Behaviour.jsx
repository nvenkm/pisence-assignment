import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function getNumberOfGoodAndBads(behavioralAnalytics) {
  const res = [];
  let goods = 0;
  let bads = 0;
  for (let analytic of behavioralAnalytics) {
    if (analytic === "good") {
      goods++;
    } else {
      bads++;
    }
  }
  res.push(goods);
  res.push(bads);

  //   console.log(res);

  return res;
}

const Behaviour = ({ behavioralAnalytics }) => {
  const analytics = getNumberOfGoodAndBads(behavioralAnalytics);

  const data = {
    labels: ["good", "bad"],
    datasets: [
      {
        label: "# of Votes",
        data: analytics,
        backgroundColor: ["green", "red"],
      },
    ],
  };
  return (
    <div className="behaviour-container">
      <div className="behaviour-heading">Behavioral Analytics</div>
      <div className="pie-chart">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Behaviour;
