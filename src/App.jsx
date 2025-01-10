import AdBanner from "./components/AdBanner";
import Cart from "./components/Cart";
import CustomerServices from "./components/CustomerServices";
import Footer from "./components/Footer";
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
        <CustomerServices />
        <Footer />
      </div>
    </>
  );
}

export default App;
