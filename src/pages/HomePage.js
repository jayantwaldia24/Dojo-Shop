import Collection from "../components/Collection";
import Drop from "../components/Drop";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Drop />
      <Newsletter />
      <Footer />
    </>
  );
}

export default HomePage;
