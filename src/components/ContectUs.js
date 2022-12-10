import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'


const ContectUs = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const msgSending = (e)=>{
        e.preventDefault();
        alert(name)
    }

    return (
        <div>
            <Form onSubmit={msgSending}>
                <div className="p-4 bg-secondary m-5 shadow-lg p-3 mb-5 bg-white rounded ">
                    <h1 className='text-dark'>Send us a message</h1>
                    <div className='form-group p-4'>
                        <Row>
                            <Col sm={6}>
                                <input className='form-control p-3 mt-3' type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </Col>
                            <Col sm={6}>
                                <input className='form-control p-3 mt-3' type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Col>
                            <Col sm={6}>
                                <input className='form-control p-3 mt-3' type="number" placeholder='Phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                            </Col>
                            <Col sm={6}>
                                <input className='form-control p-3 mt-3' type="text" placeholder='Subject' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                            </Col>


                            <Col sm={12}>
                                <textarea className='form-control p-3 mt-3' name="Message" id="" cols="" rows="5" placeholder='Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                            </Col>

                            <Col sm={12}>
                                <Button variant="outline-primary" className='mt-3' size="lg" type='submit'>Submit &#9993;</Button>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Form>
        </div>
    )
}
export default ContectUs;