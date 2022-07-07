interface ICreateNodeDTO {
  id?: string;
  user_id: string;
  service_id: string;
  inverter_id: string;
  name: string;
  description: string;
}

export { ICreateNodeDTO };
