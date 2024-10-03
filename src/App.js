import Landing from "./Home/Landing";
import Form from "./Forms/Form";
import Login from "./Login/login";
import Register from "./Register/register";
import Dashboard from "./Dashboard/dashboard";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
