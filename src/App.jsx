

import Index from './pages/Index';
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoFound from './pages/NoFound';



function App() {
  return (
    
    <BrowserRouter>
    
    

    <div >

      <Routes>

        <Route path="/" element={<Index/>}    />
        <Route path="/login" element={<Login/>}    />
        <Route path="/forgotpassword" element={<ForgotPassword/>}    />
        <Route path="/register" element={<Register/>}    />
        <Route path="*" element={<NoFound/>} />
               
      </Routes>

    </div>
  </BrowserRouter>
  );
}

export default App;