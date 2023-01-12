import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
