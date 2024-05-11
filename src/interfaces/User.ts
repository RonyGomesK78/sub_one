export interface RegisterUser {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  role: string,
};

export interface LoginUser {
  email: string,
  password: string,
};

export interface User {
  token: string,
  firstname: string,
  lastname: string,
  sub: string,
};