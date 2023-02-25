import '../../CSS/style.css';
import '../../CSS/style.min.css';
import TopBar from "../Dashboard/TopBar";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "./BackToTop";
import { Outlet } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from '../Auth/SignUp/SignUp';
import Home from "../Home/Home";
// import ShopDetail from "../Shop Details/ShopDetail";
import Checkout from "../Page/Checkout/Checkout";
import Cart from "../Page/Cart/Cart";
import Contact from "../Contact/Contact";
import Shop from "../Shop/Shop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { getListProduct } from '../../Api/product.api';
import ProductDetail from '../Shop Details/ProductDetail';
import OrderHistory from '../Page/Order/OrderHistory';

const App = () => {
  return (
    <BrowserRouter>

      <TopBar />
      <Navbar />
      <Outlet />
      <BackToTop />
      <Login />
      <SignUp />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="shop-detail" element={<ShopDetail />} /> */}
        <Route path="product-detail/:id" element={<ProductDetail/>}/>
        <Route path="pages/checkout" element={<Checkout />} />
        <Route path="pages/shopping-card" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order" element={<OrderHistory />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
