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
        <Route path="/appliances-school/" element={<Homepage />} />
        <Route path="/appliances-school/about" element={<About />} />
        <Route path="/appliances-school/contact" element={<Contact />} />
        <Route path="/appliances-school/shop" element={<Shop />} />
        <Route path="/appliances-school/login" element={<Login />} />
        <Route path="/appliances-school/userLogIn" element={<UsersLogging />} />
        <Route path="/*" element={<h1>ERROR 404 GO BACK</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
