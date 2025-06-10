import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./Dashboard.css"

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // clean up listener
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {/* Protected content here */}
    </div>
  );
};

export default Dashboard;
