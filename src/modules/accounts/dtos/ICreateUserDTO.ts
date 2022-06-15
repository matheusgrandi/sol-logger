interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  company?: string;
  phone_number: string;
}

export { ICreateUserDTO };
