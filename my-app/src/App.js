import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from './component/BarChart';
import PieChart from './component/PieChart';
import FreeCodeCampChart from './component/freeCodeCampChart';
import FreeCodeCampBarChart from './component/freeCodeCampBarChart';
import BubbleCircleChart from  './component/bubbleCircleChart';
import WorldMap from "./component/worldMap";
import './App.css'
class App extends Component {
  render() {

    return (
      <div className="App-header">
        <div>Mannoo Pratap singh</div>
      <WorldMap/>
      <BubbleCircleChart/>
      <FreeCodeCampBarChart/>
      <FreeCodeCampChart/>
      <BarChart/>
      <PieChart/>
      
      </div>
      
    );
  }
}

export default App;
