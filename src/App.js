import './App.css';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main';
import Footer from './components/MyFooter';
function App() {
  return (
    <div >
        <Router>
        <MyNavbar/>
        
          <Main/>
          <MyFooter/>  
      </Router>

    </div>
  );
}

export default App;
