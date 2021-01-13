import './App.css';

/*Components */
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import ProfileCard from './component/ProfileCard'
import Body from './component/Body'


function App() {
  return (
    <div>
      {/* Card */}   
        <ProfileCard></ProfileCard>
      {/* navbar fixed */}
        <NavBar></NavBar>
      {/* Body */}
        <Body></Body>
      {/* footer */}
        <Footer></Footer>
    </div>
  );
}

export default App;
