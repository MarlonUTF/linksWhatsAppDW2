import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/linksWhatsAppDW2/" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
