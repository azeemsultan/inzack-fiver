import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import { BrowserRouter, Route} from "react-router-dom";
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import { Grid } from '@material-ui/core';
import StickyFooter from './Components/Footer';
import Reward from './Components/Rewards';
import Inzack from './Components/Inzack';
import Start from './Components/Start';
function App() {
  return (

    <div className="App">
          
      <Grid container>

      <BrowserRouter>

      <Route path="/start" component={Start}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/inzack" component={Inzack}/>
      <Route path="/rewards" component={Reward}/>
      <Route path="/" exact={true} component={Home}/>
    
      </BrowserRouter> 
      </Grid>
      {/*<StickyFooter></StickyFooter>*/ }
    </div>
  );
}

export default App;
