import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Patients from "./pages/Patients";
import About from "./pages/About";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/patients" element={<Patients />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
