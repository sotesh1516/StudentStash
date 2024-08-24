import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import Signin from "./components/Signin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
