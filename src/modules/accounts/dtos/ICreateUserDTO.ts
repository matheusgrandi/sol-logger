interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  company?: string;
  huxx_token?: string;
}

export { ICreateUserDTO };
