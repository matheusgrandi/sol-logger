import { IDashboardsRepository } from './../IDashboardsRepository';
import axios from 'axios';

interface IConfigDTO{
  ssl_enabled?: boolean,
  login_url?: string,
  username?: string,
  password?: string,
  token: string 
}

class DashboardsRepository implements IDashboardsRepository {
  constructor(token: string) {
    const config = {
      headers: { 'Content-Type': 'application/json', Authorization: token },
    };
  }
  setData(equipment: string): Promise<object> {
    throw new Error('Method not implemented.');
  }
  setAlert(equipment: string): Promise<object> {
    throw new Error('Method not implemented.');
  }
  async getData(id: string): Promise<object> {
    const data = await axios.get(
      'https://demo.huxx.io/api/dashboards/uid/h9SVG1p7k
    );
  }
}

export { DashboardsRepository };
