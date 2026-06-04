import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AyamChiken from "../assets/AyamChiken.jpg"
import Nasgorgoreng from "../assets/Nasgorgoreng.jpg"
import Seblak from "../assets/Seblak.jpg"
import estehsuwegerwir from "../assets/estehsuwegerwir.jpg"
import Bakso from "../assets/Bakso.jpg"
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
          style={{ height: '500px ', objectFit: 'cover' }}
          src="/src/assets/AyamChiken.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px ', objectFit: 'cover' }}
          src="/src/assets/Nasgorgoreng.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px ', objectFit: 'cover' }}
          src="/src/assets/Seblak.jpg"
          alt=""
        />

      </Carousel.Item>
    </Carousel>
    <Container className='mt-4'>
      <Row>
        <Col sm={4}>
          <img
            src="/src/assets/AyamChiken.jpg"
            style={{ height: '300px', objectFit: 'cover', borderRadius: '20px' }}
            alt="" />
        </Col>
        <Col sm={8} className="mt-5"><h1>Lorem ipsum dolor sit amba</h1>adipisicing elit. Sequi, porro. Fugit deleniti nobis fugiat laborum unde voluptates quaerat temporibus, sint eius aperiam eum neque labore dolore, necessitatibus veniam itaque dolorem!</Col>
      </Row>
    </Container>
    <h1 className="mt-5 ml-150 font-semibold">
      Daftar Menu kami
    </h1>
  
       <Stack direction="horizontal" gap={3}>
  <div className="p-6 ml-50">

    <img src="/src/assets/AyamChiken.jpg" alt="" style={{ width: "200px", borderRadius:'20px' }} />
  </div>
  <div className="p-2">
    <img src="/src/assets/Nasgorgoreng.jpg" alt="" style={{ width: "200px", borderRadius: '20px'}} />
  </div>
  <div className="p-2">
    <img src="/src/assets/Seblak.jpg" alt="" style={{ width: "200px", borderRadius:'20px'}} />
  </div>
  <div className="p-2">
    <img src="/src/assets/estehsuwegerwir.jpg" alt="" style={{ width: "200px", borderRadius:'20px'}} />
  </div>
  <div className="p-2">
    <img src="/src/assets/Bakso.jpg" alt="" style={{ width: "220px", height:'200px',objectFit:'cover', borderRadius:'20px'}} />
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
