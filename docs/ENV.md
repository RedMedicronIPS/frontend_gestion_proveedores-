# Variables de Entorno

Este proyecto utiliza las siguientes variables de entorno. Crea un archivo `.env` en la raíz del proyecto:

## Variables Requeridas

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| VITE_API_URL | URL base de la API | http://localhost:8000/api |

## Variables Opcionales

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| VITE_APP_NAME | Nombre de la aplicación | Gestión Proveedores |
| VITE_ENV | Entorno de ejecución | development |

## Ejemplos por Entorno

### Desarrollo
```env
VITE_API_URL=http://localhost:8000/api
VITE_ENV=development
```

### Producción
```env
VITE_API_URL=https://api.tudominio.com/api
VITE_ENV=production
```

### Testing
```env
VITE_API_URL=http://localhost:8000/api
VITE_ENV=test
```

## Configuración del Proxy

En desarrollo, el proyecto está configurado para hacer proxy de las peticiones API:

```javascript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}
```