import GlobalStyles from "./components/GlobalStyles";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Collection from "./views/Collection/Collection";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <AboutUs />
      <Collection />
    </div>
  );
}

export default App;
