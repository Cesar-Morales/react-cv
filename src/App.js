import './App.css';

function App() {
  return (
    <div>
    {/* navbar fixed */}   
      <div style={card}>
        <p>Card</p>
      </div>
    {/* navbar fixed */}
    <div style={position}>
      <div style={border}>
        <p>home</p>
      </div>
      <br/>
      <div style={border}>
        <p>page1</p>
      </div>
      <br/>
      <div style={border}>
        <p>page2</p>
      </div>
    </div>

    {/* footer */}
    <div style={footer}>
      <div style={border}>
      <p>Footer</p>
      </div>
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

const footer = {
  position: 'absolute',
  bottom: '1%',
  left: '50%'
}

const card = {
  position: 'absolute',
  top: '5%',
  left: '50%'
}

export default App;
