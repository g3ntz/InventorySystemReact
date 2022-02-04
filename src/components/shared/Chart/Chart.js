import { Chart, registerables } from "chart.js";
import * as $ from "jquery";
import { StyledChart, StyledCanvas } from "./Chart.styled";

const LineChart = ({ data }) => {
  return (
    <StyledChart>
      <StyledCanvas id="myChart">
        <script>
          document.addEventListener('DOMContentLoaded', function(){" "}
          {onBoot(data)}, false);
        </script>
      </StyledCanvas>
    </StyledChart>
  );
};

const onBoot = (data) => {
  Chart.register(...registerables);
  $(document).ready(() => {
    let chartStatus = Chart.getChart("myChart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    let canvas = document.getElementById("myChart");
    let ctx = canvas.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: data.data,
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
            suggestedMin: 0,
            suggestedMax: 200,
          },
        },
      },
    });
  });
};

export default LineChart;
