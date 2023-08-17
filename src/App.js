import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartDisplayed = useSelector((state) => state.uiState.isCartDisplayed);
  const cart = useSelector((state) => state.cartState);

  useEffect(() => {
    fetch("https://max-react-20-redux-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {isCartDisplayed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
