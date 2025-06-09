export const validators = {
  required: (value: any) => (value ? undefined : 'Este campo es requerido'),
  email: (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ? undefined
      : 'Email inválido',
  minLength: (min: number) => (value: string) =>
    value.length >= min ? undefined : `Mínimo ${min} caracteres`,
  maxLength: (max: number) => (value: string) =>
    value.length <= max ? undefined : `Máximo ${max} caracteres`,
  password: (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)
      ? undefined
      : 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número',
  matchPassword: (password: string) => (value: string) =>
    value === password ? undefined : 'Las contraseñas no coinciden',
};