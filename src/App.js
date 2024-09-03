
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import stackiconf from './assets/stackicon.png';
import AllRoutes from './components/AllRoutes';
//import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';
import Home from './pages/Home/Home.jsx';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { fetchAllUsers } from './actions/users.js';
import { fetchAllQuestions } from './actions/question';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);
  useEffect(()=>{
    dispatch(fetchAllQuestions())
  },[dispatch])

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      {/*<h1> Stack overflow clone</h1>
      <img src={stackiconf} alt="logo"/>*/}
      <BrowserRouter>
        <Navbar/>
        <Home/>
       {/* <AllRoutes/>*/}
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
        {/*  <Routes>
            <Route exact path='/' component={Home}/>
            <Route path='/Auth' component={Auth}/>
    </Routes>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
/*import StackOverflowLogo from "./assets/index";
const  NavbarLogo={
    "ID":1,
    "StackOverFlowLogo":
}
const App=()=><StackOverflowLogo NavbarLogo={NavbarLogo}/>
export default App*/