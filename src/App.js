
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Add from './users/Add';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Edit from './users/Edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add" element={<Add/>}/>
        <Route exact path="/edit/:userid" element={<Edit/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
