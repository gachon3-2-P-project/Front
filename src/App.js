import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/Login/SignIn/SignIn";
import SignUp from "./pages/Login/SignUp/SignUp";
import EmailAuth from "./pages/Login/EmailAuth/EmailAuth";


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/emailauth" element={<EmailAuth />} />
         
      </Routes>
    </div>
  );
}

export default App;
