import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiTopaz from '../../services/apiTopaz';
import { TOrderModalProps } from './orderModal.types';
import { useCallback, useState } from 'react';
import { TSide, TType, TOrderBody } from '../../services/types/services.types';
import { useStore } from '../../store';
import { Types } from '../../store/types';

// Add to existing useInstruments hook
export const useOrderModal = ({
  instrument,
  onClose,
}: Partial<TOrderModalProps>) => {
  const queryClient = useQueryClient();
  const { dispatch, state } = useStore();
  const [orderType, setOrderType] = useState<TType>('MARKET');
  const [side, setSide] = useState<TSide>('BUY');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const createOrderMutation = useMutation({
    mutationFn: (orderData: TOrderBody) => apiTopaz.createOrder(orderData),
    onSuccess: () => {
      // Invalidate and refetch instruments after order creation
      queryClient.invalidateQueries({ queryKey: ['instruments'] });
    },
  });

  const submitOrder = useCallback(async () => {
    if (!instrument) return;
    const orderData = {
      instrument_id: instrument.id,
      side,
      type: orderType,
      quantity: parseInt(quantity),
      ...(orderType === 'LIMIT' ? { price: parseFloat(price) } : {}),
    };

    try {
      const response = await createOrderMutation.mutateAsync(orderData);
      dispatch({
        type: Types.setOrders,
        payload: { orders: [...(state.orders || []), response] },
      });
      alert(`Order ${response.id} status: ${response.status}`);
      onClose && onClose();
    } catch (e) {
      alert('Error creating order');
    } finally {
      setQuantity('');
      setPrice('');
      setOrderType('MARKET');
      setSide('BUY');
    }
  }, [
    instrument,
    side,
    orderType,
    quantity,
    price,
    createOrderMutation,
    dispatch,
    state.orders,
    onClose,
  ]);

  const handleOnPressOrderTypeMarket = () => {
    setOrderType('MARKET');
  };

  const handleOnPressOrderTypeLimit = () => {
    setOrderType('LIMIT');
  };

  const handleOnPressSideBuy = () => {
    setSide('BUY');
  };

  const handleOnPressSideSell = () => {
    setSide('SELL');
  };

  return {
    orderType,
    side,
    quantity,
    price,
    createOrderMutation,
    setQuantity,
    setPrice,
    submitOrder,
    handleOnPressOrderTypeLimit,
    handleOnPressOrderTypeMarket,
    handleOnPressSideBuy,
    handleOnPressSideSell,
  };
};
