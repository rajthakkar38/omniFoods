import "./App.css";
import Header from "./components/header-component/header-component";
import Hero from "./components/hero-component/hero-component";
import FeaturedIn from "./components/featured-in/featured-in";
import HowTo from "./components/how-to-component/how-to-component";
import Meals from "./components/meals-component/meals-component";
import Testimonials from "./components/testimonials-component/testimonials-component";
import Price from "./components/price-component/price-component";
import Feature from "./components/feature-component/feature-component";
import Cta from "./components/cta-component/cta-component";
import Footer from "./components/footer-component/footer-component";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowTo />
        <Meals />
        <Testimonials />
        <Price />
        <Feature />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
