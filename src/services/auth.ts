import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';
import type { LoginPayload, LoginResponse, SignupPayload, SignupResponse } from '../types/auth';

export const authService = {
  login: (body: LoginPayload) => {
    return HttpClient.post<LoginResponse>(API_ENDPOINTS.LOGIN, body);
  },
  signup: (body: SignupPayload) => {
    return HttpClient.post<SignupResponse>(API_ENDPOINTS.SIGNUP, {
      firstName: body.name,
      email: body.email,
      password: body.password,
    });
  },
};