import Home from "./views/Home";
import Login from "./components/Forms/Login/Login";
import SignUp from "./components/Forms/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
