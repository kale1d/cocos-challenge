import { useQuery } from '@tanstack/react-query';
import APITopaz from '../../../services/apiTopaz';
import { useCallback, useState } from 'react';
import { TInstrument } from '../../../services/types/services.types';

export const useInstruments = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInstrument, setSelectedInstrument] =
    useState<TInstrument | null>(null);

  const useInstrumentsQuery = () =>
    useQuery({
      queryKey: ['instruments'],
      queryFn: () => APITopaz.getInstruments(),
    });

  const calculateReturn: (lastPrice: number, closePrice: number) => number =
    useCallback((lastPrice: number, closePrice: number) => {
      return ((lastPrice - closePrice) / closePrice) * 100;
    }, []);

  const isPositiveReturn: (returnPercentage: number) => boolean = useCallback(
    (returnPercentage: number) => {
      if (returnPercentage > 0) {
        return true;
      }
      return false;
    },
    [],
  );

  const handleOnCloseModal = () => {
    setModalVisible(false);
  };

  return {
    calculateReturn,
    useInstrumentsQuery,
    setModalVisible,
    modalVisible,
    selectedInstrument,
    setSelectedInstrument,
    isPositiveReturn,
    handleOnCloseModal,
  };
};
