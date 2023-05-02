
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsLetter from "./components/NewsLetter";
import ProductSection from "./components/ProductSection";
import store from "./redux/store";



function App() {
  return (
    <div className="container h-8 mx-auto p-5">
        <Header />
        <HeroSection />
        <ProductSection />
        <NewsLetter />
        <Footer />
    </div>
  );
}

export default App;
