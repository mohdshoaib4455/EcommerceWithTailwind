import Container from "./Components/Container";
import Header from "./Components/Header";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
function App() {
  

  //dummyjson.com/products/category/mens-shoes
  // https://dummyjson.com/products/category/tops
  // https://dummyjson.com/products/category/womens-bags
  // https://dummyjson.com/products/category/`womens-dresses`
  // https://dummyjson.com/products/category/womens-shoes
  return (
    <>
      <Container>
        <Topbar />
        <Header />

        <Outlet />

        <Footer />
      </Container>
    </>
  );
}

export default App;
