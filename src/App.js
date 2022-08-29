import Collection from "./components/Collection";
import Cover from "./components/Cover";
import Drop from "./components/Drop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Collection />
      <Drop />
    </div>
  );
}

export default App;
