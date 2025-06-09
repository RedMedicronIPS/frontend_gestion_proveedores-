import { useAuth } from '../../hooks/auth/useAuth';
import { useForm } from '../../hooks/useForm';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { useAppSelector } from '../../store/hooks';

interface LoginForm {
  username: string;
  password: string;
}

const initialValues: LoginForm = {
  username: '',
  password: ''
};

export default function Login() {
  const { login } = useAuth();
  const { values, handleChange } = useForm<LoginForm>(initialValues);
  const { loading, error } = useAppSelector(state => ({
    loading: state.auth.loading,
    error: state.auth.error
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(values);
  };

  return (
    <LoginTemplate 
      onSubmit={handleSubmit}
      onChange={handleChange}
      loading={loading}
      error={error}
    />
  );
}
