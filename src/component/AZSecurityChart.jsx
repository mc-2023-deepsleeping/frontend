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

const AzSecurityChart = (props) => {
  // Filter the data by area
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('azSecurityBar');
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
    const azData = securityCheck.filter(data => data.area === 'AZ');
    const total = azData.length;

    const items = {
      Scissor: azData.filter(data => data.type === 'Scissor').length,
      Knife: azData.filter(data => data.type === 'Knife').length,
      Gun: azData.filter(data => data.type === 'Gun').length,
      Laptop: azData.filter(data => data.type === 'Laptop').length,
      ElectronicDevice: azData.filter(data => data.type === 'ElectronicDevice').length,
    }

    // Create the chart data
    setData({
      labels: ['正常', '剪刀', '刀子', '槍枝', '筆電', '電子設備'],
      datasets: [
        {
          label: 'az',
          backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(253, 152, 49, 0.6)', 'rgba(253, 152, 49, 0.6)', 'rgba(253, 152, 49, 0.6)', 'rgba(253, 152, 49, 0.6)', 'rgba(253, 152, 49, 0.6)'],
          borderColor: ['rgba(75,192,192,1)', 'rgba(253, 152, 49, 1)', 'rgba(253, 152, 49, 1)', 'rgba(253, 152, 49, 1)', 'rgba(253, 152, 49, 1)', 'rgba(253, 152, 49, 1)'],
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(233, 132, 49, 0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [total - items.Scissor - items.Knife - items.Gun - items.Laptop - items.ElectronicDevice, items.Scissor, items.Knife, items.Gun, items.Laptop, items.ElectronicDevice],
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
        position: "bottom"
      },
      title: {
        display: false,
        text: "安檢結果"
      }
    },
    barThickness: 30,
  };

  if (!loading) {
    return (
      <div style={{ width: '400px' }} id='azSecurityBar'>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

export default AzSecurityChart;
