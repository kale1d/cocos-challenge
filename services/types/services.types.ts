export type TInstrument = {
  id: number;
  ticker: string;
  name: string;
  last_price: number;
  close_price: number;
};

export type TPortfolio = {
  instrument_id: number;
  ticker: string;
  quantity: number;
  avg_cost_price: number;
  last_price: number;
};

export type TSide = 'BUY' | 'SELL';

export type TType = 'MARKET' | 'LIMIT';

export type TStatus = 'PENDING' | 'FILLED' | 'CANCELED';

export type TOrders = {
  id: number;
  status: TStatus;
  side: TSide;
  type: TType;
  quantity: number;
  instrument_id: number;
  price?: number;
};

export type TOrderBody = {
  instrument_id: number;
  side: TSide;
  type: TType;
  quantity: number;
  price?: number;
};
