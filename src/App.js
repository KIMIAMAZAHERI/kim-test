import './App.css';
import Poke from "./images/poke.png";
import Login from "./components/Login";

function App() {
  return (
    <div className="main">
     <div className='sub-main'>
       <div>
          <div className='imgs'>
            <div className='container-image'>
            <img src={Poke} alt="picture of charmander" className='poke'></img>
            </div>
       </div>
       <div>
         <h1>Login page</h1>
         <Login />
       </div>
       </div>
     </div>
    </div>
  );
}

export default App;
