import Collection from "./components/Collection";
import Cover from "./components/Cover";
import Drop from "./components/Drop";
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
    </div>
  );
}

export default App;
