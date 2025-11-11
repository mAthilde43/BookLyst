import "./index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegisterPage from "./pages/auth/register/RegisterPage";
import LoginPage from "./pages/auth/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
