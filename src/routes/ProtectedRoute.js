import { useEffect, useState } from "react";
import api from "../api/axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    api.get("/verify")
      .then(() => {
        setAuthorized(true);
        setLoading(false);
      })
      .catch(() => {
        setAuthorized(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Checking authentication...</div>;

  if (!authorized) {
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
};

export default ProtectedRoute;
