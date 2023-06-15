import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
