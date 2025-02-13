import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Button, InputNumber } from 'antd';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <hr />
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            actions={[
              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(value) =>
                  dispatch(updateQuantity({ id: item.id, quantity: value }))
                }
              />,
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50, objectFit: 'cover' }}
                />
              }
              title={item.name}
              description={`Quantity: ${item.quantity} | Price: ₹${
                item.price
              } | Total: ₹${item.price * item.quantity}`}
            />
          </List.Item>
        )}
      />
      {cart.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Link to="/checkout">
            <Button type="primary" style={{ marginRight: '10px' }}>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
