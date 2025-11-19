"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
const  options = {
        cutout: "60%",
        plugins: {
            legend: {
                display: false
              }
            }
          }
const data = {
  labels: [
    'ACCOUNT 1',
    'ACCOUNT 2',
    'ACCOUNT 3'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4,
    
    
  }]
};

  return <Doughnut data={data} options={options}/>
  
}

export default DoughnutChart