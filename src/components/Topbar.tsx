import { useAppSelector, useAppDispatch } from "../store/hooks";
import type { RootState } from "../store/store";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between bg-white shadow-md px-10 py-5 rounded-tl-3xl">
      <div className="font-extrabold text-2xl text-blue-900 tracking-wide">
        Panel de Gestión
      </div>
      <div className="flex items-center gap-6">
        {user && (
          <>
            <div className="flex items-center gap-3">
              <img
                src={`https://ui-avatars.com/api/?name=${user.username}&background=1e40af&color=fff`}
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-blue-200"
              />
              <div className="text-right">
                <div className="font-semibold text-blue-900">{user.username}</div>
                <div className="text-xs text-blue-600">{user.role}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded transition font-semibold"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
}