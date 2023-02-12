import { chartMoves } from "../../constant/chartMoves";
import { Line } from "react-chartjs-2";
import { Chart, registerables, ChartOptions } from "chart.js";

Chart.register(...registerables);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {},
  },
};

const StockChart = (props: any) => {
  return (
    <>
    <div
      className={`chart-container ${
        props.activeFilter === 0 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[0].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 1 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[1].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 2 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[2].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 3 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[3].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 4 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[4].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 5 ? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[5].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    <div
      className={`chart-container ${
        props.activeFilter === 6? "active" : "inactive"
      }`}
    >
      <Line
        data={chartMoves[6].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    </>
  );
};

export default StockChart;
