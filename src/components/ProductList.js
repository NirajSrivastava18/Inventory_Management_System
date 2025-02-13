import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Card, Button, Row, Col } from 'antd';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 100000,
    image:
      'https://plus.unsplash.com/premium_photo-1681566925246-cc584a44d7fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Phone',
    price: 50000,
    image:
      'https://images.unsplash.com/photo-1571380401583-72ca84994796?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 1000,
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 2000,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Tablet',
    price: 30000,
    image:
      'https://images.unsplash.com/photo-1589739900869-082b93d8f224?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Camera',
    price: 70000,
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Monitor',
    price: 40000,
    image:
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Keyboard',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              title={product.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: 400,
              }}
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  style={{ height: 220, objectFit: 'cover' }}
                />
              }
            >
              <p>Price: ₹{product.price}</p>
              <Button
                type="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
