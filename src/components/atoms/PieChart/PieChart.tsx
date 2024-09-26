import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    label: string;
    value: number;
  }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {

  const chartData = {
    labels: data.map((asset) => asset.label),
    datasets: [
      {
        data: data.map((asset) => asset.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={chartData} />;
}

export default PieChart;