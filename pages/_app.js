import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const router=useRouter();
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
    }
  }, []);
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subT=0;
    let keys=Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
     subT+=myCart[keys[i]].price*myCart[keys[i]].qty; 
    }
    setSubTotal(subT)
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + 1;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const buyNow = (itemCode, qty, price, name, size, variant) => { 
    let newCart={itemCode:{ qty: 1, price, name, size, variant }}
    setCart(newCart);
    saveCart(newCart);
   router.push('/checkout')
    }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - 1;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
      cart={cart}
      buyNow={buyNow}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
