import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice";

// boostrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {}, [products]);

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(removeProduct(id));
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
        <Button variant="danger" onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </Button>
      </Card.Footer>
    </Card>
  ));

  return (
    <div>
      <div>Total Products {products.length}</div>
      <div className="row">
        <div className="col-md-3">
          <div className="text-center" style={{ marginBottom: "10px" }}>
            {products.length === 0 ? "No Items in Cart" : cards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
