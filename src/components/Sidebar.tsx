import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import type { RootState } from "../store/store";
import { HiHome, HiUser, HiCog, HiLogout } from "react-icons/hi";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Inicio", icon: <HiHome /> },
    { to: "/profile", label: "Mi perfil", icon: <HiUser /> },
    ...(user?.role === "admin"
      ? [{ to: "/admin", label: "Administración", icon: <HiCog /> }]
      : []),
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col p-6 shadow-2xl">
      <div className="mb-8 flex flex-col items-center">
        <span className="text-3xl font-extrabold tracking-wide text-blue-200 mb-2">
          GestiónApp
        </span>
        {user && (
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=1e40af&color=fff`}
            alt="avatar"
            className="w-16 h-16 rounded-full border-2 border-blue-300 mb-2"
          />
        )}
        <span className="text-sm text-blue-100">{user?.username}</span>
        <span className="text-xs text-blue-300">{user?.role}</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium
                  ${
                    location.pathname === item.to
                      ? "bg-blue-600"
                      : "hover:bg-blue-800"
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 border-t border-blue-800 pt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow"
        >
          <HiLogout className="text-xl" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
