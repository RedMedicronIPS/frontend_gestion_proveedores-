import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import type { LoginFormProps } from './types';

export function LoginForm({ onSubmit, onChange, loading }: LoginFormProps) {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
        <Input
          id="username"
          name="username"
          type="text"
          required
          label="Usuario"
          placeholder="Tu nombre de usuario"
          onChange={onChange}
          autoComplete="username"
        />

        <Input
          id="password"
          name="password"
          type="password"
          required
          label="Contraseña"
          placeholder="Tu contraseña"
          onChange={onChange}
          autoComplete="current-password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Recordarme
          </label>
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={loading}
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </Button>
    </form>
  );
}