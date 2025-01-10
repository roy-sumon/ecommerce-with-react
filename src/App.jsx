import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <div>
        <TopHeader />
        <Navbar />
        <HeroSection />
        <Cart />
      </div>
    </>
  );
}

export default App;
