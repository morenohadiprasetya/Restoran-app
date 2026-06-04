import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AyamChiken from "../assets/AyamChiken.jpg"
import Nasgorgoreng from "../assets/Nasgorgoreng.jpg"
import Seblak from "../assets/Seblak.jpg"
import estehsuwegerwir from "../assets/estehsuwegerwir.jpg"
import Bakso from "../assets/Bakso.jpg"
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Menu() {
  const HandleBeli = () => {
    Swal.fire({
      title: "Succes",
      icon: "success",
      draggable: true
    });
  };

const [search, setSearch] = useState("");
 
 const menu = [
  { nama:"Ayam Geprek Pak Dicky", harga:"25000", Img:"AyamChicken"},
  { nama:"Seblak Asli cipanas", harga:"10000", Img:"Seblak"},
  { nama:"Es Teh Saxanic", harga:"3000", Img:"estehsuwegerwir"},
  { nama:"Bakso SApi", harga:"12000", Img:"Bakso"}
 ]
const filteredMenu = menu.filter((item) =>
  item.nama.toLowerCase().includes(search.toLocaleLowerCase));

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
            <Col>
              <Card className="h-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src="/src/assets/AyamChiken.jpg"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold fs-5 mb-1">Ayam Geprek Pak Dicky</Card.Title>
                  <Card.Text className="text-muted small flex-grow-1 mb-4">
                    Ayam chiken geprek dengan resp sambal asli pak dicky
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold hover:bg-blue-500" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    onClick={HandleBeli}
                    className="w-100 py-2 fw-semibold text-white border-0"
                    style={{
                      backgroundColor: '#dc3545',
                      borderRadius: '10px'
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px' }}>
                  <Card.Img
                    variant="top"
                    src="/src/assets/Seblak.jpg"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">Seblak Asli cipanas</Card.Title>
                  <Card.Text className="text-muted small">
                    seblak enak cocok untuk para pecinta seblak dengan bumbu rahasia pakcik sugeng dijamin duh enak banget
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                   <button
                    onClick={HandleBeli}
                    className="w-100 py-2 fw-semibold text-white border-0"
                    style={{
                      backgroundColor: '#dc3545',
                      borderRadius: '10px'
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px' }}>
                  <Card.Img
                    variant="top"
                    src="/src/assets/estehsuwegerwir.jpg"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">Es Teh Saxanic</Card.Title>
                  <Card.Text className="text-muted small">
                    cocok untuk menghilangkan rasa pedas,haus dan dll,dijamin suweger banget wir
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    onClick={HandleBeli}
                    className="w-100 py-2 fw-semibold text-white border-0"
                    style={{
                      backgroundColor: '#dc3545',
                      borderRadius: '10px'
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 shadow-sm rounded-4 transition-all duration-50 hover:scale-105 hover:shadow-md overflow-hidden">
                <div style={{ height: '200px' }}>
                  <Card.Img
                    variant="top"
                    src="/src/assets/Bakso.jpg"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">Bakso SApi</Card.Title>
                  <Card.Text className="text-muted small">
                    Vital!! Bakso full daging tanpa tepung, harga terjangkau Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et provident veni
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center border rounded-3 px-2 py-1 bg-light">
                      <button className="btn btn-sm p-0 border-0 text-muted fw-bold" style={{ width: '20px' }}>−</button>
                      <span className="mx-3 fw-semibold small">1</span>
                      <button className="btn btn-sm p-0 border-0 text-success fw-bold" style={{ width: '20px' }}>+</button>
                    </div>
                    <div className="fw-bold text-secondary fs-6">
                      Rp 30.000
                    </div>
                  </div>
                  <button
                    onClick={HandleBeli}
                    className="w-100 py-2 fw-semibold text-white border-0"
                    style={{
                      backgroundColor: '#dc3545',
                      borderRadius: '10px'
                    }}
                  >
                    Beli
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}