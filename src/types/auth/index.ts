export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginFormState {
  username: string;
  password: string;
}

// filepath: c:\Proyectos\gestion_frontend\frontend\src\types\user\index.ts
export interface UserBase {
  id: number;
  username: string;
  email: string;
}

export interface UserProfile extends UserBase {
  firstName: string;
  lastName: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'user';