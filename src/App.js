import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AppPath } from './constants';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={AppPath.Home} element={<Home/>}/>
        <Route path={AppPath.Login} element={<Login/>}/>
        <Route path={AppPath.Register} element={<Register/>}/>
        <Route path={AppPath.Shop} element={<Shop/>}/>
      </Routes>
      <ScrollToTop/>
    </Layout>
  );
}

export default App;
