import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { getDatesInRange } from "@/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ judul, color, data }) {
  const Labels = getDatesInRange(new Date("2022-10-29"), new Date()).map(
    (item) =>
      item.getUTCDate() + "/" + item.getUTCMonth() + "/" + item.getUTCFullYear()
  );
  let choosenColor;
  switch (color) {
    case "sky":
      choosenColor = "#0369a1";
      break;
    case "pink":
      choosenColor = "rgb(255, 99, 132)";
      break;
    case "green":
      choosenColor = "#22c55e";
      break;
    case "amber":
      choosenColor = "#d97706";
      break;
    default:
      choosenColor = "#0369a1";
      break;
  }
  const dataUser = {
    labels: Labels,
    datasets: [
      {
        label: `${judul}`,
        backgroundColor: choosenColor,
        borderColor: choosenColor,
        data: Labels.map(() =>
          faker.datatype.number(
            judul == "Berat Badan (Kilogram)"
              ? { min: 45, max: 50 }
              : { min: 10, max: 100 }
          )
        ),
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      text: "Sales Charts",
      fontColor: "white",
    },
    legend: {
      labels: {
        fontColor: "white",
      },
      align: "end",
      position: "bottom",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: {
        ticks: {
          fontColor: "rgba(255,255,255,.7)",
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: "Month",
          fontColor: "white",
        },
        gridLines: {
          display: false,
          borderDash: [2],
          borderDashOffset: [2],
          color: "rgba(33, 37, 41, 0.3)",
          zeroLineColor: "rgba(0, 0, 0, 0)",
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
      yAxes: {
        ticks: {
          fontColor: "rgba(255,255,255,.7)",
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: "Value",
          fontColor: "white",
        },
        gridLines: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: "rgba(255, 255, 255, 0.15)",
          zeroLineColor: "rgba(33, 37, 41, 0)",
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    },
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded border">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {judul}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <Line options={options} data={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
}
