import React, { useEffect } from "react";
import Nav from "../components/Nav.jsx";
import Transaction from "../components/Transaction.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
const User = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/SignIn");
    }
  }, [token, navigate]);

  // Si le token est null, on ne rend rien
  if (token === null) {
    return null;
  }

  // Si le token est présent, on rend les composants

  return (
    <div>
      <Nav />
      <Transaction />
      <Footer />
    </div>
  );
};

export default User;
