import "./Testmonial.css";
import { Carousel, Col, Row, Container } from 'react-bootstrap';
import Testone from "../../images/testone.jpg"; 
const Testimonial = () => {
  return (
    <>
    <div id="testimonials" className="mt-5">
      <Container>
        <div className="title text-center">
          <h5>Testimonials</h5>
          <h2>What They Say?</h2>
        </div>
        <div className='item mt-5'>
        <Row>
          <Carousel>
            <Carousel.Item interval={1000}>
              <Row>
                <Col lg={6}>
                  <i className="fa fa-quote-left" id ="i"></i>
                  <br />
                  <p>
                    “Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, 
                    vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. 
                    Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”
                  </p>
                  <h4>David Eigenberg</h4>
                  <span>CEO of Mexant</span>
                </Col>
                <Col lg={6}>
                 <img src={Testone} alt='img' className="img" style={{ marginRight: '150px' }}/>
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row>
                <Col lg={6}>
                  <i className="fa fa-quote-left"></i>
                  <br />
                  <p>
                    “Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, 
                    vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. 
                    Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”
                  </p>
                  <h4>David Eigenberg</h4>
                  <span>CEO of Mexant</span>
                </Col>
                <Col lg={6}>
                  <img src={Testone} alt='img' className="img" style={{ marginRight: '150px' }}/>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
        </div>
      </Container>
      </div>
    </>
  );
}

export default Testimonial;
