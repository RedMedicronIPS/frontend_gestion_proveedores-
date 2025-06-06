export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-100 to-red-300">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-700">No autorizado</h1>
        <p className="text-red-500 text-lg">No tienes permisos para acceder a esta página.</p>
      </div>
    </div>
  );
}