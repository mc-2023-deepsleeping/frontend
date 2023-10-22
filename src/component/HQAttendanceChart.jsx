import React, { useEffect, useState } from 'react';
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

const HQAttendanceChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('HQAttendanceBar');
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

    // Count the number of onTime true/false for each area
    const hqEarly = hqData.filter(data => data.status === 'early').length;
    const hqNormal = hqData.filter(data => data.status === 'normal').length;
    const hqLate = hqData.filter(data => data.status === 'late').length;

    // Create the chart data
    setData({
      labels: ['早到', '準時', '遲到'],
      datasets: [
        {
          label: 'HQ',
          backgroundColor: ['rgba(253, 152, 49, 0.6)', 'rgba(75,192,192,0.4)', 'rgba(255,99,132,0.4)'],
          borderColor: ['rgba(253, 152, 49, 1)', 'rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(233, 132, 49, 0.6)', 'rgba(75,192,192,0.6)', 'rgba(255,99,132,0.6)'],
          hoverBorderColor: ['rgba(233, 132, 49, 1)', 'rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
          data: [hqEarly, hqNormal, hqLate],
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
        display: false,
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
      <div style={{ width: '400px' }} id='HQAttendanceBar'>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

const HQAttendancePieChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('HQAttendancePie');
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
          data: [hqEarly, hqNormal, hqLate],
        },
      ],
    });

    setLoading(false);
  }, [])

  if (!loading) {
    return (
      <div style={{ width: '400px' }} id='HQAttendancePie'>
        <Pie data={data} />
      </div>
    );
  }
}

export default HQAttendanceChart;

export { HQAttendancePieChart };