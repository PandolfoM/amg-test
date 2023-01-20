import "./App.scss";
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
      </div>
    </>
  );
}

export default App;
