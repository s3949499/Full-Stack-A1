import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


export default function App() {
  return (
<BrowserRouter>
<Routes>
  
  <Route path="/" element={<Nav />}>
    <Route index element={<Home />} />
    <Route path="SignIn" element={<SignIn />} />
    <Route path="SignUp" element={<SignUp />} />
    
  </Route>
</Routes>
</BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);