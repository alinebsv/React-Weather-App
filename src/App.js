import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App container">
      <div className="container">
        <div className="weather-app">
          <Search />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
