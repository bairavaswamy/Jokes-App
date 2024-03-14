import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage/Home.jsx"
import LoginPage from "./components/LoginPage/Login.jsx"

const App = () =>{
  return(
      <Router> 
        <Routes>
          <Route exact path ="/" element={<LoginPage/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </Router>
  )
}

export default App
