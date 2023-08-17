import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store-slices/cartSlice";

const ProductItem = ({ item }) => {
  const { id, title, price, description } = item;
  const cart = useSelector((state) => state.cartState);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const newCartSize = cart.cartSize + 1;
    // Be extremely cautious never to mutate referenced value states
    const newCartItems = cart.cartItems.slice();
    const existingItem = newCartItems.find((item) => item.id === id);
    if (!existingItem) {
      newCartItems.push({ id, title, price, quantity: 1, total: price });
    } else {
    // Be extremely cautious never to mutate referenced value states
      const updatedItem = { ...existingItem };
      updatedItem.quantity++; 
      updatedItem.total += price;
      const existingItemIndex = newCartItems.findIndex((item) => item.id === id);
      newCartItems[existingItemIndex] = updatedItem;
    }
    const newCart = {
      newCartItems,
      newCartSize,
    };

    dispatch(cartActions.replaceCart(newCart));

    // fetch("https://max-react-20-redux-default-rtdb.firebaseio.com/cart.json", {
    //   method: "PUT",
    //   body: JSON.stringify(newCart),
    // })
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
