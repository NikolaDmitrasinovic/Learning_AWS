import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

const HomePage = () => <div>Home</div>
const Paige1 = () => <div>Piage 1</div>
const Paige2 = () => <div>Piage 2</div>

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="page1">Page 1</Link></li>
          <li><Link to="page2">Page 2</Link></li>
        </ul>
        <Routes>
          <Route path='/page1' element={<Paige1 />} />
          <Route path='/page2' element={<Paige2 />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
