import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "아이폰14",
        "아이폰13",
        "아이폰12",
        "아이폰11",
        "아이폰9",
        "아이폰8",
        "아이폰7",
      ],
      datasets: [
        {
          label: "현재 아이폰 사용자",
          data: [727619, 291658, 162541, 140210, 78053, 76359, 63401],
          borderColor: `rgb(53,162,235)`,
          backgroundColor: `rgb(53, 162, 235, 0.4)`,
        },
      ],
    });
    setchartOptions({
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "2023년 기준",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <div>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
