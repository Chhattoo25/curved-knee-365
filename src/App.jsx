import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import PopularCompanies from "./Pages/CompanyReview/PopularCompanies";
import Home from "./Pages/Home/Home";

import { AllRoutes } from "./Pages/Routes/AllRoutes";

import SalaryGuide from './Pages/SalaryGuide/SalaryGuide';


function App() {
  const { user } = UserAuth();
  return( 
    <>
  <div className="App">
    {user?.displayName ? <Home /> : <SignIn />}</div>

  <Navbar/>
    <AllRoutes/>
  <br/>
  <br/>
  <br/>
      <SalaryGuide/>
    </>
    );

}

export default App;
