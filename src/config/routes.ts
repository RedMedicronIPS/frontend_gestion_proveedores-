export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password/:token',
  PROFILE: '/profile',
  ADMIN: '/admin',
  UNAUTHORIZED: '/unauthorized',
  NOT_FOUND: '*',
} as const;

export const PROTECTED_ROUTES = [
  ROUTES.HOME,
  ROUTES.PROFILE,
  ROUTES.ADMIN,
];

export const ADMIN_ROUTES = [
  ROUTES.ADMIN,
];

export const PUBLIC_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.RESET_PASSWORD,
];