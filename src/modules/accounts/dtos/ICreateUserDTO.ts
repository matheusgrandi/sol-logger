interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  company?: string;
}

export { ICreateUserDTO };
