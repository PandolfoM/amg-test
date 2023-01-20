import "./App.scss";
import CurrentlyLive from "./components/CurrentlyLive";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <Header />
        <Favorites />
        <CurrentlyLive />
      </div>
    </>
  );
}

export default App;
