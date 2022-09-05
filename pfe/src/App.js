import NavBarCustom from "./componentes/navbar";
import Body from "./componentes/body";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <NavBarCustom></NavBarCustom>
    <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Link to="/about">About</Link>
    </>
    
  );
}
export default App;
