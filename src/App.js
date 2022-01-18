import EbikeSection from "./components/EbikeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
      <div className="bike-contain">
        <EbikeSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
