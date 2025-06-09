import { useState } from "react";

export default function AdminPanel() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, role }),
      });
      alert("Usuario creado con éxito");
      setUsername("");
      setEmail("");
      setRole("user");
    } catch {
      alert("Error al crear usuario");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Crear nuevo usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-full border border-blue-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-blue-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full border border-blue-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded font-bold transition text-lg shadow">
          Crear
        </button>
      </form>
    </div>
  );
}
