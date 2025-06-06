import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/users/password-reset/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      alert("Te hemos enviado un correo para restablecer tu contraseña");
      setEmail("");
    } catch {
      alert("Error al enviar correo");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
      <form onSubmit={handleSubmit} className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-7">
        <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">Recuperar contraseña</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-blue-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded font-bold transition text-lg shadow">
          Enviar
        </button>
      </form>
    </div>
  );
}
