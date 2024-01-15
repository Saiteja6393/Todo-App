import React, {useState} from 'react'
import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {collection, addDoc} from 'firebase/firestore'
export const UserAuth = () => {
    const [data,setData]= useState({
        email:"",
        password:""
      })
     
      const {email,password}=data;
      const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
      }

  
      
      const signUp= async (e) =>{
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth, email, password)
        } catch(err){
          console.log(err);
        }
      };

      const signUpWithGoogle= async (e) =>{
        e.preventDefault();
        try{
        await signInWithPopup(auth, googleProvider)
        } catch(err){
          console.log(err);
        }
      };

      const signIn= async (e) =>{
        e.preventDefault();
        try{
        await signInWithEmailAndPassword(auth, email, password)
        } catch(err){
          console.log(err);
        }
      };

      

  return (
    <div>
        <center>
      <form className='loginform'><br/>
          <input type='email' name='email' placeholder='Email' value={email} onChange={changeHandler}/><br/><br/>
          <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br/><br/>
          <button onClick={signUp} className='btnn'>Sign Up</button>&nbsp;
          <button onClick={signUpWithGoogle} className='gbtn'>Signup with Google</button>&nbsp;
          <button onClick={signIn} className='btnn'>Sign In</button>
          
        </form>
        </center>
    </div>
  )
}

export default UserAuth
