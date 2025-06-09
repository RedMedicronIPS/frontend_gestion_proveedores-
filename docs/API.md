# 📡 Documentación de API Endpoints

## Base URL
```
http://localhost:8000/api
```

## 🔑 Autenticación

### Login
```http
POST /token/
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}

Response 200:
{
  "access": "string",
  "refresh": "string"
}
```

### Refresh Token
```http
POST /token/refresh/
Content-Type: application/json

{
  "refresh": "string"
}

Response 200:
{
  "access": "string"
}
```

## 👤 Usuarios

### Obtener Perfil
```http
GET /users/me/
Authorization: Bearer {token}

Response 200:
{
  "id": number,
  "username": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "role": "admin" | "user"
}
```

### Actualizar Perfil
```http
PATCH /users/me/
Authorization: Bearer {token}
Content-Type: application/json

{
  "firstName": "string",
  "lastName": "string",
  "email": "string"
}
```

### Cambiar Contraseña
```http
POST /users/change-password/
Authorization: Bearer {token}
Content-Type: application/json

{
  "currentPassword": "string",
  "newPassword": "string"
}
```

### Reset Password
```http
POST /users/reset-password/
Content-Type: application/json

{
  "email": "string"
}
```

### Confirmar Reset Password
```http
POST /users/reset-password/confirm/
Content-Type: application/json

{
  "token": "string",
  "newPassword": "string"
}
```

## 👥 Administración de Usuarios

### Listar Usuarios (Admin)
```http
GET /users/
Authorization: Bearer {token}

Response 200:
[
  {
    "id": number,
    "username": "string",
    "email": "string",
    "role": "string"
  }
]
```

### Crear Usuario (Admin)
```http
POST /users/
Authorization: Bearer {token}
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "user" | "admin"
}
```