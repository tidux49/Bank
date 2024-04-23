import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principale from "../src/pages/principale";
import Sign_in_page from '../src/pages/sign_in_page';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import User_page from './pages/user';

const App = () => {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
        <Routes>
          <Route path="/" element={<Principale/>} />
          <Route path="/sign-in" element={<Sign_in_page/>} />
          <Route path="/user" element={<User_page/>} />
        </Routes>
    <nav>
      <Footer />
    </nav>
    </Router>
  );
}

export default App;
