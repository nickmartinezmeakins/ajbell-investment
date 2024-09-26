import { useState, useEffect } from 'react';
import  PieChart  from '../../atoms/PieChart';
import StarRating from '../../atoms/StarRating';
import SsriChart from '../../atoms/SsriChart';
import { Fund } from '../../../types/fundTypes'; 

interface FundSelectorProps {
  strategies: {
    growth: Fund[];
    responsible: Fund[];
  };
}

const FundSelector: React.FC<FundSelectorProps> = ({ strategies }) => {
  const [selectedStrategy, setSelectedStrategy] = useState<'growth' | 'responsible'>('growth');
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);

  useEffect(() => {
    if (strategies[selectedStrategy] && strategies[selectedStrategy].length > 0) {
      const defaultFund = strategies[selectedStrategy][0];
      setSelectedFund(defaultFund);
    } else {
      console.error('No funds available for strategy:', selectedStrategy);
    }
  }, [selectedStrategy, strategies]);

  const handleStrategyChange = (strategy: 'growth' | 'responsible') => {
    setSelectedStrategy(strategy);
  };

  const handleFundChange = (fundId: string) => {
    const fund = strategies[selectedStrategy]?.find((fund) => fund.id === fundId);
    if (fund) {
      setSelectedFund(fund);
    } else {
      console.error('Fund not found:', fundId);
    }
  };

  return (
    <section>
      <div>
        {Object.keys(strategies).map((strategy) => (
          <button
            key={strategy}
            onClick={() => handleStrategyChange(strategy as 'growth' | 'responsible')}
            className="px-3 py-2 border-2 rounded-sm"
          >
            {strategy.charAt(0).toUpperCase() + strategy.slice(1)}
          </button>
        ))}
      </div>

      {selectedStrategy && strategies[selectedStrategy] && strategies[selectedStrategy].length > 1 && (
          strategies[selectedStrategy].map((fund) => (
            <button
              key={fund.id}
              onClick={() => handleFundChange(fund.id)}
              className="px-3 py-2 border-2 rounded-sm"
            >
              {fund.name}
            </button>
          ))
      )}

      <h2>2. Choose your fund</h2>
      {selectedFund && (
        <div>
          <h3>wefwefewfw{selectedFund.name}</h3>
          <p>Profile: {selectedFund.data.profile.objective}</p>
          
          <div>
            <h3>Portfolio Assets:</h3>

            <PieChart data={selectedFund.data.portfolio.asset} />
            <StarRating analystRating={selectedFund.data.ratings.analystRating} analystRatingLabel={selectedFund.data.ratings.analystRatingLabel}  />
            <SsriChart SRRI={selectedFund.data.ratings.SRRI}  />
          </div>
        </div>
      )}
    </section>
  );
};

export default FundSelector;