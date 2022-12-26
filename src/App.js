import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Loginscreen from './screens/Loginscreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profilescreen from './screens/Profilescreen';

//848f3b640fbc12adaabc7e0b4f8841df
//https://api.themoviedb.org/3/movie/550?api_key=848f3b640fbc12adaabc7e0b4f8841df


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth)
      {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
          })
        );
      }
      else
      {
        dispatch(logout());
      }
    });

    return unsubscribe;

  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen/>
        ):
        (
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
          <Route exact path='/profile' element={<Profilescreen/>}/>
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;
