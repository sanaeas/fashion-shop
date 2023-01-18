import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Cart from "./Components/Cart";
import AllProducts from "./Components/AllProducts";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51M8JyEDI382dDOcJ62L4dFaYsFFfN84RC8o5NlCM5blCxqfqafLz9cXo9pkZFMOQt4xD3iFXousDg6jX5CjKva0j00SDkZOfkr');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("The user is:", user);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch({
        type: "SET_PRODUCTS",
        products: data,
      }));

  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/payment' element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
