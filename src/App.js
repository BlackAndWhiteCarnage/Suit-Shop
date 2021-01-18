import GlobalStyles from "./components/GlobalStyles";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
