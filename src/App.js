import EbikeSection from "./components/EbikeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <HeroSection />
                </div>
              </>
            }
          />
          <Route
            path="/ebikes"
            element={
              <>
                <div className="bike-contain">
                  <EbikeSection />
                </div>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
