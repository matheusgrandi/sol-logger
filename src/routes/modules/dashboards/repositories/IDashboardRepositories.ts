import { Dashboard } from "routes/modules/model/Dashboard";

interface IGetDataDTO {
  uid: string
}

interface IGetPrintDTO {
  url: string
}
interface ISetInfoDTO {
  url: string
}


interface IDashboardRepositories {
  getData({ uid }: IGetDataDTO): object[];
  getPrint({ url }: IGetPrintDTO): undefined;
  setInfo({ equipment }: )
}