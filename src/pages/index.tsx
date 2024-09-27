import Layout from '../app/layout';
import FundComponent from '../components/organisms/FundComponent';
import { Fund } from '../types/fundTypes'; 


interface StrategyData {
  growth: Fund[];
  responsible: Fund[];
}

interface HomePageProps {
  strategies: StrategyData;

}

const HomePage: React.FC<HomePageProps> = ({strategies}) => {
  return (
    <Layout>
      <FundComponent strategies={strategies} />
    </Layout>
  );
};

// Fetch fund data from APIs on each request using getServerSideProps
export const getServerSideProps = async () => {
  const urls = {
    growth: [
      { id: 'BYW8RV9', name: 'Cautious', url: `${process.env.API_URL}BYW8RV9.json` },
      { id: 'BYW8RX1', name: 'Balanced', url: `${process.env.API_URL}BYW8RX1.json` },
      { id: 'BYW8VG2', name: 'Adventurous', url: `${process.env.API_URL}BYW8VG2.json` },
    ],
    responsible: [
      { id: 'BN0S2V9', name: 'Responsible Growth', url: `${process.env.API_URL}BN0S2V9.json` },
    ],
  };

  // Fetch data for all funds
  const fetchFundData = async (fund: { id: string; name: string; url: string }) => {
    const response = await fetch(fund.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for fund: ${fund.id}`);
    }
    const data = await response.json();
    return { ...fund, ...data };
  };

  try {
    const growthData = await Promise.all(urls.growth.map(fetchFundData));
    const responsibleData = await Promise.all(urls.responsible.map(fetchFundData));

    // Return the fetched data as props
    return {
      props: {
        strategies: {
          growth: growthData,
          responsible: responsibleData,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching fund data:', error);
    return {
      props: {
        strategies: {
          growth: [],
          responsible: [],
        },
      },
    };
  }
};

export default HomePage;