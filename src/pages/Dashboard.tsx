import { useAppSelector } from "../store/hooks";
import type { RootState } from "../store/store";

export default function Dashboard() {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
        ¡Bienvenido, {user?.username}!
      </h1>
      <p className="text-blue-700 mb-6 text-lg">
        {user?.role === "admin"
          ? "Tienes acceso como administrador."
          : "Tienes acceso como usuario estándar."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-blue-100 rounded-xl p-8 text-center shadow hover:scale-105 transition">
          <div className="text-5xl mb-2">📊</div>
          <div className="font-semibold text-blue-900">Estadísticas</div>
        </div>
        <div className="bg-blue-100 rounded-xl p-8 text-center shadow hover:scale-105 transition">
          <div className="text-5xl mb-2">📝</div>
          <div className="font-semibold text-blue-900">Tus tareas</div>
        </div>
      </div>
    </div>
  );
}
