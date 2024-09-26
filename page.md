import Investment from '../components/organisms/Investment'
import Layout from '../app/layout'
import type { ReactElement } from 'react'


type InvestmentPageProps = {
  fundData: string; // You can replace 'any' with the actual type of fundData
  strategy: string;
  fund: string;
  query: string;
  context: ContextProps;
};

type ContextProps = {
  query: string;

};

const Page = ({ fundData, strategy, fund }: InvestmentPageProps) => {
  return <Investment fundData={fundData} strategy={strategy} fund={fund} />
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )

export async function getServerSideProps(context) {
  const { strategy, fund } = context.query;

  const urls = {
    Cautious: 'https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json',
    Balanced: 'https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json',
    Adventurous: 'https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json',
    Responsible: 'https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json',
  };

  const selectedFund = fund || 'Cautious';
  const res = await fetch(urls[selectedFund]);
  const fundData = await res.json();

  return {
    props: {
      fundData,
      strategy: strategy || 'Growth Funds', // Default strategy if not defined
      fund: selectedFund,
    },
  };
}
}