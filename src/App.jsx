//our first react component
//javascript function
//for now it does not receive any arguements
const App = () => {
  const now = new Date();
  //it can also execute or contain javascript
  console.log('Hello from component App');

  //returns a html
  //dynamic content ah print pannalam example:- date and time
return(
  <div>
    <p>Hello world! It is { now.toString() }</p>
  </div>
)
}

export default App;