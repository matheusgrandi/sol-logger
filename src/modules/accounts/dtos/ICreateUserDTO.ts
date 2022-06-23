interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  company?: string;
  phone_number: string;
  avatar?: string;
}

export { ICreateUserDTO };
