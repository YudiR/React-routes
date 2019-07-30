import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/pages/about/about'
import Shop from './components/pages/shop/shop'
import { getAllItems, getWorker } from "./web/service";
import WorkerInfo from "./components/iteminfo/workerInfo"

const home = props => <h1 {...props}>Hello World!!!</h1>


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workers:null,
      selected: null
    }
  }

  componentDidMount() {
    getAllItems()
      .then(e => e.json())
      .then(e => this.setState({ workers: e }, () => console.log(this.state.workers))      );
  }

  workerClick = id => {
    getWorker(id)
    .then(e => e.json())
      .then(e => {
        console.log('ITEM::',e);
        this.setState({ selected: e })});

  }

  render() {
  return (
   <Router>
     <Navbar/>
     <Switch>
     <Route path = "/" exact render ={props => home(props)}/> 
     <Route path = "/main"  component ={About}/>
     <Route path = "/shop" 
    exact render ={props => (
      <Shop  
      
      {...props}
      data={this.state.workers}
      click = {this.workerClick}
      />
      
     )}
     />
     <Route path = "/shop/:id" render={props=><WorkerInfo {...props} worker={this.state.selected} />} 
     />
     </Switch>
     </Router>
  );
}
}

export default App;
