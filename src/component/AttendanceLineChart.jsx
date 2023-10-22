import punchCardData from '../testdata/punchCard';
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['09/27', '09/28', '09/29', '09/30', '10/01', '10/02', '10/03'];

const AttendanceLineChart = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('allAttendanceLine');
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
    const day1Early = punchCardData.filter(data => data.date.includes('2023/09/27') && data.status === 'early').length;
    const day1Normal = punchCardData.filter(data => data.date.includes('2023/09/27') && data.status === 'normal').length;
    const day1Late = punchCardData.filter(data => data.date.includes('2023/09/27') && data.status === 'late').length;
    const day2Early = punchCardData.filter(data => data.date.includes('2023/09/28') && data.status === 'early').length;
    const day2Normal = punchCardData.filter(data => data.date.includes('2023/09/28') && data.status === 'normal').length;
    const day2Late = punchCardData.filter(data => data.date.includes('2023/09/28') && data.status === 'late').length;
    const day3Early = punchCardData.filter(data => data.date.includes('2023/09/29') && data.status === 'early').length;
    const day3Normal = punchCardData.filter(data => data.date.includes('2023/09/29') && data.status === 'normal').length;
    const day3Late = punchCardData.filter(data => data.date.includes('2023/09/29') && data.status === 'late').length;
    const day4Early = punchCardData.filter(data => data.date.includes('2023/09/30') && data.status === 'early').length;
    const day4Normal = punchCardData.filter(data => data.date.includes('2023/09/30') && data.status === 'normal').length;
    const day4Late = punchCardData.filter(data => data.date.includes('2023/09/30') && data.status === 'late').length;
    const day5Early = punchCardData.filter(data => data.date.includes('2023/10/01') && data.status === 'early').length;
    const day5Normal = punchCardData.filter(data => data.date.includes('2023/10/01') && data.status === 'normal').length;
    const day5Late = punchCardData.filter(data => data.date.includes('2023/10/01') && data.status === 'late').length;
    const day6Early = punchCardData.filter(data => data.date.includes('2023/10/02') && data.status === 'early').length;
    const day6Normal = punchCardData.filter(data => data.date.includes('2023/10/02') && data.status === 'normal').length;
    const day6Late = punchCardData.filter(data => data.date.includes('2023/10/02') && data.status === 'late').length;
    const day7Early = punchCardData.filter(data => data.date.includes('2023/10/03') && data.status === 'early').length;
    const day7Normal = punchCardData.filter(data => data.date.includes('2023/10/03') && data.status === 'normal').length;
    const day7Late = punchCardData.filter(data => data.date.includes('2023/10/03') && data.status === 'late').length;

    setData({
      labels,
      datasets: [
        {
          label: '早到',
          data: [day1Early, day2Early, day3Early, day4Early, day5Early, day6Early, day7Early],
          backgroundColor: 'rgba(253, 152, 49, 0.5)',
          borderColor: 'rgba(253, 152, 49, 1)',
        },
        {
          label: '準時',
          data: [day1Normal, day2Normal, day3Normal, day4Normal, day5Normal, day6Normal, day7Normal],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.5)',
        },
        {
          label: '遲到',
          data: [day1Late, day2Late, day3Late, day4Late, day5Late, day6Late, day7Late],
          backgroundColor: 'rgba(255,99,132,0.5)',
          borderColor: 'rgba(255,99,132,1)',
        },
      ],
    })

    setLoading(false);
  }, [])

  return loading ||
    <div id='allAttendanceLine'>
      <Line options={options} data={data} />˝
    </div>;
}

