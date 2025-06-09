export interface IAuthenticationService {
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
  refreshToken(): Promise<string>;
}

export interface IUserProfileService {
  getProfile(): Promise<User>;
  updateProfile(data: UserUpdateDto): Promise<User>;
  changePassword(currentPassword: string, newPassword: string): Promise<void>;
}

export interface IPasswordResetService {
  requestReset(email: string): Promise<void>;
  confirmReset(token: string, newPassword: string): Promise<void>;
}