import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
