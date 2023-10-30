import Header from './components/Header'
import AnimRoute from "./components/AnimRoute";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <AnimRoute/>
    </Router>
  );
}

export default App;
