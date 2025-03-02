import React, { useState } from 'react'
import { Form, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase.config"
import { toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.scss'
const Login = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[loading,setLoading]=useState(false)
const navigate=useNavigate();

  const signIn=async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential= await signInWithEmailAndPassword(auth,email,password)

      const user=userCredential.user
      
      console.log(user,'the login user')
      setLoading(false)
      toast.success("Successfully Logged in")
      navigate('/Checkout')
      
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <div>
      <section>
      <div className="container">
        <div className="row">
          {
            loading ? <div className='col-lg-12'><h4 style={{textAlign:"center"}}>Loading....</h4>
            </div>:
            <div className='col-lg-6'>
          <h3 style={{textAlign:'center', marginBottom:'10px'}}>Login</h3>
          <Form className='login_form' onSubmit={signIn}>
            <FormGroup className='form_group'>
              <input 
              type="email"  
              placeholder='enter your email'
              value={email}
              onChange={e=>setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup className='form_group'>
              <input 
              type="password"  
              placeholder='enter your password'
              value={password}
              onChange={e=>setPassword(e.target.value)}/>
            </FormGroup>
            <button type='submit' className='submit-btn'>Login</button>
            <p>Don't have an account? <Link className='signup_link' to={'/Signup'}>Create an Account</Link></p>
          </Form>
        </div>
          }
        
        </div>
        </div>
      </section>
    </div>
  )
}

export default Login