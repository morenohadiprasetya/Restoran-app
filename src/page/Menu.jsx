import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
 import ayamchicken from "/public/images/AyamChiken.jpg"
 import bakso from "/public/images/Bakso.jpg"
 import  estehsuwegerwir from "/public/images/estehsuwegerwir.jpg"
 import Seblak from "/public/images/Seblak.jpg"
 import nasgorgoreng from "/public/images/nasgorgoreng.jpg"
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

export default function Menu() {
  const HandleBeli = () => {
    Swal.fire({
      title: "Succes",
      icon: "success",
      draggable: true
    });
  };

const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
 
useEffect(() => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => console.error(err));
}, []);

 
const filteredMenu = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="container">
      <div className="input-group inputGroup mt-4 w-100">
        <input
  type="text"
  className="form-control"
  placeholder="🔍 Cari nama makanan..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      </div>
      <div>
        <Container id="Menu" className="mt-20 mb-5">
         <Row xs={1} md={4} lg={4} className="g-4">
  {filteredMenu.map((item) => (
    <Col key={item.id}>
      <Card className="h-100 shadow-sm rounded-4">
        <div style={{ height: "200px" }}>
          <Card.Img
            variant="top"
            src={item.image_url}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </div>

        <Card.Body>
          <Card.Title>{item.name}</Card.Title>

          <Card.Text>
            {item.description}
          </Card.Text>

          <div className="fw-bold mb-3">
            Rp {Number(item.price).toLocaleString("id-ID")}
          </div>

          <button
            onClick={HandleBeli}
            className="w-100 py-2 fw-semibold text-white border-0"
            style={{
              backgroundColor: "#dc3545",
              borderRadius: "10px"
            }}
          >
            Beli
          </button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </Container>

      </div>
    </div>
  )
}