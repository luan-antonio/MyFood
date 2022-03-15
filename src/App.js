import { useState } from "react";

import Header from "./components/Layout/Header";
import MainImage from "./components/Layout/MainImage";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartProvider from "./store/Cart/provider";

function App() {
  const [showCard, setShowChard] = useState(false);

  const showCartHandler = () => {
    setShowChard(true);
  };

  const hideCartHandler = () => {
    setShowChard(false);
  };

  return (
    <CartProvider>
      {showCard && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MainImage />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
