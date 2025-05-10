import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name = "Rohit Sharma" battingStyle = "RHB"><h1>Also Known as Hitman</h1></Greet>
      <Greet name = "Virat Kohli" battingStyle = "RHB">Also Known as King</Greet>
      <Greet name = "Steven Smith" battingStyle = "LHB"></Greet>
      <Welcome name = "Rohit Sharma" battingStyle = "RHB"></Welcome>
      <Welcome name = "Virat Kohli" battingStyle = "RHB"></Welcome>
      <Welcome name = "Steven Smith" battingStyle = "LHB"></Welcome>
      <Hello></Hello>
      <Message></Message>
    </div>
  );
}

export default App;
