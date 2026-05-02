import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  function renderPage(pageName) {
    if (pageName === "register") {
      return <Register />;
    } else if (pageName === "reset password") {
      return <ResetPassword />;
    } else {
      return <Login />;
    }
  }

  return (
    <div className="app-layout">
      <Header onNavigate={(value) => setCurrentPage(value)} />
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}

export default App;
