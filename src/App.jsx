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
    </>
  )
}

function Person(){
  const age=25;
  const add_age=3;
  const person={name: 'Sakib', dept: 'Dept. of CSE', batch: 61}
  return <h3>I am a {person} with age is {age+add_age}</h3>
}

export default App
