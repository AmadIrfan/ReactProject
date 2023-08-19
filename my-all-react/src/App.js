import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import About from './Component/About';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route exact path='/carousel' component={Carousel} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
