import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";
import { UserAuth } from "./context/AuthContext";
function App() {
  const { user } = UserAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route
          path="/account"
          element={user ? <Account /> : <Navigate to={"/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
