export interface Fund {
  id: string;
  name: string;
  data: {
    ratings: {
      analystRating: number;
      SRRI: number;
    };
    portfolio: {
      asset: {
        label: string;
        value: number;
      }[];
    };
    profile: {
      objective: string;
    };
    quote: {
      name: string;
      marketCode: string;
      lastPrice: number;
      lastPriceDate: Date;
      ongoingCharge: number;
      sectorName: string;
      currency: string;
    };
    documents:  {
      id: number,
      type: string,
      url: string,
    }[],
  };
}