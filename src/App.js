import './App.css';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AppPath } from './constants';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag';
import Order from './pages/Order/Order';
import MyAccount from './pages/MyAccount/MyAccount';
import Introduce from './pages/Introduce/Introduce';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={AppPath.Home} element={<Home/>}/>
        <Route path={AppPath.Login} element={<Login/>}/>
        <Route path={AppPath.Register} element={<Register/>}/>
        <Route path={AppPath.Shop} element={<Shop/>}/>
        <Route path={`${AppPath.ProductDetail}/:productCode`} element={<ProductDetails/>}/>
        <Route path={AppPath.ShoppingBag} element={<ShoppingBag/>}/>
        <Route path={AppPath.Order} element={<Order/>}/>
        <Route path={AppPath.MyAccount} element={<MyAccount/>}/>
        <Route path={AppPath.Introduce} element={<Introduce/>}/>
      </Routes>
      <ScrollToTop/>
    </Layout>
  );
}

export default App;
