import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Header from "./screens/Header";
import Login from "./screens/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="log" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
