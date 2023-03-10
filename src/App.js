import {useEffect,useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Fallback from "./components/Fallback";
import Buy from "./components/Buy";
import NavBar from "./components/NavBar";
import List from "./components/List";
import About from "./components/About";
import Home from "./components/Home";
import Cart from './components/Cart';

function App() {

const [toys, setToys] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/toys")
  .then((r) => r.json())
  .then((toys) => setToys(toys))
}, [])

const onAddToy = (newToy) => {
  setToys((toys) => [...toys, newToy]);
};

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <Switch>

       
          <Route path = "/buy">
            <Buy 
            />
            
          </Route>

         
          <Route path = "/cart">
            <Cart />
          </Route>
        
            <Route path = "/about" >
            <About/>
          </Route>

        
            <Route path = "/list/new">
            <List onAddToy={onAddToy}/>
          </Route>


            <Route exact path  = "/">
            <Home/>
          </Route>

   
            <Route path = "/*">
            <Fallback/>
          </Route>

        </Switch>
      </header>
    </div>
  );
}

export default App;
