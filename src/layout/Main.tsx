import { useAppContext } from "../context/useAppContext";
import { NotificationSystem } from "../ui/NotificationSystem";
import { Header } from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useAppContext();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
    >
      <Header />
      <div className="container mx-auto px-4 py-8">{children}</div>

      <NotificationSystem />
    </div>
  );
};

export default Layout;
