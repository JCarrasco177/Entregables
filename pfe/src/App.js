import NavBarCustom from "./componentes/navbar";
import Login from "./componentes/login";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./componentes/Info";
import About from "./componentes/About";
function App() {
  return (
    <>
    <NavBarCustom></NavBarCustom>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
      </Routes>
   
    </>
    
  );
}
export default App;
