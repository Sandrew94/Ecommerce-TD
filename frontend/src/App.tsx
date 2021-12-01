import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Admin from "./pages/Admin";
import { GlobalStyle } from "./styles-global/Global.style";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { useDispatch } from "react-redux";
import { isLogged } from "./store/actions/loginAction";
import React from "react";

function App() {
  //Check if the user is already logged in
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(isLogged());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Layout>
                <Wishlist />
              </Layout>
            }
          />
          <Route
            path="/pages"
            element={
              <Layout>
                <Pages />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/create-content"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />

          {/* NO MATCH ROUTE */}
          <Route path="*" element={<div>404 ERROR - NO ROUTE FOUND</div>} />

          {/* NO REPLACE ROUTE IF THE USER INPUT IS 'contactus' */}

          <Route
            path="contactus"
            element={<Navigate replace to="/contact" />}
          />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
