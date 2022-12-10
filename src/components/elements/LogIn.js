import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Login_action_user} from './../../redux/action/LogInAction'





const LogIN = () => {
    const [myemail,setEmail] = useState("");
    const [mypassword,setPassword] = useState("");

    const myState = useSelector((state)=>state.logIn_Reducer);
    const dispatch = useDispatch();

    const logInFunction = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <Form onSubmit={()=>dispatch(Login_action_user())}>
            <div className="p-4 bg-secondary m-5 shadow-lg p-3 mb-5 bg-dark rounded text-white">
                <h1 className=''>Log In Here..</h1>
                <div className='form-group p-4'>
                    <Row>
                        <Col sm={12}>
                            <input className='form-control p-3 mt-3' type="email" placeholder='email' value={myemail} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Col>
                        <Col sm={12}>
                            <input className='form-control p-3 mt-3' type="password" placeholder='password' value={mypassword} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </Col>

                        <Col sm={12}>
                            <div className="d-grid gap-2 mt-3">
                                <Button variant="primary" size="lg" type='submit'>
                                    LogIn
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </Form>
        </>
    )
}

export default LogIN;