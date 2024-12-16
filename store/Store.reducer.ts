import { ActionProps, IStoreState, Types } from './types';

export const initialState: IStoreState = { orders: [] };

const setOrders = (state: IStoreState, payload: Partial<IStoreState>) => {
  return { ...state, orders: payload.orders };
};

export const Reducer = (state: IStoreState, { type, payload }: ActionProps) => {
  switch (type) {
    case Types.initialize: {
      return payload;
    }
    case Types.setOrders: {
      return setOrders(state, payload);
    }
    default: {
      return state;
    }
  }
};
