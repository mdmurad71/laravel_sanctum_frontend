import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter } from "react-router-dom";
import Approuter from './router/Approute';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}

export default App;
