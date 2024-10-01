import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
import headerone from '../../images/headerone.jpeg'; 
import headertwo from '../../images/headertwo.jpeg';
import headerthree from '../../images/headerthree.jpeg';
import Button from 'react-bootstrap/Button';
function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="home">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={headerone} alt="header first image" className='image'/>
        <Carousel.Caption>
         <h1>Best One in Town<br/> & Crypto <span>Services</span>
         </h1>
         <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
         <div className="mb-2">
        <Button variant="primary" size="lg">
          Descover More
        </Button>{' '}
        <Button variant="primary" size="lg">
          Contact Us
        </Button>{' '}
      </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={headertwo} alt="header second image"className='image' />
        <Carousel.Caption>
          <h1>Get<span> ready</span> for your business <br />
& upgrade <span>all aspects</span>
</h1>
<p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.
</p>
<div className="mb-2">
        <Button variant="primary" size="lg">
          Descover More
        </Button>{' '}
        <Button variant="primary" size="lg">
          Contact Us
        </Button>{' '}
      </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={headerthree} alt="header third image" className='image'/>
        <Carousel.Caption>
         <h1><span>Digital</span> Currency for you <br />
& Best <span>Crypto</span> Tips
</h1>
          <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you<br/> anything in return. You have a total freedom to use any template for any purpose.
</p>
<div className="mb-2">
        <Button variant="primary" size="lg">
          Descover More
        </Button>{' '}
        <Button variant="primary" size="lg">
          Contact Us
        </Button>{' '}
      </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Header;
