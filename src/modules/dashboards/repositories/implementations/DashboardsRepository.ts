import { IDashboardsRepository } from './../IDashboardsRepository';
import config from './../../../../../config';
import axios from 'axios';

interface IConfigDTO {
  ssl_enabled?: boolean;
  url: string;
  username?: string;
  password?: string;
  token: string;
}

const header = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: config.token,
  },
};

class DashboardsRepository implements IDashboardsRepository {
  constructor() {}
  setData(equipment: string): Promise<object> {
    throw new Error('Method not implemented.');
  }
  setAlert(equipment: string): Promise<object> {
    throw new Error('Method not implemented.');
  }
  async getData(id: string): Promise<object> {
    const data = await axios.get(
      `${(<any>this).config.ssl_enabled ? 'https' : 'http'}//${
        (<any>this).config.url
      }/api/dashboards/uid/${id}`,
      header
    );
    return data;
  }
}

export { DashboardsRepository };
