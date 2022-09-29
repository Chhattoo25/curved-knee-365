import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import PopularCompanies from "./Pages/CompanyReview/PopularCompanies";
import Home from "./Pages/Home/Home";
import { AllRoutes } from "./Pages/Routes/AllRoutes";

function App() {
  const { user } = UserAuth();

  return (
  <>
  <Navbar/>
  <AllRoutes/>

  <div className="App">{user?.displayName ? <Home /> : <SignIn />}


  </div>
  </>
  
  )
}

export default App;
