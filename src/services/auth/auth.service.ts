import { API } from '../../api/api';
import type { LoginCredentials, AuthResponse } from '../../types/auth';
import type { User, UserUpdateDto } from '../../types/user';

class AuthService {
  private token: string | null = localStorage.getItem('token');

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    if (this.token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${this.token}`,
      };
    }

    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(API.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    this.token = data.access;
    localStorage.setItem('token', data.access);
    return data;
  }

  async confirmPasswordReset(token: string, newPassword: string): Promise<void> {
    await fetch(API.CONFIRM_RESET_PASSWORD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword }),
    });
  }

  // ... otros métodos
}

export const authService = new AuthService();