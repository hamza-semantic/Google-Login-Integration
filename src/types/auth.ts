export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  id: number;
  firstName: string;
  email: string;
}