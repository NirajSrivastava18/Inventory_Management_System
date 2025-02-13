import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart">Cart ({cart.length})</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
