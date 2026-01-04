import api from "../api/axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await api.post("/logout");
      window.location.href = "http://localhost:3000/login";
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
