import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginForm from './routes/LoginForm'
import Home from './routes/Home';
import ButtonForm  from "./ButtonForm";
import SignInForm from "./routes/SignInForm";
import UserDetail from "./routes/UserDetail";


function App() {
  return (
    <>
      <Router>
        <ButtonForm />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignInForm />} />
          <Route path="/userDetail" element={<UserDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;