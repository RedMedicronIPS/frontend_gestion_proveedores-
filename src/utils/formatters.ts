export const formatters = {
  date: (date: string) => new Date(date).toLocaleDateString(),
  currency: (amount: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(amount),
  capitalize: (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
  phone: (phone: string) =>
    phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
};