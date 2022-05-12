import { IDashboardsRepository } from './../IDashboardsRepository';
import axios from 'axios';

class DashboardsRepository implements IDashboardsRepository {
  async getData({ uid }: IGetDataDTO): Promise<object> {
    const url = `https://demo.huxx.io/api/dashboards/uid/${uid}/`;
    const data = await axios.get(url).catch((error) => {
      console.log(error);
    });
    return data.meta.dashboards;
  }

  setInfo({ dashboard }) {
    dashboard;
  }
}

export { DashboardsRepository };
