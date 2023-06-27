import { AxiosTestingPageData } from 'types/AxiosTestingPage/AxiosTestingPage';
import { mainApiService } from 'http/api';

export default class MainService {
  static async getMainData(): Promise<AxiosTestingPageData> {
    try {
      const response = await mainApiService.get('/main');

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('Failed to fetch data!');
    }
  }
};
