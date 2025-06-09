# Gestión Proveedores Frontend

Sistema de gestión de proveedores moderno y escalable desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ Autenticación JWT completa
- 🔒 Sistema de roles (Admin/User)
- 👤 Gestión de perfiles
- 🎨 UI moderna con Tailwind CSS
- 📱 100% Responsive
- 🔄 Estado global con Redux
- 🌐 Integración REST API
- 📝 Validación de formularios
- 🔔 Sistema de notificaciones
- 🔄 Refresh token automático
- 🎯 TypeScript strict mode
- ⚡ Vite para desarrollo rápido

## 📁 Estructura del Proyecto

```
src/
├── api/              # Configuración y endpoints de API
├── assets/           # Recursos estáticos
├── components/       # Componentes React
│   ├── common/       # Componentes reutilizables
│   └── layout/       # Componentes estructurales
├── config/           # Configuraciones globales
├── features/         # Features Redux/Slices
├── hooks/            # Hooks personalizados
├── pages/           
│   ├── admin/        # Páginas administrativas
│   ├── auth/         # Autenticación
│   ├── dashboard/    # Dashboard principal
│   └── profile/      # Gestión de perfil
├── router/           # Configuración de rutas
├── services/         # Servicios y lógica de negocio
├── store/           # Configuración Redux
├── types/           # TypeScript types/interfaces
└── utils/           # Utilidades y helpers
```

## 🛠️ Requisitos Previos

- Node.js >= 18
- npm >= 9
- Backend API corriendo en localhost:8000

## ⚙️ Variables de Entorno

Crea un archivo `.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

## 🚀 Instalación

1. **Clonar e instalar**
```bash
git clone https://github.com/tu-usuario/gestion-proveedores-frontend.git
cd gestion-proveedores-frontend
npm install
```

2. **Desarrollo**
```bash
npm run dev
```

3. **Producción**
```bash
npm run build
npm run preview
```

## 📚 Scripts Disponibles

- `dev`: Modo desarrollo
- `build`: Compilar para producción
- `preview`: Vista previa de producción
- `lint`: Verificar código

## 🔑 Autenticación

### Flujo de JWT
1. Login → Obtiene access token
2. Almacenamiento en localStorage
3. Interceptor añade token a requests
4. Refresh automático de token
5. Logout limpia tokens

### Rutas Protegidas
```typescript
<PrivateRoute roles={["admin"]}>
  <AdminPanel />
</PrivateRoute>
```

## 🎨 Estilos y Tema

Utilizamos Tailwind CSS con tema personalizado:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... más colores
        900: '#0c4a6e',
      },
    },
  },
}
```

## 📡 API Endpoints

```typescript
const API = {
  LOGIN: '/token/',
  REFRESH: '/token/refresh/',
  USER_ME: '/users/me/',
  USERS: '/users/',
  RESET_PASSWORD: '/users/reset-password/',
  // ... más endpoints
};
```

## 🔧 Utilidades

### Validadores
```typescript
validators.email(value)
validators.password(value)
validators.required(value)
```

### Formatters
```typescript
formatters.date(value)
formatters.currency(value)
formatters.capitalize(value)
```

## 📝 Documentación

- [API Endpoints](docs/API.md)
- [Variables de Entorno](docs/ENV.md)

## 🧪 Testing

```bash
# Ejecutar pruebas
npm run test

# Ver cobertura
npm run test:coverage

# UI de pruebas
npm run test:ui
```

### Estructura de Pruebas

```
src/
├── __tests__/
│   ├── components/    # Pruebas de componentes
│   ├── hooks/        # Pruebas de hooks
│   ├── pages/        # Pruebas de páginas
│   └── utils/        # Utilidades para pruebas
└── mocks/
    ├── handlers.ts   # Manejadores de MSW
    └── server.ts     # Configuración del servidor mock
```

## 📦 Dependencias Principales

```json
{
  "react": "^18.3.1",
  "@reduxjs/toolkit": "^2.2.1",
  "tailwindcss": "^3.4.1",
  "axios": "^1.7.7",
  "react-router-dom": "^6.22.3"
}
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

MIT License - ver [LICENSE.md](LICENSE.md)

## 🔍 TODO

- [ ] Implementar tests
- [ ] Añadir documentación de API
- [ ] Mejorar manejo de errores
- [ ] Implementar CI/CD
- [ ] Añadir páginas de ejemplo
