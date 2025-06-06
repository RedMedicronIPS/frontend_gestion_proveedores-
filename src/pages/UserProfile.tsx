import { useAppSelector } from "../store/hooks";
import type { RootState } from "../store/store";

export default function UserProfile() {
  const user = useAppSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <div className="p-4">No hay información de usuario.</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-10">
      <div className="flex items-center gap-8 mb-8">
        <img
          src={`https://ui-avatars.com/api/?name=${user.username}&background=1e40af&color=fff`}
          alt="avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-200"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-1">{user.username}</h2>
          <div className="text-blue-600">{user.role}</div>
        </div>
      </div>
      <div className="space-y-2 text-lg">
        <div><span className="font-semibold">Email:</span> {user.email || "No disponible"}</div>
      </div>
    </div>
  );
}