import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store-slices/uiSlice";

const CartButton = (props) => {
  const cartSize = useSelector((state) => state.cartState.cartSize);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cartSize === 0) dispatch(uiActions.toggleCart({ switcher: false }));
  }, [dispatch, cartSize]);

  const handleCartDisplay = () => {
    dispatch(uiActions.toggleCart());
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
