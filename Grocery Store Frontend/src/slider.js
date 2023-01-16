import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Slide=()=>{
    return (
<Container>
  <Row>
    <Col>
      <Carousel>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1fv2cu4wmu6en.cloudfront.net/uploads/blog-media/2021-05-06/199/featured-199.jpg"
            alt="Second slide" height="400"
          />
  
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Online-Grocery-Delivery-Sharjah.jpg"
            alt="Third slide"  height="400"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.economictimes.com/thumb/msid-75668135,width-1200,height-900,resizemode-4,imgsize-172382/grocery-getty-f.jpg"
            alt="Fouth slide"  height="400"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.poptin.com/blog/wp-content/uploads/2020/10/How-to-Set-Up-Your-Own-Online-Grocery-Store-1.png"
            alt="Fifth slide"  height="400"
          />
        </Carousel.Item>

      </Carousel>
      </Col>
  </Row>
      </Container>
    );
}

export default Slide;