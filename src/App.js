import "./App.css"
import OwlDashboard from "./containers/OwlDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SightingMap from "./components/SightingMap";

function App() {
  return (
    <>
      <Header />
      <OwlDashboard />
      <Footer />
    </>
  );
}

export default App;
