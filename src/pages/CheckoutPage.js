import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, List } from 'antd';
import { clearCart } from '../redux/cartSlice';

const CheckoutPage = () => {
  const [loading, setloading] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleFinish = (values) => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    setloading(true);
    setTimeout(() => {
      dispatch(clearCart());
      navigation('/order-success');
    }, 2000);
  };

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: 'auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card title="Shipping Address" style={{ width: '40%' }}>
        <Form Layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: 'Please enter your phone number' },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input placeholder="Enter your address" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Place Order
          </Button>
        </Form>
      </Card>

      <Card name="Order Summary" style={{ width: '40%' }}>
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
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
        <h3 style={{ textAlign: 'right', marginTop: '10px' }}>
          Total: ₹{totalPrice.toFixed(2)}
        </h3>
      </Card>
    </div>
  );
};

export default CheckoutPage;
