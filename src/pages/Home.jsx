import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import ProductCards from "../components/ProductCards.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </>
  );
}

