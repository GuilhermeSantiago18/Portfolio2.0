import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const baseData = [1500, 1000, 600, 400, 300, 200];
const labels = [
  'React / React Native',
  'Node.js / Backend',
  'UI/UX Design',
  'Banco de Dados',
  'DevOps / Docker / CI',
  'Gerenciamento de Projeto',
];

export default function ExperienceLineChart() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Horas de Experiência',
        data: inView ? baseData : baseData.map(() => 0),
        fill: true,
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#6366F1',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: '+4000 Horas de Experiência por Área',
        font: { size: 20 },
        color: '#4F46E5',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 250,
        },
      },
    },
  };

  return (
    <div ref={ref}>
      <Line data={data} options={options} />
    </div>
  );
}
