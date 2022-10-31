import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
// import { Link, Route, useNavigate } from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    var token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbXV0aGVzd2FyYW4iLCJleHAiOjE2Njc2MTgxNjEsImlhdCI6MTY2NzE4NjE2MX0.d1H0NWIyTbMDUYFiSWhzsMirV7jhbtCBdteary4e8tgCXn6IWHNVWAT9beRLSbGpxpNN3K7rUqzvRtH0pvvOkg`
    const LoginCheck = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/login`, { username, password  })
             .then(res => console.log(res))
             .catch(err => console.log(err))
    
    }

  return (
    
    <Container fluid >
            <Row className="mt-4 pt-4 ">
                <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg bg-light">
                    <Form className='bg-light'>
                        <h4 className='text-center' >Wallet Pay</h4>
                        <h6 className='mb-3 text-center ' >Welcome back! Please Login into Continue </h6>
                        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" autoComplete="off" >
                            <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" autoComplete="off" >
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </FloatingLabel>
                        <div className='text-center span2'>
                            {/* <div className="d-grid ps-5 gap-2"> */}
                            <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn-block' onClick={LoginCheck} >Login</Button>
                            <Button type='reset' variant="warning" className='mb-2 mt-2 btn-block' >Reset</Button>
                        </div>
                        <div className='text-center mt-2 '>
                            {/* <Link to="/forgotpassword" >Forgot Password?</Link> */}
                        </div>
                        <div className='text-center mt-3 '>
                            <h6>New here? Please Sign Up</h6>
                            <Button variant="secondary" className='mb-3'>Sign Up</Button>
                        </div>
                        <div className='text-center'>

                            <Button variant="success" className='mb-3' >Back to Home</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>

  )
}

export default Login