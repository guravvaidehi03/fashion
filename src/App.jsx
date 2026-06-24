import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Men } from "./pages/Men.jsx";
import { Women } from "./pages/Women.jsx";
import { Contact } from "./pages/Contact.jsx";



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;