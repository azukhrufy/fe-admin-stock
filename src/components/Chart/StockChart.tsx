import { chartMoves } from "../../constant/chartMoves";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

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
      className={`chart-container`}
    >
      <Line
        data={chartMoves[props.activeFilter].data}
        options={options}
        width="740"
        height="162"
      />
    </div>
    </>
  );
};

export default StockChart;
