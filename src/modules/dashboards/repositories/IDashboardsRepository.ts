interface IDashboardsRepository {
  getData(uid: string): Promise<object>;
  setData(equipment: string): Promise<object>;
  setAlert(equipment: string): Promise<object>;
}

export { IDashboardsRepository };
