interface ICreateServiceDTO {
  id?: string;
  user_id: string;
  brand: string;
  endpoint: string;
  user: string;
  password: string;
  status: string;
  last_run: Date;
  created_at: Date;
}

export { ICreateServiceDTO };
