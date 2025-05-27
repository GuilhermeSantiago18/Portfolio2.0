import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import { useThemeStore } from '../../stores/useThemeStore';
import { THEME_DARK } from '../../constants/theme';
import { useTranslation } from 'react-i18next';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const labels = ['React / React Native', 'Node.js', 'UI/UX', 'Databases', 'DevOps'];
const baseData = [2000, 1500, 600, 500, 500];
const backgroundColors = ['#FF6384', '#FF9F40', '#FFCD56', '#36A2EB', '#4BC0C0'];

export default function ExperiencePieChart() {
    const {t} = useTranslation()
  const { primaryColor, theme } = useThemeStore();
  const { ref, inView } = useInView({ threshold: 0.2});

  const gridColor = theme === THEME_DARK ? "#ffffff" : primaryColor

  const data = {
    labels,
    datasets: [
      {
        data: inView ? baseData : baseData.map(() => 0),
        backgroundColor: backgroundColors,
        hoverOffset: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
     easing: 'easeOutQuart' as const
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: gridColor,
        },
      },
      title: {
        display: true,
        color: gridColor,
        text: t('home.chart_pie.title'),
        font: { size: 18 },
      },
    },
  };

  return (
    <div ref={ref} className="w-full max-w-sm md:w-[20vw]">
      <Pie data={data} options={options} />
    </div>
  );
}
