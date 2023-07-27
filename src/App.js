import React, {useEffect, useState} from 'react'
import UserAuth from './components/UserAuth';
import Home from './Home';
import { auth } from './config/firebase';
const App = () => {
  const [presentUser, setPresentUser]=useState(null);
  useEffect(()=>{
    
    auth.onAuthStateChanged(user=>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div className='App'> 
        {presentUser? <Home presentUser={presentUser}/>: <UserAuth/>}
    </div>
  )
}

export default App;
