import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.partNumber} {props.excersiseNumber}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.numberExcersise}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course}/>
      <Content  partNumber={part1} excersiseNumber={exercises1}/>
      <Content  partNumber={part2} excersiseNumber={exercises2}/>
      <Content  partNumber={part3} excersiseNumber={exercises3}/>
      <Total numberExcersise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))