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
      
      <Footer />
    </div>
  );
};

export default App;
