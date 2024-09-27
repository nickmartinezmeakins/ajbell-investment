interface SsriChartProps {
  SRRI: number;
}

const SsriChart: React.FC<SsriChartProps> = ({ SRRI }) => {
  const maxSRRI = 10;
  
  return ( 
  <div>
      <div className="flex space-x-2">
        {Array.from({ length: maxSRRI }, (_, index) => (
          <div
            key={index}
            className={`w-full max-w-8 h-10 rounded-md transition-colors duration-300 ${
              index == SRRI - 1 ? 'bg-red' : 'bg-gray-300'
            }`}
          />
          
        ))}
      </div>
      <div className="mt-2 text-sm font-medium">
        Risk Level: {SRRI} / {maxSRRI}
      </div>
    <p className="mt-8">The risk rating of a fund depends on the type of assets it invests in. Bonds are more conservative because they offer a more certain (though typically lower) return. Shares are more aggressive because they offer a less certain (though typically higher) return.</p>

    <p>Keep in mind this applies over the longer term: five years or more.</p>
    </div>);
}

export default SsriChart;