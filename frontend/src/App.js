import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
