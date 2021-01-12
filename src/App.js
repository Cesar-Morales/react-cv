import './App.css';

/*Components */
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Card from './component/Card'

function App() {
  return (
    <div>
      {/* Card */}   
        <Card></Card>
      {/* navbar fixed */}
        <NavBar></NavBar>
      {/* footer */}
        <Footer></Footer>
    </div>
  );
}

export default App;
