import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Shop from "./Shop/Shop";
import Login from "../features/Login/Login";
import UsersLogging from "../features/Login/UsersLogging";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userLogIn" element={<UsersLogging />} />
        <Route path="/*" element={<h1>ERROR 404 GO BACK</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
