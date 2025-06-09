import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { logout } from "../features/auth/authSlice";
import { HiHome, HiUser, HiCog, HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Inicio", icon: <HiHome className="w-5 h-5" /> },
    { to: "/profile", label: "Mi perfil", icon: <HiUser className="w-5 h-5" /> },
    ...(user?.role === "admin"
      ? [{ to: "/admin", label: "Administración", icon: <HiCog className="w-5 h-5" /> }]
      : []),
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">GestiónApp</h1>
      </div>
      
      <div className="px-4 py-6 border-y border-gray-200">
        <div className="flex items-center gap-4">
          <img
            src={`https://ui-avatars.com/api/?name=${user?.username}&background=0369a1&color=ffffff`}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{user?.username}</p>
            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${location.pathname === item.to 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/login');
          }}
          className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <HiLogout className="w-5 h-5" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
