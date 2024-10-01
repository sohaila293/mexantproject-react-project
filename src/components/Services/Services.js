import { React } from 'react';
import "./Services.css";
import { Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Button } from 'react-bootstrap';
function Services(){
    return(
    <>
    <div id="services" className='mt-5'>
        <Container>
            <div className='title'>
                <h5>Services</h5>
                <h2>Discover More Services</h2>
            </div>
            <Row>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-archive"></i>
                <h3>CSS Templates</h3>
                <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-cloud"></i>
                <h3>HTML5 Web Pages</h3>
                <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-charging-station"></i>
                <h3>Responsive Designs</h3>
                <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-suitcase"></i>
                <h3>Mobile and Tablet ready!</h3>
                <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                </div>
                </Col>  
            </Row>
            <Row>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-archway"></i>
                <h3>Fast Customer Support</h3>
                <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className='item'>
                <i class="fas fa-puzzle-piece"></i>
                <h3>Fully Customizable</h3>
                <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                </div>
                 </Col>
            </Row>
        </Container>
        <div className='Solutions mt-5 pt-5'>
            <Container>
                <Row>
                    <Col lg={6}>
                    <h2>Business <span>Solutions</span> and<br/><span>Crypto</span> Investments</h2>
                    </Col>
                    <Col lg={6}>
                    <div className="mb-2">
                 <Button variant="primary" size="lg">
              Descover More
            </Button>{' '}
         <Button variant="primary" size="lg">
          Contact Us
        </Button>{' '}
      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    </>
    );
}
export default Services;