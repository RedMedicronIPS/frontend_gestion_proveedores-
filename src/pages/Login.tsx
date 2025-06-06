import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser } from '../features/auth/authSlice';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token, loading, error } = useAppSelector(state => state.auth);

  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
      <form
        className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-7"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-2">Iniciar Sesión</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200 shadow"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
        <div className="text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline text-sm">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </div>
  );
}
