import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
 
 import ayamchicken from "/public/images/AyamChiken.jpg"
 import bakso from "/public/images/Bakso.jpg"
 import  estehsuwegerwir from "/public/images/estehsuwegerwir.jpg"
 import Seblak from "/public/images/Seblak.jpg"
 import nasgorgoreng from "/public/images/nasgorgoreng.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export default function Home() {
  return (<div className="">

    <Carousel data-bs-theme="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: "500px", objectFit: "cover" }}
      src={ayamchicken}
      alt="Ayam Geprek"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: "500px", objectFit: "cover" }}
      src={nasgorgoreng}
      alt="Nasi Goreng"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: "500px", objectFit: "cover" }}
      src={Seblak}
      alt="Seblak"
    />
  </Carousel.Item>
</Carousel>
    <Container className='mt-4'>
      <Row>
        <Col sm={4}>
          <img
  src={ayamchicken}
  style={{
    height: "300px",
    objectFit: "cover",
    borderRadius: "20px"
  }}
  alt=""
/>
        </Col>
        <Col sm={8} className="mt-5"><h1>Lorem ipsum dolor sit amba</h1>adipisicing elit. Sequi, porro. Fugit deleniti nobis fugiat laborum unde voluptates quaerat temporibus, sint eius aperiam eum neque labore dolore, necessitatibus veniam itaque dolorem!</Col>
      </Row>
    </Container>
    <h1 className="mt-5 ml-150 font-semibold">
      Daftar Menu kami
    </h1>
  
      <Stack direction="horizontal" gap={3}>
  <div className="p-2">
    <img src={ayamchicken} style={{ width: "200px", borderRadius: "20px" }} />
  </div>

  <div className="p-2">
    <img src={nasgorgoreng} style={{ width: "200px", borderRadius: "20px" }} />
  </div>

  <div className="p-2">
    <img src={Seblak} style={{ width: "200px", borderRadius: "20px" }} />
  </div>

  <div className="p-2">
    <img src={estehsuwegerwir} style={{ width: "200px", borderRadius: "20px" }} />
  </div>

  <div className="p-2">
    <img
      src={bakso}
      style={{
        width: "220px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "20px"
      }}
    />
  </div>
</Stack>
     
 <Container style={{ backgroundColor: "#808080" }}>
      <Row>
        <Col className="ml-100">© 2024 Restoran Mini Course. All rights reserved.</Col>
      </Row>
    </Container>
  </div>

  )
}
