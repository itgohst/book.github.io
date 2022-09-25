import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Layout />}></Route>\
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
