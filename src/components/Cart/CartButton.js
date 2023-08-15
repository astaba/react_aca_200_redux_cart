import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store-slices/cartSlice";

const CartButton = (props) => {
  const cartSize = useSelector((state) => state.cartState.cartSize);

  const dispatch = useDispatch();
  const handleCartDisplay = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button
      className={classes.button}
      onClick={handleCartDisplay}
      disabled={cartSize === 0}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartSize}</span>
    </button>
  );
};

export default CartButton;
