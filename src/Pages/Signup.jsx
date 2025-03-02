import React, { useState } from 'react'
import { Form, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { uploadBytesResumable ,ref, getDownloadURL } from 'firebase/storage';
import { setDoc,doc } from 'firebase/firestore';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify';
import '../Styles/Login.scss'
const Signup = () => {
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[file,setFile]=useState("")
  const[loading,setLoading]=useState(false)

const navigate=useNavigate()
console.log(loading)
  const signup=async(e)=>{
    e.preventDefault()
    setLoading(true)

    if (!email || !password || !username) {
      alert("All fields are required.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      setLoading(false);
      return;
  }
   
    try {
      
    
      const userCredential=await createUserWithEmailAndPassword(auth,email,
password);
        const user=userCredential.user

        const storageref = ref(storage, `images/${Date.now()}_${username}`);

 const uploadTask=uploadBytesResumable(storageref,file)
      uploadTask.on((error)=>{
        toast.error(error.message)
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
         await updateProfile(user,{
            displayName:username,
            photoURL:downloadURL,
          });
          await setDoc(doc(db,'users',user.uid),
          {
            uid:user.uid,
            displayName:username,
            email,
            photoURL:downloadURL,
          })
        })
      })
      console.log(user,'the user')
        toast.success(" Created account")
      navigate('/Login')
    } catch (error) {
      console.error("Error during signup: ", error.code, error.message);
      toast.error("Something Went Wrong")
    }
  }
  return (
    <div>
    <section>
    <div className="container">
      <div className="row">
      <div className='col-lg-6'>
        <h3 style={{textAlign:'center', marginBottom:'10px'}}>Sign Up</h3>
        <Form className='login_form' onSubmit={signup}>
        <FormGroup className='form_group'>
            <input 
            type="username"  
            placeholder='enter your username'
            value={username}
            onChange={e=>setUsername(e.target.value)}/>
          </FormGroup>
          <FormGroup className='form_group'>
            <input 
            type="email"  
            placeholder='enter your email'
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup className='form_group'>
            <input 
            type="file"  
            
            
            onChange={e=>setFile(e.target.files[0])}/>
          </FormGroup>
          <FormGroup className='form_group'>
            <input 
            type="password"  
            placeholder='enter your password'
            value={password}
            onChange={e=>setPassword(e.target.value)}/>
          </FormGroup>
          <button type='submit' className='submit-btn'>Login</button>
          <p>Already have an account? <Link className='signup_link' to={'/Login'}>Login</Link></p>
        </Form>
      </div>
      </div>
      </div>
    </section>
  </div>
  )
}

export default Signup