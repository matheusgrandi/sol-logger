interface IGetDataDTO {
  uid: string;
}

interface IGetPrintDTO {
  url: string;
}
interface ISetInfoDTO {
  equipment: string;
}

interface IDashboardsRepository {
  getData({ uid }: IGetDataDTO): object;
  getPrint({ url }: IGetPrintDTO): undefined;
  setInfo({ equipment }: ISetInfoDTO): undefined;
  setAlert({ equipment }: ISetInfoDTO): undefined;
}

export { IDashboardsRepository, IGetDataDTO, IGetPrintDTO, ISetInfoDTO };
