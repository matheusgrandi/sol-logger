interface ICreateServiceDTO {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  manufacturer: string;
  endpoint: string;
  username: string;
  password: string;
}

export { ICreateServiceDTO };
