import { useState, useEffect } from 'react';
import { Fund } from '../../../types/fundTypes'; 
import { motion, AnimatePresence } from "framer-motion";
import FundContent from '../../molecules/FundContent';

interface FundSelectorProps {
  strategies: {
    growth: Fund[];
    responsible: Fund[];
  };
}

const FundSelector: React.FC<FundSelectorProps> = ({ strategies }) => {
  const [selectedStrategy, setSelectedStrategy] = useState<'growth' | 'responsible'>('growth');
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);

  // Set default strategy & change when selected
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

  // Show selected funds if available
  const handleFundChange = (fundId: string) => {
    const fund = strategies[selectedStrategy]?.find((fund) => fund.id === fundId);
    if (fund) {
      setSelectedFund(fund);
    } else {
      alert(`${fundId} Fund not found`);
    }
  };

  return (
    <section>
      <div className='flex flex-col md:flex-row items-center md:min-h-20'>
        <h1 className="text-xl">1. Tell us why you&apos;re investing</h1>
        <div className="mt-4 md:mt-0 flex justify-center bg-white shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 relative md:ml-auto">
          {Object.keys(strategies).map((strategy) => (
            <button
              key={strategy}
              onClick={() => handleStrategyChange(strategy as 'growth' | 'responsible')}
              className={`px-3 py-2 relative capitalize  before:content-[''] before:absolute before:h-0.5 before:left-0 before:bottom-[-10px] before:w-full  ${selectedStrategy === strategy ? 'before:bg-blue-600' : 'before:bg-transparent'}`}
              role="radio"
              aria-checked={selectedStrategy === strategy}
              aria-label={`Select ${strategy} strategy`}
              data-testid={`select-strategy-${strategy}`}
            >
              {strategy}
            </button>
          ))}
        </div>
      </div>
      <hr className='w-full my-4' />
      <div className='flex flex-col md:flex-row items-center md:min-h-20'>
        <h2 className="text-xl">2. Choose your fund</h2>
        <AnimatePresence mode="wait">
          <motion.div className='mt-4 md:mt-0 md:ml-auto'
            key={selectedStrategy}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedStrategy && strategies[selectedStrategy] && strategies[selectedStrategy].length > 1 && (
              <div className="flex justify-center bg-white shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 relative">
                {strategies[selectedStrategy].map((fund) => (
                  <button
                    key={fund.id}
                    onClick={() => handleFundChange(fund.id)}
                    className={`px-3 py-2 relative before:content-[''] before:absolute before:h-0.5 before:left-0 before:bottom-[-10px] before:w-full before:transparent ${selectedFund?.id === fund.id ? 'before:bg-red ' : ''}`}
                    data-testid={`select-fund-${fund.id}`}
                  >
                    {fund.name}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <hr className='w-full mt-4 mb-6' />

      {selectedFund && (
        <FundContent selectedFund={selectedFund} />
      )}
    </section>
  );
};

export default FundSelector;