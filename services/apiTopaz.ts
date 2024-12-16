import { Method } from 'axios';
import { BaseApi } from './BaseApi';
// import { RatesDTO } from '../types/models.types';
import { METHOD } from './config/methods';
import { TInstrument, TOrderBody, TOrders } from './types/services.types';

const { GET, POST } = METHOD;

class APITopaz extends BaseApi {
  /**
   * GET /portfolio
   * @returns {Promise<any>}
   */
  public getPortfolio(): Promise<any> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: '/portfolio',
    });
  }
  /**
   * GET /instruments
   * @returns {Promise<TInstrument>}
   */
  public getInstruments(): Promise<TInstrument[]> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: '/instruments',
    });
  }

  /**
   * GET /search?query={queryParam}
   * @returns {Promise<any>}
   */
  public searchByTicker(queryParam: string): Promise<any> {
    return this.request<any>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: `/search?query=${queryParam.toUpperCase()}`,
    });
  }

  /**
   * POST /orders
   * @returns {Promise<TOrders>}
   */
  public createOrder(data: TOrderBody): Promise<TOrders> {
    return this.request<any>({
      method: POST as Method,
      headers: this.configAxiosInstance,
      url: `/orders`,
      data: { ...data },
    });
  }
}

export default new APITopaz();
