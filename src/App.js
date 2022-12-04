import './App.css';
import Home from './components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AboutUs from './components/AboutUs';
import ContectUs from './components/ContectUs';
import Courses from './components/Courses';
import WebNavBar from './components/elements/Navbar'
import Footer from './components/elements/Footer'



function App() {
  return (
    <div className='App bg-gradient'>
    <BrowserRouter>
    <WebNavBar />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contectus' element={<ContectUs />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
