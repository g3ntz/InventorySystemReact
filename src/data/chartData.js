const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [
  100, 20, 20, 60, 60, 120, 150, 180, 120, 125, 105, 110, 170,
];
const datapoints2 = [
  100, 20, 20, 60, 150, 120, 150, 180, 120, 125, 105, 110, 170,
];
const datapoints3 = [
  30, 190, 20, 60, 150, 120, 10, 180, 120, 125, 105, 160, 170,
];

export const chartData = {
  labels: labels,
  data: [
    {
      label: "Purchased",
      data: datapoints,
      borderColor: "#0D3C5C",
      fill: true,
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    {
      label: "Remaining",
      data: datapoints2,
      borderColor: "#D01818",
      fill: true,
      cubicInterpolationMode: "monotone",
      tension: 0.4,
    },
    {
      label: "Used",
      data: datapoints3,
      borderColor: "#1AB394",
      cubicInterpolationMode: "monotone",
      fill: true,
      tension: 0.4,
    },
  ],
};
