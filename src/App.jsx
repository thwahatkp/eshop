import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <div className="container h-8 mx-auto p-5">
      <Header />
      <HeroSection/>
      <ProductSection/>
    </div>
  );
}

export default App;
