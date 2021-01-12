import './App.css';

function App() {
  return (
    <div style={position}>
      <div style={border}>
        <p>asdasdas</p>
      </div>
      <br/>
      <div style={border}>
        <p>asdasdas</p>
      </div>
      <br/>
      <div style={border}>
        <p>asdasdas</p>
      </div>
    </div>
  );
}
const position = {
  position: 'fixed',
  top: '40%',
  left: '20px',
  border: '5px solid black'
  
}
const border = {
  border: '1px solid white'
}

export default App;
