import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person> 
      <Person></Person> 
      <Person></Person>
      <Student></Student> 
      <Developer></Developer>
    </>
  )
}

function Person(){
  const age=25;
  const add_age=3;
  const person={name: 'Sakib', dept: 'Dept. of CSE', batch: 61};
  return <h3>I am a {person.name} {person.dept} {person.batch} and age is {age+add_age}</h3>
}

function Student(){
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: Omar Farhatul</p>
      <p>Age: 30</p>
    </div>
  )
}

function Developer(){
  const developerStyle={
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer page</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
