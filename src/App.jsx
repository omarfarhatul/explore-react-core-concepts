import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  return (
    <>
      <h3>Vite + React</h3>
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Explore core concept" isDone={false}></ToDo>
      <ToDo task="Try JSX"isDone={true}></ToDo>
      {/* <Device name="Laptop" price="40000" brand="Hp"></Device>
      <Device name="Mobile" price="15500"></Device>
      <Person></Person>
      <Student grade="7" score="90"></Student> 
      <Student grade={10} score="80"></Student> 
      <Student></Student> 
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This device {props.name} name is {props.brand} and price {props.price}</h2>
}

function Person(){
  const age=25;
  const add_age=3;
  const person={name: 'Sakib', dept: 'Dept. of CSE', batch: 61};
  return <h3>I am a {person.name} {person.dept} {person.batch} and age is {age+add_age}</h3>
}

const {grade, score}={grade: '7', score: '99'};

function Student({grade=1, score=12}){
    console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
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
      <p>Coding: HTML, CSS, JS, ReactJs, NodeJs</p>
    </div>
  )
}

export default App
