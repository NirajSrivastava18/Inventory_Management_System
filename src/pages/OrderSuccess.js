import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const OrderSuccess = () => {
  return (
    <Result
      status="success"
      title="Order Placed Successfully!"
      subTitle="Thank you for shopping with us. Your order has been placed successfully."
      extra={[
        <Link to="/" key="home">
          <Button type="primary">Go to Home</Button>
        </Link>,
      ]}
    />
  );
};

export default OrderSuccess;
