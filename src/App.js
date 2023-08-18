import { useEffect, useReducer, Fragment } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

const putReducer = (state, action) => {
  switch (action.type) {
    case "PUT_INIT":
      return {
        status: "pending",
        title: "Is pending...",
        message: "The PUT request was launched",
      };
    case "PUT_SUCCEED":
      return {
        status: "success",
        title: "Success!",
        message: "Cart successfully updated!",
      };
    case "PUT_FAILED":
      return {
        status: "error",
        title: "Failed!",
        message: action.payload,
      };
    default:
      throw new Error(`Unexpected action type: ${action.type}`);
  }
};

function App() {
  const isCartDisplayed = useSelector((state) => state.uiState.isCartDisplayed);
  const cart = useSelector((state) => state.cartState);
  const [putRequestState, putDispatch] = useReducer(putReducer, {
    status: "",
    title: "",
    message: "",
  });

  useEffect(() => {
    const launchPut = async () => {
      putDispatch({ type: "PUT_INIT" });
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
        putDispatch({ type: "PUT_SUCCEED" });
      } catch (error) {
        putDispatch({ type: "PUT_FAILED", payload: error.message });
      }
    };

    launchPut();
  }, [cart]);

  return (
    <Fragment>
      <Notification
        status={putRequestState.status}
        title={putRequestState.title}
        message={putRequestState.message}
      />
      <Layout>
        {isCartDisplayed && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
