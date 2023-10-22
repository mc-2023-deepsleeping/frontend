import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import invalidItem from '../testdata/securityCheck';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Testing Chart"
    }
  },
  barThickness: 50,
};



const DrawChart = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let scissors_hq = 0;
    let pistol_hq = 0;
    let scissors_az = 0;
    let pistol_az = 0;

    const data_az = invalidItem.filter((item) => item.area === 'AZ');
    const data_hq = invalidItem.filter((item) => item.area === 'HQ');

    data_az.forEach((item) => {
      if (item.type === '剪刀') {
        scissors_az += 1;
      } else {
        pistol_az += 1;
      }
    });
    data_hq.forEach((item) => {
      if (item.type === '剪刀') {
        scissors_hq += 1;
      } else {
        pistol_hq += 1;
      }
    })

    const object = {
      labels: ['剪刀', '手槍'],
      datasets: [
        {
          label: 'HQ',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          data: [scissors_hq, pistol_hq]
        },
        {
          label: 'AZ',
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          data: [scissors_az, pistol_az]
        }
      ]
    }
    setData(object);
    setLoading(false);
  }, [])

  if (!loading) {
    return (
      <div style={{ width: '500px' }}>
        <Bar data={data} options={options} />
      </div>
    );
  }
};

export default DrawChart;
