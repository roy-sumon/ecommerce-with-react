import AdBanner from "./components/AdBanner";
import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <TopHeader />
        <Navbar />
        <HeroSection />
        <Cart />
        <AdBanner />
      </div>
    </>
  );
}

export default App;
