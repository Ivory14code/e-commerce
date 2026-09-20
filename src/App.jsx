import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <main className="main-content">
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      </main>

      <Footer />
    </>
  );
}

export default App;