import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import type { LoginFormProps } from './types';

interface LoginTemplateProps extends LoginFormProps {
  loading: boolean;
  error?: string | null;
}

export function LoginTemplate({ onSubmit, onChange, loading, error }: LoginTemplateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            O{' '}
            <Link
              to="/forgot-password"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <LoginForm
          onSubmit={onSubmit}
          onChange={onChange}
          loading={loading}
        />

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            ¿Necesitas ayuda?{' '}
            <a
              href="#"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Contacta soporte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}