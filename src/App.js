import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginForm from './routes/LoginForm'
import Home from './routes/Home';
import ButtonForm  from "./ButtonForm";
import SignInForm from "./routes/SignInForm";

function App() {
  return (
    <>
      <Router>
        <ButtonForm />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignInForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;