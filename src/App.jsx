import "./App.css";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import Home from "./Pages/Home/Home";
import Navbar from './Components/Header/Navbar';
import SalaryGuide from './Pages/SalaryGuide/SalaryGuide';

function App() {
  const { user } = UserAuth();

  return( 
    <>
  <div className="App">
    {/* {user?.displayName ? <Home /> : <SignIn />} */}
    </div>

  <Navbar/>
  <br/>
  <br/>
  <br/>
      <SalaryGuide/>
    </>
    );
}

export default App;
