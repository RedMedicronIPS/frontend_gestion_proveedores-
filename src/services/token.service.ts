export class TokenService implements ITokenService {
  private readonly storageKey = 'token';

  getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.storageKey);
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;
    // Implementar validación de JWT
    return true;
  }
}