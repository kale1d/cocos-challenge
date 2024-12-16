import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../../store';
import APITopaz from '../../../services/apiTopaz';
import { useCallback } from 'react';

export const useOrders = () => {
  const { state } = useStore();

  const getInstrumentsQuery = useQuery({
    queryKey: ['instruments'],
    queryFn: () => APITopaz.getInstruments(),
  });

  const findInstrumentDetails = useCallback(
    (instrumentId: number) => {
      return getInstrumentsQuery.data?.find(
        instrument => instrument.id === instrumentId,
      );
    },
    [getInstrumentsQuery.data],
  );

  const enrichOrdersWithInstrumentDetails = useCallback(() => {
    if (!getInstrumentsQuery.data || !state.orders) return [];

    const enrichedOrders = state.orders.map(order => {
      const foundInstrument = findInstrumentDetails(order.instrument_id);
      return {
        ...order,
        name: foundInstrument?.name,
        ticker: foundInstrument?.ticker,
      };
    });
    return enrichedOrders;
  }, [getInstrumentsQuery.data, state.orders, findInstrumentDetails]);

  return {
    orders: enrichOrdersWithInstrumentDetails(),
    isLoadingInstruments: getInstrumentsQuery.isLoading,
    isErrorInstruments: getInstrumentsQuery.isError,
  };
};
