import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Reset from "./pages/Login/Reset";
import Signup from "./pages/Login/Signup";
import Checkout from "./pages/Shared/Checkout";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/Shared/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
