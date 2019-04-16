import React, { Component } from 'react';
// import {Navbar, NavbarBrand} from 'reactstrap';
import MainComponent from './components/MainComponent'
import './App.css';
//import {DISHES} from './shared/dishes'

class App extends Component {

  // constructor(props){
  //   super(props);

  //   this.state={
  //     dishes: DISHES
  //   }
  // }
  render() {
    return (
      // <div>
      //   <Navbar dark color="primary">
      //   <div className="container">
      //   <NavbarBrand href="/">Ristorante co fusion</NavbarBrand>
      //   </div>
      //   </Navbar>
      //   {/* <Menu /> */}
      //   <Menu dishes={this.state.dishes} />
      // </div>
      <div><MainComponent /></div>
    );
  }
}

export default App;
