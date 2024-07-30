import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from './components/ProtectedRoute'; // Asegúrate de importar ProtectedRoute
import ResetPass from "./components/ResetPass";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={[3, 1, 2]}> {/* Ajusta los roles según sea necesario */}
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/reset-password/:token" element={<ResetPass />}/>
      </Routes>
    </Router>
  );
};

export default App;