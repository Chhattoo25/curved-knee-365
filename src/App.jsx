import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import AfterNavbar from "./Pages/AfterLogin/AfterNavbar";
import { ApplyNow } from "./Pages/ApplyNow/ApplyNow";
import PopularCompanies from "./Pages/CompanyReview/PopularCompanies";
import Home from "./Pages/Home/Home";

import { AllRoutes } from "./Pages/Routes/AllRoutes";
import Message from "./Pages/SalaryGuide/Message";
import Notification from "./Pages/SalaryGuide/Notification";

function App() {
  const { user } = UserAuth();
  return (
    <>

  <div className="App">
    {/* {user?.displayName ? <Home /> : <SignIn />} */}
    </div>

    {/* <Notification/> */}
    {/* <Message/> */}
  <Navbar/>

    <AllRoutes/>

    <ApplyNow/>

    </>
    );


}

export default App;
