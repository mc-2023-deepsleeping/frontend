import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import punchCard from '../testdata/punchCard';
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AttendanceChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('allAttendanceBar');
      if (chartContainer) {
        html2canvas(chartContainer).then((canvas) => {
          const chartImage = canvas.toDataURL('image/png');
          if (props.setImage) {
            props.setImage(chartImage);
          }
        });
      }
    }, 500);
  }, [])

  useEffect(() => {
    const hqData = punchCard.filter(data => data.area === 'HQ');
    const azData = punchCard.filter(data => data.area === 'AZ');

    // Count the number of onTime true/false for each area
    const hqEarly = hqData.filter(data => data.status === 'early').length;
    const hqNormal = hqData.filter(data => data.status === 'normal').length;
    const hqLate = hqData.filter(data => data.status === 'late').length;
    const azEarly = azData.filter(data => data.status === 'early').length;
    const azNormal = azData.filter(data => data.status === 'normal').length;
    const azLate = azData.filter(data => data.status === 'late').length;

    // Create the chart data
    setData({
      labels: ['HQ', 'AZ'],
      datasets: [
        {
          label: '早到',
          backgroundColor: 'rgba(253, 152, 49, 0.4)',
          borderColor: 'rgba(253, 152, 49, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(233, 132, 49, 0.6)',
          hoverBorderColor: 'rgba(233, 132, 49, 1)',
          data: [hqEarly, azEarly],
        },
        {
          label: '準時',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [hqNormal, azNormal],
        },
        {
          label: '遲到',
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [hqLate, azLate],
        },
      ],
    });

    setLoading(false);
  }, [])


  // Create the chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: false,
        text: "出勤狀況"
      }
    },
    barThickness: 30,
  };

  if (!loading) {
    return (
      <div style={{ width: '400px' }} id='allAttendanceBar'>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

const AttendancePieChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('allAttendancePie');
      if (chartContainer) {
        html2canvas(chartContainer).then((canvas) => {
          const chartImage = canvas.toDataURL('image/png');
          if (props.setImage) {
            props.setImage(chartImage);
          }
        });
      }
    }, 500);
  }, [])

  useEffect(() => {
    const hqData = punchCard.filter(data => data.area === 'HQ');
    const azData = punchCard.filter(data => data.area === 'AZ');

    // Count the number of onTime true/false for each area
    const hqEarly = hqData.filter(data => data.status === 'early').length;
    const hqNormal = hqData.filter(data => data.status === 'normal').length;
    const hqLate = hqData.filter(data => data.status === 'late').length;
    const azEarly = azData.filter(data => data.status === 'early').length;
    const azNormal = azData.filter(data => data.status === 'normal').length;
    const azLate = azData.filter(data => data.status === 'late').length;

    // Create the chart data
    setData({
      labels: ['早到', '準時', '遲到'],
      datasets: [
        {
          label: '早到',
          backgroundColor: ['rgba(253, 152, 49, 0.6)', 'rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)'],
          borderColor: ['rgba(253, 152, 49, 1)', 'rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(233, 132, 49, 0.6)', 'rgba(75,192,192,0.6)', 'rgba(255,99,132,0.6)'],
          hoverBorderColor: ['rgba(233, 132, 49, 1)', 'rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
          data: [hqEarly + azEarly, hqNormal + azNormal, hqLate + azLate],
        },
      ],
    });

    setLoading(false);
  }, [])

  if (!loading) {
    return (
      <div style={{ width: '400px' }} id='allAttendancePie'>
        <Pie data={data} />
      </div>
    );
  }
}

export default AttendanceChart;

export { AttendancePieChart };