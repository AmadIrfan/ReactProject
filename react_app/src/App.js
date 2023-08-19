import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Register from './Components/Register';
import Email from './Components/Email';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/navbar' component={NavBar} />
        <Route exact path='/sidebar' component={Sidebar} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/email' component={Email} />
      </Switch>
    </div>
  );
}

export default App;
