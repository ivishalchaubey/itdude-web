import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Vishal from '../images/VishalLogo.jpg'
import '../../App.css'

function Instructor() {
    return (
        <>


            <div className='p-4 container'>

                <div className='instructor-name'>
                    <Row>
                        <Col sm={10}>
                            <h1>Meet your <span>Instructor</span></h1>
                        </Col>

                        <Col sm={2}>
                            <Button className='' variant="outline-primary">Know More</Button>
                        </Col>
                    </Row>

                </div>
                <div className='d-flex justify-content-center p-4'>
                    <div className='d-flex flex-column'>
                        <Image className='img-fluid instuctorImage'
                            src=
                            {Vishal}
                            roundedCircle
                        />
                        <div className='text-center'>
                        <h3>Vishal Kumar Chaubey</h3>
                        <p>(Vishu)</p>
                        <h5>Founder, ITdude</h5>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Instructor;