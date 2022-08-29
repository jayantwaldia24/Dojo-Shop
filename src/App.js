import Collection from "./components/Collection";
import Cover from "./components/Cover";
import Drop from "./components/Drop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Collection />
      <Drop />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
