import './App.css';
import Main from './Components/Main'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
     
    </div>
  );
 }
 
 export default App;
