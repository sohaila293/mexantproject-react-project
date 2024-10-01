import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
const About = () => {
  return (
    <>
      <div id="about" className="mt-5">
        <Container>
          <div className="title text-center">
            <h5>About Us</h5>
            <h2>Know Us Better</h2>
          </div>
          <Row className="mt-5">
            <Col lg={6}>
            <Row>
            <Col lg={2} className='me-5'>
              <div className="mb-2 px-5">
                <Button variant="primary" size="lg">
                WebDesign
                </Button>
              </div>
              </Col>
              <Col lg={2} className='me-5'>
              <div className="mb-2 px-5">
                <Button variant="primary" size="lg">
                Graphics
                </Button>
              </div>
              </Col>
              <Col lg={2} className='me-5'>
              <div className="mb-2 px-5">
                <Button variant="primary" size="lg">
                WebCoding
                </Button>
              </div>
              </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <table className="mt-5">
                <thead>
                  <tr>
                    <td>Project Title</td>
                    <td>Budget</td>
                    <td>Deadline</td>
                    <td>Client</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-5">Website Redesign</td>
                    <td className="pt-5">$1,500 to $2,200</td>
                    <td className="pt-5">2022 Dec 12</td>
                    <td className="pt-5">Web Biz</td>
                  </tr>
                  <tr>
                    <td>Website Renovation</td>
                    <td>$2,500 to $3,600</td>
                    <td>2022 Dec 10</td>
                    <td>Online Ads</td>
                  </tr>
                  <tr>
                    <td>Marketing Plan</td>
                    <td>$2,500 to $4,200</td>
                    <td>2022 Dec 8</td>
                    <td>Web Biz</td>
                  </tr>
                  <tr>
                    <td>All-new Website</td>
                    <td>$3,000 to $6,600</td>
                    <td>2022 Dec 2</td>
                    <td>Web Presence</td>
                  </tr>
                </tbody>
              </table>
            </Col>

            <Col lg={6} className="more">
              <h3>Please tell us about your idea and how you want it to be</h3>
              <p className='mt-4'>
                You are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any other template websites.
              </p>
              <p>
                Thank you for downloading and using our templates. Please tell your friends about our website.
              </p>
              <div className="mb-2">
                <Button variant="primary" size="lg">
                  Discover More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
