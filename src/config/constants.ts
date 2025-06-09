export const APP_NAME = 'Gestión Proveedores';

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

export const API_ERRORS = {
  INVALID_CREDENTIALS: 'Credenciales inválidas',
  SERVER_ERROR: 'Error del servidor',
  NETWORK_ERROR: 'Error de conexión',
  UNAUTHORIZED: 'No autorizado',
  FORBIDDEN: 'Acceso denegado',
} as const;

export const TOAST_CONFIG = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
} as const;