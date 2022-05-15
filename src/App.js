import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Header from './views/shared/Header';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/details" element={<Details/>}/>
        <Route exact path="/new" element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
