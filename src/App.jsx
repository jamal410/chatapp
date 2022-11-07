// import logo from './logo.svg';
import './App.css';

import { Link,Routes,Route} from 'react-router-dom'

import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import NotFound from './components/notfound'


function App() {
  return (
    <div >
  
  <nav>
<ul>
<li>  <Link  to="/"> Home</Link></li>
<li> <Link to="/Login"> Login </Link></li>
<li>  <Link to="/Signup"> Signup</Link></li>
</ul>
  </nav>

  <Routes>
<Route
path="/Home"
element={<Home />}
errorElement={<NotFound />}
/>
<Route
path="/Login"
element={<Login />}
errorElement={<NotFound />}
/>


<Route
  path="/Signup"
  element={<Signup />}
  errorElement={<NotFound />}
  />
  </Routes>
    </div>
  );
}

export default App;
