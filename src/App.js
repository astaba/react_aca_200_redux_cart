import { useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartDisplayed = useSelector((state) => state.uiState.isCartDisplayed);
  
  return (
    <Layout>
      {isCartDisplayed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
