import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);

  const logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div>
      <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
        <span>Dashboard</span>
        <button onClick={logout} style={{ marginLeft: "20px" }}>
          Logout
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
