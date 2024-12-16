import { TOrders } from '../../services/types/services.types';

export enum Types {
  initialize = 'INITIALIZE',
  setOrders = 'SET_ORDERS',
}

type Initialize = {
  type: Types.initialize;
  payload: IStoreState;
};

type SetOrders = {
  type: Types.setOrders;
  payload: Partial<IStoreState>;
};

export type ActionProps = Initialize | SetOrders;

export type IStoreState = { orders: TOrders[] | undefined };
