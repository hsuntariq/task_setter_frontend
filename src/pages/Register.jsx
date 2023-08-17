import React, {  } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { register, reset } from "../features/auth/authSlice";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
const Register = () => {

  const [formFields,setFormFields] = useState({
    name:'',email:'',password:'',c_password:''
  })
  // get the initialState of the app
  const {user,isLoading,isSuccess,isError,message} = useSelector(state=>state.auth)
  // initialize useDispatch and navigate

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // destructure
  const {name,email,password,c_password} = formFields;

  const handleChange = (e) => {
    setFormFields((prevValue)=>({
      ...prevValue,
      [e.target.name] : e.target.value
    }))
  }
  // handle the sideEffects
  useEffect(()=>{
      if(isError){
        toast(message);
      }if(isSuccess){
        toast(`welcome ${user?.name}`)
      }
      dispatch(reset())
  },[isError,isSuccess,message,navigate,dispatch])
  // submit the data
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,email,password
    }
    dispatch(register(userData))
    setFormFields({...formFields,name:'',email:'',password:'',c_password:''})
  }
  if(isLoading){
    return <h1>Loading ... </h1>
  }
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={handleChange}

                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <div className="icon">
                  
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={handleChange}
                  />
                  </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="c_password"
                  placeholder="Enter confirm password..."
                  value={c_password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button onClick={handleSubmit}>Register</Button>
            </Form>
          </Col>
          <Col lg={6}>
            <img
              style={{ width: "100%" }}
              src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
