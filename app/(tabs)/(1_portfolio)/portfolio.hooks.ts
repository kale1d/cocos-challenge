import { useQuery } from '@tanstack/react-query';
import apiTopaz from '../../../services/apiTopaz';
import { useCallback } from 'react';

export const usePortfolio = () => {
  const getPortfolioQuery = useQuery({
    queryKey: ['portfolio'],
    queryFn: () => apiTopaz.getPortfolio(),
  });

  const calculateMarketValue = useCallback(
    (quantity: number, lastPrice: number) => {
      return quantity * lastPrice;
    },
    [],
  );

  const calculateGains = useCallback(
    (quantity: number, lastPrice: number, avgCost: number) => {
      const marketValue = calculateMarketValue(quantity, lastPrice);
      const costBasis = quantity * avgCost;
      return marketValue - costBasis;
    },
    [calculateMarketValue],
  );

  const calculateReturn = useCallback((gains: number, costBasis: number) => {
    return ((gains / costBasis) * 100).toFixed(2);
  }, []);

  return {
    getPortfolioQuery,
    calculateMarketValue,
    calculateGains,
    calculateReturn,
  };
};
