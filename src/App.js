import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import productApi from "./api/productApi";
import "./App.css";
import Header from "./components/header";

function App() {
  useEffect(() => {
    //fetch all products
    const fetchProducts = async () => {
      const productList = await productApi.getAll({ _limit: 10 });
      console.log("products", productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <div id="content">
        <Outlet />
      </div>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
