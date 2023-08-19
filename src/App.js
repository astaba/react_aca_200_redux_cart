import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store-slices/uiSlice";
import { launchPutCart, launchGetCart } from "./async-action/asyncThunk";

let isInitialRender = true;

function App() {
  const isCartDisplayed = useSelector((state) => state.uiState.isCartDisplayed);
  const cart = useSelector((state) => state.cartState);
  const notification = useSelector((state) => state.uiState.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = null;
    if (!notification) return;
    timer = setInterval(() => {
      dispatch(uiActions.notify(null));
    }, 3000);
    return () => clearInterval(timer);
  }, [notification]);

  useEffect(() => {
    dispatch(launchGetCart());
  }, []);

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(launchPutCart(cart));
    }
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartDisplayed && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
