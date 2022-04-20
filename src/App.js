import './App.css';
import { set, ref, onValue, remove, update } from "firebase/database";
import Home from './pages/Home'
import Warehouse from './pages/Warehouse';
import SearchPart from './pages/SearchPart'
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const PageNotFound = () =>
(
  <div>404!</div>
);

function App() {
  //search
  return (
    <div className="App">  

    <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/search" element={<SearchPart />} />
        </Routes>  
    </div>
  );
}

export default App;
