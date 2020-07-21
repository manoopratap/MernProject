import React, { Component } from "react";
import * as d3 from "d3";
class BarChart extends Component {
  componentDidMount() {
    const data = [2, 4, 1, 6, 8, 9];
    this.drawBarChart(data);
  }
  drawBarChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 30;
    const svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");

    svgCanvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", 30)
      .attr("height", (datapoint) => datapoint * scale)
      .attr("fill", (dataPoint) => (dataPoint % 2 == 0 ? "orange" : "green"))
      .attr("x", (datapoint, iteration) => iteration * 45)
      .attr("y", (datapoint) => canvasHeight - datapoint * scale)
      .on("mouseover", function (d, i) {
        d3.select(this).transition().attr("fill", "red");
      })
      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .attr("fill", (dataPoint) =>
            dataPoint % 2 == 0 ? "orange" : "green"
          );
      });

    svgCanvas
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (dataPoint, i) => i * 45 + 10)
      .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text((dataPoint) => dataPoint);
  }
  render() {
    return <div ref="canvas"></div>;
  }
}

export default BarChart;
