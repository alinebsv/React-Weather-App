import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App container">
      <div className="container">
        <div className="weather-app">
          <Search defaultCity="New York" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
