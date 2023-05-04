import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    brand: "",
    category: "",
    description: "",
    countInStock: 0,
    image: null,
  });
  function handleProductChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
  function handleImage(e) {
    setProduct({ ...product, image: e.target.files[0] });
  }
  function sendProduct() {
    let form_data = new FormData();
    form_data.append("name", product.name);
    form_data.append("brand", product.brand);
    form_data.append("category", product.category);
    form_data.append("price", product.price);
    form_data.append("description", product.description);
    form_data.append("countInStock", product.countInStock);
    form_data.append("image", product.image);
    axios.post("/api/products/", form_data);
  }
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Nom Produit</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Prix Produit</Form.Label>
        <Form.Control
          type="text"
          name="price"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="brand">
        <Form.Label>Marque Produit</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Catégory Produit</Form.Label>
        <Form.Control
          type="text"
          name="category"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description Produit</Form.Label>
        <Form.Control
          type="text"
          name="description"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="countInStock">
        <Form.Label>Quantité Produit</Form.Label>
        <Form.Control
          type="number"
          name="countInStock"
          onChange={handleProductChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.File
          name="image"
          label="Choisir Image"
          onChange={handleImage}
        ></Form.File>
      </Form.Group>
      <Button type="submit" variant="primary">
        Sauvegarder
      </Button>
    </Form>
  );
}

export default AddProduct;
