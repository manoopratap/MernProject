import React, { Component } from "react";
import * as d3 from "d3";
class freeCodeCampChart extends Component {
  componentDidMount() {
    const data = [{}];
    this.freeCodeCampChart(data);
  }
  freeCodeCampChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 30;
    const svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");
      const eyeSpacing = 50;
      const eyeOffset = 30;
      const eyeRadious =13
      const g  = svgCanvas.append('g')
            .attr('transform' , `translate(${canvasWidth / 2},${canvasHeight/ 2})`)
    
    const circle = g.append('circle')
        .attr('r',100)
        .attr('fill','yellow')
        .attr('stroke','black')
    const groupEyes = g.append('g')
        .attr('fill','black')
        .attr('stroke','black');

    const LeftEyes = groupEyes.append('circle')
        .attr('r',eyeRadious)
        .attr('cx',  - eyeSpacing)
        .attr('cy', - eyeOffset)
       
     const RightEyes = groupEyes.append('circle')
        .attr('r',eyeRadious)
        .attr('cx',  + eyeSpacing)
        .attr('cy', - eyeOffset)
       
    const leftEyeBrow = groupEyes.append('rect')
        .attr('x', - 60)
        .attr('y', - 60)
        .attr('width',30)
        .attr('height',7)
     const rightEyeBrow = groupEyes.append('rect')
        .attr('x',  36)
        .attr('y', - 60)
        .attr('width',30)
        .attr('height',7)
        .transition().duration(2000)
            .attr('y', -70)
        .transition().duration(2000)
            .attr('y', -60)
        

    const Mouth = g.append('path')
        .attr('d', d3.arc()({
            innerRadius : 45,
            outerRadius : 55,
            startAngle : Math.PI / 2,
            endAngle : Math.PI * 3/2
    }))
      
  }
  render() {
    return <div ref="canvas"></div>;
  }
}

export default freeCodeCampChart;
