export interface Fund {
  id: string;
  name: string;
  data: {
    ratings: {
      analystRating: number;
      SRRI: number;
      analystRatingLabel: string;
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
}