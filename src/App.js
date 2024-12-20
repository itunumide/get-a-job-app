import "./App.css";
import Header from "../src/static/Header";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/Categories";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Footer from "./static/Footer";
import JobOverview from "./pages/JobOverview";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Companies />
      <Categories />
      <JobOverview/>
      <AboutUs />
      <Footer/>
    </div>
  );
}

export default App;
