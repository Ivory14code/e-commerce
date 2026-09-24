import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Header />
                <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
              </>
            }
          />

          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Productos por categoría" />
            }
          />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

          <Route
            path="/contacto"
            element={<Contact />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
