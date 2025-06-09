import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { loginUser, logout, updateUser, checkAuth } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { LoginCredentials, UserUpdateDto } from '../../types/auth';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, token, loading, error } = useAppSelector(state => state.auth);

  const login = async (credentials: LoginCredentials) => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      navigate('/');
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      toast.error('Error al iniciar sesión');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    toast.success('Sesión cerrada correctamente');
  };

  const handleUpdateProfile = async (data: UserUpdateDto) => {
    try {
      await dispatch(updateUser(data)).unwrap();
      toast.success('Perfil actualizado correctamente');
      return true;
    } catch (error) {
      toast.error('Error al actualizar el perfil');
      return false;
    }
  };

  const checkAuthStatus = async () => {
    try {
      await dispatch(checkAuth()).unwrap();
      return true;
    } catch {
      return false;
    }
  };

  return {
    user,
    token,
    loading,
    error,
    login,
    logout: handleLogout,
    updateProfile: handleUpdateProfile,
    checkAuth: checkAuthStatus,
    isAuthenticated: !!token,
    isAdmin: user?.role === 'admin',
  };
};