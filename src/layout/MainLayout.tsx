import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-8 overflow-y-auto bg-white rounded-tl-3xl shadow-lg m-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
