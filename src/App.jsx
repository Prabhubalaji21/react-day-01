//our first react component
//javascript function
//for now it does not receive any arguements
const Hello = ( ) => {
  return(
    <div>
      <p>Hello everyone...!!!</p>
    </div>
  )
}
const App = () => {
  // const now = new Date();
  // const a=10;
  // const b=20;

  // console.log(now, a+b);
  // //it can also execute or contain javascript
  // console.log('Hello from component App');

  //returns a html
  //dynamic content ah print pannalam example:- date and time
return(
  <div>
    <h1>Greetings </h1>
    <Hello />
    <Hello />
    <Hello />
    <Hello />
    <Hello />
  </div>
)
}

export default App;