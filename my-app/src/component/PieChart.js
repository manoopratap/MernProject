import React, { Component } from "react";
import * as d3 from "d3";
class PieChart extends Component {
  componentDidMount() {
    const data = [2, 4, 1,5];
    this.drawPieChart(data);
  }
  drawPieChart(data) {
    var width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal().range(["#2C93E8", "#838690", "#F56C4E","green"]);
    var pie = d3.pie().value(function (d) {return d;})(data);
    var arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    var labelArc = d3
      .arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    var svg = d3
      .select(this.refs.fanvas)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var g = svg
      .selectAll("arc")
      .data(pie)
      .enter()
      .append("g")
      .attr("class", "arc");
    g.append("path")
      .attr("d", arc)
      .style("fill", function (d) {
        return color(d.data);
      });
    g.append("text")
	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	.text(function(d) { return d.data;})
	.style("fill", "#fff");
    
  }

  render() {
    return <div ref="fanvas"></div>;
  }
}

export default PieChart;
