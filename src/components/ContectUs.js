import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContectUs = () => {
    return (
        <div>
            <div className="p-4 bg-secondary m-5 shadow-lg p-3 mb-5 bg-white rounded ">
                <h1 className='text-dark'>Send us a message</h1>
                <div className='form-group p-4'>
                    <Row>
                        <Col sm={6}>
                            <input className='form-control p-3 mt-3' type="text" placeholder='Name' />
                        </Col>
                        <Col sm={6}>
                            <input className='form-control p-3 mt-3' type="email" placeholder='Email' />
                        </Col>
                        <Col sm={6}>
                            <input className='form-control p-3 mt-3' type="number" placeholder='Phone' />
                        </Col>
                        <Col sm={6}>
                            <input className='form-control p-3 mt-3' type="text" placeholder='Subject' />
                        </Col>


                        <Col sm={12}>
                            <textarea className='form-control p-3 mt-3' name="Message" id="" cols="" rows="5" placeholder='Message' />
                        </Col>

                        <Col sm={12}>
                        <Button variant="outline-primary" className='mt-3' size="lg">Submit &#9993;</Button>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}
export default ContectUs;