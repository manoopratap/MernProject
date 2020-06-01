import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from './component/BarChart';
import PieChart from './component/PieChart';
import './App.css'
class App extends Component {
  render() {

    return (
      <div className="App-header">
      <BarChart/>
      <PieChart/>
      </div>
      
    );
  }
}

export default App;