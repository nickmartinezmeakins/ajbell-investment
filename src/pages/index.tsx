import Layout from '../app/layout';
import FundSelector from '../components/organisms/FundSelector';
import { Fund } from '../types/fundTypes';
import { fetchFunds } from '../utils/fetchFunds';

interface StrategyData {
  growth: Fund[];
  responsible: Fund[];
}

interface HomePageProps {
  strategies: StrategyData;
}

const HomePage: React.FC<HomePageProps> = ({ strategies }) => {
  return (
    <Layout>
      <FundSelector strategies={strategies} />
    </Layout>
  );
};

// Use the helper in getServerSideProps to get data
export const getServerSideProps = async (context) => {
    const strategies = await fetchFunds();

    // Set Cache-Control headers for caching
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=120'
    );

  return {
    props: {
      strategies,
    },
  };
};

export default HomePage;