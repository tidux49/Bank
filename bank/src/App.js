import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principale from "../src/pages/principale";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/*" element={<Principale/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
