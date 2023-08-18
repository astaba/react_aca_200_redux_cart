import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store-slices/uiSlice";

function App() {
  const isCartDisplayed = useSelector((state) => state.uiState.isCartDisplayed);
  const cart = useSelector((state) => state.cartState);
  const notification = useSelector((state) => state.uiState.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const launchPut = async () => {
      dispatch(
        uiActions.notify({
          status: "pending",
          title: "Is pending...",
          message: "The PUT request was launched",
        })
      );
      try {
        const response = await fetch(
          "https://max-react-20-redux-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        dispatch(
          uiActions.notify({
            status: "success",
            title: "Success!",
            message: "Cart successfully updated!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.notify({
            status: "error",
            title: "Failed!",
            message: error.message,
          })
        );
      }
    };

    launchPut();
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
