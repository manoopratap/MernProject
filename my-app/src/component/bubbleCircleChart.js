import React, { Component } from "react";
import * as d3 from "d3";
class bubbleCircleChart extends Component {
  componentDidMount() {
    const data = [
      { country: "China", population: 1439323776 },
      { country: "India", population: 1380004385 },
      { country: "US", population: 331002651 },
      { country: "Indonatia", population: 273523615 },
      { country: "Pakistan", population: 220892340 },
      { country: "Brazil", population: 212559417 },
    ];
    this.drawBarChart(data);
  }
  drawBarChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 30;
    const marging = { left: 80, top: 50, bottom: 50, right: 25 };
    const innerWidth = canvasWidth - marging.left - marging.right;
    const innerHeight = canvasHeight - marging.top - marging.bottom;
    const svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");

    const XValue = (d) => d.population;
    const YValue = (d) => d.country;
    const XScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, XValue)])
      .range([0, innerWidth ]).nice();

    const YScale = d3
      .scalePoint()
      .domain(data.map(YValue))
      .range([0, innerHeight])
      .padding('0.2');
    const xAxisTickFormater =number => d3.format('.2s')(number).replace('G','B');
    const xAxis = d3.axisBottom(XScale).tickFormat(xAxisTickFormater)
          .tickSize(-innerHeight +10);

    const global = svgCanvas
            .append("g")
            .attr("transform", `translate(${marging.left},${marging.top})`);
    const yAxis = d3.axisLeft(YScale)
                    .tickSize(-innerWidth );

   const yAxisG = global.append("g").call(yAxis)
          .attr("color", "black")
          .style("font-size",12);

    yAxisG.selectAll(' .domain ')
          .remove();
          
   const xAxisG =  global.append("g").call(xAxis).attr("color", "black")
          .style("font-size",12)
          .attr("transform", `translate(0,${innerHeight})`);
    xAxisG.append('text')
          .attr('y',40)
          .attr('x',innerWidth/2)
          .text('Population')
          .attr('fill','red');
   xAxisG.select('.domain')
          .remove();
   xAxisG.append('text')
          .attr('y',40)
          .attr('x',innerWidth/2)
          .text('Population')
          .attr('fill','red');
  global.append('text')
          .style('font-family','sans-serif')
          .text('Top 6 Population Country')

    const bar = global
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr('fill','#79a7db')
      .attr("cy", (d) => YScale(YValue(d)))
      .attr("cx", (d) => XScale(XValue(d)))
      .attr("r", 7);

  }
  render() {
    return <div ref="canvas"></div>;
  }
}

export default bubbleCircleChart;
