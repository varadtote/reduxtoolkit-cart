// boostrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import { memo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

import { getProducts } from "../store/productsAPISlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch action to fetch Products
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Card
      key={product.id}
      style={{ width: "18rem" }}
      className="h-100 d-flex justify-content-center
"
    >
      <Card.Img
        variant="top"
        src={product.image}
        // className=""
        style={{ width: "100px", height: "130px" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>INR {product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "white" }}>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
  ));

  return (
    <div>
      <h1>Products Dashboard</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="text-center" style={{ marginBottom: "10px" }}>
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
