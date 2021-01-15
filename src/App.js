
/*Components */
//import NavBar from './component/NavBar'
//import Footer from './component/Footer'
import BackgroundImage from './component/BackgroundImage'
import BodyComp from './component/BodyComp'
import {Container} from '@material-ui/core'


function App() {
  return (
    <Container maxWidth='xl'>
      {/* Card */}   
        <BackgroundImage></BackgroundImage>
      {/* navbar fixed */}
        <BodyComp></BodyComp>
      {/* Body 
        <NavBar></NavBar>
      {/* footer 
        <Footer></Footer>*/}
    </Container>
  );
}

export default App;
/*
const backgroundbody = {
  backgroundImage: 'linear-gradient(rgb(186, 12, 221), rgb(121, 19, 141), rgb(54, 20, 61), black)',
  color: 'white',
  padding: '31rem',
}*/