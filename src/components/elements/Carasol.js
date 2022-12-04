import Carousel from 'react-bootstrap/Carousel';

function Carasol() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100?grayscale"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100?lion"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carasol;