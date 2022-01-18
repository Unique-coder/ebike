import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
