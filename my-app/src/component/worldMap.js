import React, { Component } from "react";
import * as d3 from "d3";
import { feature } from "topojson";
import "../App.css";
class worldMap extends Component {
  componentDidMount() {
      const CoronaData =[
        {id:840,countryName:'United States',confirmCases:'3.29M',recoverdCases:'970k',deathCases:'137k'},
        {id:0,countryName:'Brazil',confirmCases:'1.84M',recoverdCases:'124M',deathCases:'71,469'},
        {id:356,countryName:'India',confirmCases:'850K',recoverdCases:'535K',deathCases:'22,674'},
        {id:0,countryName:'Russia',confirmCases:'727k',recoverdCases:'501k',deathCases:'11135'},
        {id:0,countryName:'Peru',confirmCases:'323k',recoverdCases:'214k',deathCases:'11682'},
        ]
    this.drawBarChart();
  }
  drawBarChart() {
    const canvasHeight = 500;
    const canvasWidth = 1000;
    const projection = d3.geoNaturalEarth1();
    const pathGenerator = d3.geoPath().projection(projection);

    const svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");
    // Promise.all([
    //   d3.tsv("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.tsv"),
    //   d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),
    // ]).then(([tsvData, topoJsonData]) => {
    //   console.log("ass",tsvData);
    //   console.log(topoJsonData);
    // });
const g= svgCanvas.append('g');
    g.append("path")
      .attr("class", "sphere")
      .attr("d", pathGenerator({ type: "Sphere" }));
    svgCanvas.call(d3.zoom().on('zoom',()=>{
      g.attr('transform',d3.event.transform)
    }));

    const CountryName = ( id) => {
      //const ss = data.filter((d) => d.id == id);
      console.log(id)
    };

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((data) => {
      console.log(data.objects.countries.geometries)

      const countries = feature(data, data.objects.countries);

      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathGenerator)
        .append("title")
        //.text(d=>d.properties.name);
        .text(function(d){return ` Corona Virus Status
--------------------------
Country Name: ${d.properties.name} 
Confirm Cases : 936 K 
Recoverd Cases : 592 K 
Death Cases : 24309 `})
    });
  }
  render() {
    return <div style={{ backgroundColor: "lightblue" }} ref="canvas"></div>;
  }
}

export default worldMap;
