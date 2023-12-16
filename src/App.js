import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages.js/home";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import PatientForm from "./Pages.js/PatientForm";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientForm" element={<PatientForm />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
