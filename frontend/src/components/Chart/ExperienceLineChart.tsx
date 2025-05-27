import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import { useThemeStore } from '../../stores/useThemeStore';
import type { ChartOptions } from 'chart.js';
import { THEME_DARK } from '../../constants/theme';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const labels = ['2021', '2022', '2023', '2024', '2025'];

const baseData = [0, 2, 7, 8, 9]; 

export default function ExperienceLineChart() {
  const { primaryColor, theme } = useThemeStore();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [sizeKey, setSizeKey] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        setSizeKey((prev: number) => prev + 1);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Horas de Experiência por Ano',
        data: inView ? baseData : baseData.map(() => 0),
        fill: false,
        borderColor: primaryColor,
        tension: 0.3,
        pointBackgroundColor: primaryColor,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: primaryColor,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad',
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: primaryColor,
        },
      },
      title: {
        display: true,
        text: 'Evolução de Horas por Ano',
        color: primaryColor,
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: primaryColor,
        },
        grid: {
          color: '#eee',
        },
      },
      y: {
        ticks: {
           color: theme === THEME_DARK ? '#ffffff' : primaryColor,
        },
        grid: {
          color: theme === THEME_DARK ? '#ffffff' : primaryColor,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    datasets: {
      line: {
        showLine: true,
        animation: {
          duration: 2000,
          easing: 'easeInOutQuad',
        },
      },
    },
  };

  return (
    <div ref={ref} className="w-full md:w-[25vw]">
      <Line key={sizeKey} data={data} options={options} />
    </div>
  );
}
