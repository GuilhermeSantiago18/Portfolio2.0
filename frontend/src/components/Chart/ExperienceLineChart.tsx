import { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const labels = ['2021', '2022', '2023', '2024', '2025'];

const baseData = [0, 2, 7, 8, 10]; 

export default function ExperienceLineChart() {



    const { t } = useTranslation();
  const { primaryColor, theme } = useThemeStore();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [sizeKey, setSizeKey] = useState(0);
    const gridColor = theme === THEME_DARK ? '#ffffff' : primaryColor;
  
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
        label: t('home.chart_line.description'),
        data: inView ? baseData : baseData.map(() => 0),
        fill: false,
        borderColor:gridColor,
        tension: 0.3,
        pointBackgroundColor: gridColor,
        pointBorderColor: gridColor,
        pointHoverBackgroundColor:gridColor,
        pointHoverBorderColor: gridColor,
      },
    ],
  };

 const options: ChartOptions<'line'> = {
  responsive: true,
  animation: {
    duration: 2000,
    easing: 'easeInOutQuad',
  },
  layout: {
    padding: {
      top: 0, 
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        color: gridColor,
      },
    },
    title: {
      display: true,
      text: t('home.chart_line.title'),
      color:gridColor,
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
           color: gridColor,
        },
        grid: {
          color: gridColor,
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
    <div ref={ref} className="w-full md:w-[18vw] md:mt-[50px]">
      <Line key={sizeKey} data={data} options={options} />
    </div>
  );
}
