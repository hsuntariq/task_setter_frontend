import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const {user} = useSelector(state=>state.auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    })
  return (
    <h1>Home</h1>
  )
}

export default Home