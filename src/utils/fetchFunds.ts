export interface Fund {
  id: string;
  name: string;
  url: string;
}

// Fetch data passed in from fetchFunds and parse in to json
export const fetchFundData = async (fund: Fund) => {
  const response = await fetch(fund.url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for fund: ${fund.id}`);
  }
  const data = await response.json();
  return { ...fund, ...data };
};

export const fetchFunds = async () => {
  // Define the URLs for the funds of both categories.
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

  try {
    // Use Promise.all to fetch data for all funds
    const growthData = await Promise.all(urls.growth.map(fetchFundData));
    const responsibleData = await Promise.all(urls.responsible.map(fetchFundData));

    // Return an object containing the fetched data for both categories.
    return {
      growth: growthData,
      responsible: responsibleData,
    };
  } catch (error) {
    console.error('Error fetching fund data:', error);
    return {
      growth: [],
      responsible: [],
    };
  }
};