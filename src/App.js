import React from "react";
import Home from "./Home";
import Products from "./Product_list";
import SingleProduct from "./SingleProduct";
import Cart_sidebar from "./Cart_sidebar";
import Product_comparison from "./Product_comparison";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import Contact from "./Contact";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import Navbar from "./Navbar";
import { Footers } from "./Footers";
import { Shop } from "./Shop";
import {About} from "./About"
const App=()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/about" element={<About/> } />
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/Cart_sidebar' element={<Cart_sidebar/>}/>
        <Route path="/Product_compariso" element={<Product_comparison/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footers/>
    </BrowserRouter>
  );
}

export default App;