const HQAttendanceLineChart = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('HQAttendanceLine');
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
    const filtered = punchCardData.filter(data => data.area === 'HQ');

    const day1Early = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'early').length;
    const day1Normal = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'normal').length;
    const day1Late = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'late').length;
    const day2Early = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'early').length;
    const day2Normal = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'normal').length;
    const day2Late = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'late').length;
    const day3Early = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'early').length;
    const day3Normal = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'normal').length;
    const day3Late = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'late').length;
    const day4Early = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'early').length;
    const day4Normal = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'normal').length;
    const day4Late = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'late').length;
    const day5Early = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'early').length;
    const day5Normal = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'normal').length;
    const day5Late = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'late').length;
    const day6Early = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'early').length;
    const day6Normal = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'normal').length;
    const day6Late = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'late').length;
    const day7Early = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'early').length;
    const day7Normal = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'normal').length;
    const day7Late = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'late').length;

    setData({
      labels,
      datasets: [
        {
          label: '早到',
          data: [day1Early, day2Early, day3Early, day4Early, day5Early, day6Early, day7Early],
          backgroundColor: 'rgba(253, 152, 49, 0.5)',
          borderColor: 'rgba(253, 152, 49, 1)',
        },
        {
          label: '準時',
          data: [day1Normal, day2Normal, day3Normal, day4Normal, day5Normal, day6Normal, day7Normal],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.5)',
        },
        {
          label: '遲到',
          data: [day1Late, day2Late, day3Late, day4Late, day5Late, day6Late, day7Late],
          backgroundColor: 'rgba(255,99,132,0.5)',
          borderColor: 'rgba(255,99,132,1)',
        },
      ],
    })

    setLoading(false);
  }, [])

  return loading || <div id='HQAttendanceLine'>
    <Line options={options} data={data} />˝
  </div>;;
}

const AZAttendanceLineChart = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const chartContainer = document.getElementById('AZAttendanceLine');
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
    const filtered = punchCardData.filter(data => data.area === 'AZ');

    const day1Early = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'early').length;
    const day1Normal = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'normal').length;
    const day1Late = filtered.filter(data => data.date.includes('2023/09/27') && data.status === 'late').length;
    const day2Early = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'early').length;
    const day2Normal = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'normal').length;
    const day2Late = filtered.filter(data => data.date.includes('2023/09/28') && data.status === 'late').length;
    const day3Early = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'early').length;
    const day3Normal = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'normal').length;
    const day3Late = filtered.filter(data => data.date.includes('2023/09/29') && data.status === 'late').length;
    const day4Early = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'early').length;
    const day4Normal = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'normal').length;
    const day4Late = filtered.filter(data => data.date.includes('2023/09/30') && data.status === 'late').length;
    const day5Early = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'early').length;
    const day5Normal = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'normal').length;
    const day5Late = filtered.filter(data => data.date.includes('2023/10/01') && data.status === 'late').length;
    const day6Early = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'early').length;
    const day6Normal = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'normal').length;
    const day6Late = filtered.filter(data => data.date.includes('2023/10/02') && data.status === 'late').length;
    const day7Early = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'early').length;
    const day7Normal = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'normal').length;
    const day7Late = filtered.filter(data => data.date.includes('2023/10/03') && data.status === 'late').length;

    setData({
      labels,
      datasets: [
        {
          label: '早到',
          data: [day1Early, day2Early, day3Early, day4Early, day5Early, day6Early, day7Early],
          backgroundColor: 'rgba(253, 152, 49, 0.5)',
          borderColor: 'rgba(253, 152, 49, 1)',
        },
        {
          label: '準時',
          data: [day1Normal, day2Normal, day3Normal, day4Normal, day5Normal, day6Normal, day7Normal],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.5)',
        },
        {
          label: '遲到',
          data: [day1Late, day2Late, day3Late, day4Late, day5Late, day6Late, day7Late],
          backgroundColor: 'rgba(255,99,132,0.5)',
          borderColor: 'rgba(255,99,132,1)',
        },
      ],
    })

    setLoading(false);
  }, [])

  return loading || <div id='AZAttendanceLine'>
    <Line options={options} data={data} />˝
  </div>;;
}

export { AttendanceLineChart, HQAttendanceLineChart, AZAttendanceLineChart };