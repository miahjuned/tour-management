
import {firebaseConfig} from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Header/Navbar/Navbar/Navbar';
import BottomBar from './Components/Header/BottomBar/BottomBar';


export const userContext = createContext();

function App() {
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const [user, setUser] = useState({});

  const contextData = { user, setUser}
  return (
    <userContext.Provider value={contextData}>
      <Router>
        {/* <SmoothScroll></SmoothScroll> */}
        
        <Navbar/>
        <BottomBar/>
        <Switch>

          <Route exact path="/" component={Home} />
          </Switch>
          <Footer/>
      </Router>
     
    </userContext.Provider>
  );
}

export default App;
