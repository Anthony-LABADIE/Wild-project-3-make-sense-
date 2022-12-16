import Homebody from "../components/Home/Homebody";
import Buttontestme from "../components/Home/Buttontestme";
import NavBar from "../components/Home/NavBar";
import "./Home.css";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <h2> PRENONS DES DECISIONS </h2>
        <h2> COLLECTIVES ENSEMBLE </h2>
        <Buttontestme />
      </header>
      <Homebody />
      <Footer />
    </div>
  );
}
