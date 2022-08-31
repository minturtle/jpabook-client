import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginForm from './routes/LoginForm'
import Home from './routes/Home';
import ButtonForm  from "./ButtonForm";


function App() {
  return (
    <>
      <Router>
        <ButtonForm />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;