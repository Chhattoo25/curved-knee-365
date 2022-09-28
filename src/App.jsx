import "./App.css";
import SignIn from "./Components/SignIn";
import { UserAuth } from "./Context/AuthContext";
import Home from "./Pages/Home/Home";

function App() {
  const { user } = UserAuth();

  return <div className="App">{user?.displayName ? <Home /> : <SignIn />}</div>;
}

export default App;
