import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import securityCheck from '../testdata/securityCheck';
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecurityChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('allSecurityBar');
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
    const hqData = securityCheck.filter(data => data.area === 'HQ');
    const azData = securityCheck.filter(data => data.area === 'AZ');

    const hqOkay = hqData.filter(data => data.type === 'Normal').length;
    const hqInvalid = hqData.filter(data => data.type !== 'Normal').length;

    const azOkay = azData.filter(data => data.type === 'Normal').length;
    const azInvalid = azData.filter(data => data.type !== 'Normal').length;

    // Create the chart data
    setData({
      labels: ['HQ', 'AZ'],
      datasets: [
        {
          label: '正常',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [hqOkay, azOkay],
        },
        {
          label: '違規',
          backgroundColor: 'rgba(253, 152, 49, 0.6)',
          borderColor: 'rgba(253, 152, 49, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(253, 132, 39, 0.6)',
          hoverBorderColor: 'rgba(253, 152, 49, 1)',
          data: [hqInvalid, azInvalid],
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
        text: "違規狀況"
      }
    },
    barThickness: 30,
  };

  if (!loading) {
    return (
      <div style={{ width: '400px' }} id='allSecurityBar'>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

export default SecurityChart;
