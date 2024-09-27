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

  const setSelectedFundID = (fundId: string) => {
    localStorage.setItem("selectedFund", fundId);
    alert(`${ fundId } fund selected`)
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
              className={`px-3 py-2 relative before:content-[''] before:absolute before:h-0.5 before:left-0 before:bottom-[-10px] before:w-full capitalize ${selectedStrategy === strategy ? ' before:bg-blue-600' : 'before:bg-transparent'}`}
            >
              {strategy}
            </button>
          ))}
        </div>
      </div>
      <hr className='w-full my-4' />
      <div className='flex flex-col md:flex-row items-center md:min-h-20'>
        <h2 className="text-xl">2. Choose your fund</h2>
        <div className='mt-4 md:mt-0 md:ml-auto'>
          {selectedStrategy && strategies[selectedStrategy] && strategies[selectedStrategy].length > 1 && (
            <div className="flex justify-center bg-white shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 relative">
              {strategies[selectedStrategy].map((fund) => (
                <button
                  key={fund.id}
                  onClick={() => handleFundChange(fund.id)}
                  className={`px-3 py-2 relative before:content-[''] before:absolute before:h-0.5 before:left-0 before:bottom-[-10px] before:w-full before:transparent ${selectedFund?.id === fund.id ? 'before:bg-red ' : ''}`}
                
                >
                  {fund.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedFund && (
        <>
          <hr className='w-full mt-4 mb-6' />  
            <div className="grid md:grid-cols-12 gap-5 p-4 m-2 shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 bg-white">
              <div className="col-span-12 lg:col-span-9 p-4">
                <div className="flex flex-row items-center">
                  <h3 className="text-xl">AJ Bell {selectedFund.name} fund</h3>
                  <button onClick={() => setSelectedFundID(selectedFund.id)} className="btn-primary mt-1 ml-auto md:hidden">Select Fund</button>
                </div>

                <hr className='w-full my-4' />

                <h3 className="text-xl font-light text-red">Is this fund right for me?</h3>
                <p className="mt-4">he Cautious fund is right for you if you want to give your money a chance to grow faster than it would in a savings account – but you don&apos;t want too much risk.</p>

                <p>To achieve consistent growth over the long term, the Cautious fund invests mostly in typically steadier assets such as bonds. It invests only sparingly in aggressive assets such as shares.</p>

                <p>The aim is to deliver the maximum return for investors who want to keep market ups and downs to a minimum.</p>


                <h3 className="text-xl font-light text-red">More about this fund</h3>
                <p className="mt-4">You can learn more about this fund, including its performance and the investments it holds, by exploring the tabs below.</p>

                <p>Make sure you also read the KIID (key investor information document) and factsheet. Both contain essential information on the fund to help you decide whether to invest.</p>
              </div>

              <aside className="col-span-12 lg:col-span-3 p-2">
                <button onClick={() => setSelectedFundID(selectedFund.id)} className="btn-primary mt-1 w-full">Select Fund</button>

                <hr className='w-full mt-4 mb-6' />

                {selectedFund.data.quote?.ongoingCharge && (

                <p>
                  <strong>Ongoing Charge:</strong><br />
                 {selectedFund.data.quote?.ongoingCharge}
                </p>
              )}

                <hr  className='w-full mt-4 mb-6'/>

                <StarRating analystRating={selectedFund.data.ratings.analystRating}  />

                <hr  className='w-full mt-4 mb-6'/>

                <div className="flex flex-col gap-2">

                {selectedFund.data.documents?.map((doc) => (
                  <a href={doc.url} target="_blank" key={doc.id} className="btn-secondary">{doc.type}</a>
                ))}
                </div>
              

              </aside>
            </div>

            <div className="grid md:grid-cols-12 gap-5 p-4 mt-10 shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 bg-white">
              <div className="col-span-12 lg:col-span-6 p-4">
              <h4 className="text-lg font-semibold">Fund asset allocation</h4>
              <p>This is xshow the fund is divided between its different investment types</p>
                <PieChart data={selectedFund.data.portfolio.asset} />
              </div>

              {selectedFund.data.ratings.SRRI && (
                <div className="col-span-12 lg:col-span-6 p-4">
                  <h4 className="text-lg font-semibold">Fund rating</h4>
                  <SsriChart SRRI={selectedFund.data.ratings.SRRI}  />
                </div> 
              )}          
            </div>
        </>
      )}
    </section>
  );
};

export default FundSelector;