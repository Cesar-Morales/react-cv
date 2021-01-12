import './App.css';

/*Components */
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import ProfileCard from './component/ProfileCard'


function App() {
  return (
    <div>
      {/* Card */}   
        <ProfileCard></ProfileCard>
      {/* navbar fixed */}
        <NavBar></NavBar>
      {/* footer */}
        <Footer></Footer>
    </div>
  );
}

export default App;
