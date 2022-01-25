import EbikeSection from "./components/EbikeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlackModal from "./components/BlacKModal";

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
      <BlackModal />
    </div>
  );
};

export default App;
