import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carasol from './elements/Carasol'
import Button from 'react-bootstrap/Button';
import RecCourses from './elements/RecCourses'
import Instructor from './elements/Instructor'


const Home = () => {
    return (
        <div className=''>
            <Container className='p-4 mt-4'>
                <Row>
                    <Col sm={6}>
                        <div className='p-2'>
                            <h1 className='text-center'>Welcome To <span>ITdude</span></h1>
                            <p className='p-3'>
                                Confused on which course to take?
                                I have got you covered. Browse courses and find out
                                the best course for you. Its free! Code With Harry is
                                my attempt to teach basics and those coding techniques
                                to people in short time which took me ages to learn.
                            </p>
                            <div className="d-grid gap-2">
                                <Button variant="secondary" size="lg">
                                    Free Courses
                                </Button>
                            </div>

                        </div>
                    </Col>
                    <Col sm={6}>
                        <Carasol />
                    </Col>
                </Row>
            </Container>
            <div className='mt-4'>
            <h1 className='text-center'>Recommended Courses</h1>
            <RecCourses />
            </div>
            <div className="meetinstructor mt-4">
                <Instructor />
            </div>

        </div>
    );
}

export default Home;