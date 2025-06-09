import { useAppSelector } from "../../store/hooks";
import { HiUsers, HiDocumentText, HiChartBar, HiClock } from "react-icons/hi";

export default function Dashboard() {
  const user = useAppSelector((state) => state.auth.user);

  const stats = [
    { label: "Usuarios activos", value: "12", icon: HiUsers },
    { label: "Proyectos", value: "25", icon: HiDocumentText },
    { label: "Reportes", value: "8", icon: HiChartBar },
    { label: "Tiempo total", value: "156h", icon: HiClock },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          ¡Bienvenido, {user?.username}!
        </h1>
        <p className="mt-2 text-gray-600">
          {user?.role === "admin"
            ? "Accede a todas las funciones administrativas desde tu dashboard."
            : "Aquí podrás ver un resumen de tu actividad."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
