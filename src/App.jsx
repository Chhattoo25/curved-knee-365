import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import AfterNavbar from "./Pages/AfterLogin/AfterNavbar";
import { ApplyNow } from "./Pages/ApplyNow/ApplyNow";
import PopularCompanies from "./Pages/CompanyReview/PopularCompanies";
import Home from "./Pages/Home/Home";
import { AllRoutes } from "./Pages/Routes/AllRoutes";
import Capegemini from "./Pages/SalaryGuide/Capegemini";
import Message from "./Pages/SalaryGuide/Message";
import Notification from "./Pages/SalaryGuide/Notification";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
