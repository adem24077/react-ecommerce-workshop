import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import ProductDelete from "./pages/ProductDelete/ProductDelete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/delete" element={<ProductDelete />} />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </>
  );
}
export default App;
