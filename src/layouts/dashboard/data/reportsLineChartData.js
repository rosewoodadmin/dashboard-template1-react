/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Array of known stock market open days for the last 200 days
var stockMarketOpenDays = [
  "2023-05-31",
  "2023-05-30",
  "2023-05-26",
  "2023-05-25",
  "2023-05-24",
  "2023-05-23",
  "2023-05-22",
  "2023-05-19",
  "2023-05-18",
  "2023-05-17",
  "2023-05-16",
  "2023-05-15",
  "2023-05-12",
  "2023-05-11",
  "2023-05-10",
  "2023-05-09",
  "2023-05-08",
  "2023-05-05",
  "2023-05-04",
  "2023-05-03",
  "2023-05-02",
  "2023-05-01",
  "2023-04-28",
  "2023-04-27",
  "2023-04-26",
  "2023-04-25",
  "2023-04-24",
  "2023-04-21",
  "2023-04-20",
  "2023-04-19",
  "2023-04-18",
  "2023-04-17",
  "2023-04-14",
  "2023-04-13",
  "2023-04-12",
  "2023-04-11",
  "2023-04-10",
  "2023-04-07",
  "2023-04-06",
  "2023-04-05",
  "2023-04-04",
  "2023-04-03",
  "2023-03-31",
  "2023-03-30",
  "2023-03-29",
  "2023-03-28",
  "2023-03-27",
  "2023-03-24",
  "2023-03-23",
  "2023-03-22",
  "2023-03-21",
  "2023-03-20",
  "2023-03-17",
  "2023-03-16",
  "2023-03-15",
  "2023-03-14",
  "2023-03-13",
  "2023-03-10",
  "2023-03-09",
  "2023-03-08",
  "2023-03-07",
  "2023-03-06",
  "2023-03-03",
  "2023-03-02",
  "2023-03-01",
];

function generateRandomNumbers(min, max) {
  const count = 64;
  const numbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }

  return numbers;
}

export default {
  data1: {
    labels: stockMarketOpenDays,
    datasets: { label: "SPY", data: generateRandomNumbers(100, 250) },
  },
  data2: {
    labels: stockMarketOpenDays,
    datasets: { label: "IWM", data: generateRandomNumbers(100, 250) },
  },
  data3: {
    labels: stockMarketOpenDays,
    datasets: { label: "IWO", data: generateRandomNumbers(100, 250) },
  },
  data4: {
    labels: stockMarketOpenDays,
    datasets: { label: "QQQ", data: generateRandomNumbers(100, 250) },
  },
  data5: {
    labels: stockMarketOpenDays,
    datasets: { label: "USO", data: generateRandomNumbers(100, 250) },
  },
  data6: {
    labels: stockMarketOpenDays,
    datasets: { label: "EEM", data: generateRandomNumbers(1000, 2500) },
  },
  data7: {
    labels: stockMarketOpenDays,
    datasets: { label: "TLT", data: generateRandomNumbers(100, 250) },
  },
  data8: {
    labels: stockMarketOpenDays,
    datasets: { label: "XLP", data: generateRandomNumbers(100, 250) },
  },
  data9: {
    labels: stockMarketOpenDays,
    datasets: { label: "XLU", data: generateRandomNumbers(100, 250) },
  },
};
