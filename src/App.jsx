import './app.css';
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, your age is {props.age}</p>
    </div>
  )
}
const App = () => {
return(
  <div>
    <h1>Greetings </h1>
    <Hello name='Prabhu' age ='26'/>
    <Hello name='Balaji' age ='23'/>
    <Hello name='Daniel' age ='20'/>
  
  </div>
)
}

export default App;