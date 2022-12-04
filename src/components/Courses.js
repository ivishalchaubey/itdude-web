import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Courses() {
    return (
      <>
      <h1 className='mt-3'>All Courses..</h1>
        <Container className='d-flex justify-content-center text-dark'>
            
            <Row>
                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70?grayscale" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70?lion" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70?grayscale" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/100/70?lion" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div className='mt-5'></div>
        </>
    );
}

export default Courses;