import  PieChart  from '../../atoms/PieChart';
import StarRating from '../../atoms/StarRating';
import SsriChart from '../../atoms/SsriChart';
import { motion, AnimatePresence } from "framer-motion";
import { Fund } from '../../../types/fundTypes'; 

interface FundContentProps {
  selectedFund: Fund;
}

export const FundContent = ({ selectedFund }: FundContentProps) => {
  //Set local storage to selected fund.
  const setSelectedFundID = (fundId: string) => {
    localStorage.setItem("selectedFund", fundId);
    alert(`${ fundId } fund selected`)
  };
  return(
    <AnimatePresence mode="wait">
      <motion.div 
        key={selectedFund.id}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div className="grid md:grid-cols-12 gap-5 p-4 m-2 shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 bg-white">
            <div className="col-span-12  p-4">
                <div className="flex flex-row items-center">
                  <h3 className="text-xl">AJ Bell <span className="text-red">{selectedFund.name}</span> fund</h3>
                  <button onClick={() => setSelectedFundID(selectedFund.id)} className="btn btn-primary mt-1 ml-auto">Select Fund</button>
                </div>
                <hr className='w-full my-4' />
              </div>
              
            <div className="col-span-12 lg:col-span-9 p-4">
              <h3 className="text-xl font-light text-red">Is this fund right for me?</h3>
              <p className="mt-4">he Cautious fund is right for you if you want to give your money a chance to grow faster than it would in a savings account – but you don&apos;t want too much risk.</p>

              <p>To achieve consistent growth over the long term, the Cautious fund invests mostly in typically steadier assets such as bonds. It invests only sparingly in aggressive assets such as shares.</p>

              <p>The aim is to deliver the maximum return for investors who want to keep market ups and downs to a minimum.</p>


              <h3 className="text-xl font-light text-red">More about this fund</h3>
              <p className="mt-4">You can learn more about this fund, including its performance and the investments it holds, by exploring the tabs below.</p>

              <p>Make sure you also read the KIID (key investor information document) and factsheet. Both contain essential information on the fund to help you decide whether to invest.</p>
            </div>

            <aside className="col-span-12 lg:col-span-3 p-2">
              {selectedFund.data.quote?.ongoingCharge && (
                <>
                  <p>
                    <strong>Ongoing Charge:</strong><br />
                  {selectedFund.data.quote?.ongoingCharge}
                  </p>
                  <hr className='w-full mt-4 mb-6'/>
                 </>
              )}

              <StarRating analystRating={selectedFund.data.ratings.analystRating}  />

              {selectedFund.data.documents && (
                <>
                  <hr className='w-full mt-4 mb-6'/>      
                  <div className="flex flex-col gap-2">
                  {selectedFund.data.documents?.map((doc) => (
                      <a href={doc.url} target="_blank" key={doc.id} aria-label={`Open ${doc.type}`} className="btn btn-secondary">
                        {doc.type}
                      </a>
                    ))}  
                  </div>      
                </>
              )}
            </aside>
          </div>

          <div className="grid md:grid-cols-12 gap-5 p-4 mt-10 shadow-[0 2px 4px rgba(0, 0, 0, 0.1)] rounded-lg px-5 py-2.5 bg-white">
            {selectedFund.data.portfolio.asset && (
              <div className="col-span-12 lg:col-span-6 p-4">
                <h4 className="text-lg font-semibold">Fund asset allocation</h4>
                <p>This is show the fund is divided between its different investment types</p>
                <PieChart data={selectedFund.data.portfolio.asset} />
              </div>
            )}

            {selectedFund.data.ratings.SRRI && (
              <div className="col-span-12 lg:col-span-6 p-4">
                <h4 className="text-lg font-semibold">Fund rating</h4>
                <SsriChart SRRI={selectedFund.data.ratings.SRRI}  />
              </div> 
            )}          
          </div>
      </motion.div>
    </AnimatePresence>
  )
};

export default FundContent;
