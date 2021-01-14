
/*Components */
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import ProfileCard from './component/ProfileCard'
import BodyComp from './component/BodyComp'
import {Box} from '@material-ui/core'


function App() {
  return (
    <Box width={1} style={{background:'purple'}}>
      {/* Card */}   
        <ProfileCard></ProfileCard>
      {/* navbar fixed */}
        <NavBar></NavBar>
      {/* Body */}
        <BodyComp></BodyComp>
      {/* footer */}
        <Footer></Footer>
    </Box>
  );
}

export default App;
/*
const backgroundbody = {
  backgroundImage: 'linear-gradient(rgb(186, 12, 221), rgb(121, 19, 141), rgb(54, 20, 61), black)',
  color: 'white',
  padding: '31rem',
}*/