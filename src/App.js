import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import OrderSuccess from './pages/OrderSuccess';
import CheckoutPage from './pages/CheckoutPage';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
