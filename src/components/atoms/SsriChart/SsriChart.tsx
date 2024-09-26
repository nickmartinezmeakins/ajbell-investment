interface SsriChartProps {
  SRRI: number;
}

const SsriChart: React.FC<SsriChartProps> = ({ SRRI }) => {

  
  return ( <p>SRRI: {SRRI}</p>);
}

export default SsriChart;