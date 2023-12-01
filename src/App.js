import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
