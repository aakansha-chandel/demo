import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {CommonData} from '../d3-data';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private widthPie = 750;
  private heightPie = 600;
  // for pie chart
  private radius = Math.min(this.widthPie, this.heightPie) / 2 - this.margin;
  private colors;

  constructor() { }

  ngOnInit(): void {
    this.svg = d3.select('div#bar')
    .transition()
    .duration(2000)
    .style('color', 'green');
    this.createSvgBar();
    this.drawBars(CommonData);
    this.svg = d3.select('div#pie')
    .transition()
    .duration(1500)
    .style('background-color', 'yellow');
    this.createSvgPie();
    this.createColors();
    this.drawChart();
    // Data from CSV file
    // d3.csv("/assets/d3Data.csv").then(data => this.drawBars(data));
    // Data from JSON API
    // d3.json('https://api.jsonbin.io/b/5eee6a5397cb753b4d149343').then(value => this.drawBars(value));
  }
  // For Bar-chart
  private createSvgBar(): void {
    this.svg = d3.select('div#bar')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 2))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
}
private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Framework))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append('g')
  .attr('transform', 'translate(0,' + this.height + ')')
  .call(d3.axisBottom(x))
  .selectAll('text')
  .attr('transform', 'translate(-10,0)rotate(-45)')
  .style('text-anchor', 'end');

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 200000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append('g')
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll('bars')
  .data(CommonData)
  .enter()
  .append('rect')
  .attr('x', d => x(d.Framework))
  .attr('y', d => y(d.Stars))
  .attr('width', x.bandwidth())
  .attr('fill', '#7133FF')
  .transition()
  .ease(d3.easeQuad)
  .duration(1000)
  .delay((d, i) => {
    return i * 50;
  })
  .attr('height', (d) => this.height - y(d.Stars))
  .attr('fill', 'green');
  // .style("background-color", "red");
}

// Pie Chart
private createSvgPie(): void {
  this.svg = d3.select('div#pie')
  .append('svg')
  .attr('width', this.widthPie)
  .attr('height', this.heightPie)
  .append('g')
  .attr(
    'transform',
    'translate(' + this.widthPie / 2 + ',' + this.heightPie / 2 + ')'
  );
}
private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(CommonData.map(d => d.Stars.toString()))
  .range(['#3358FF', '#338AFF', '#33A8FF', '#33BEFF', '#33E6FF']);
}
private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(CommonData))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr('stroke', '#121926')
  .style('stroke-width', '1px');

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(CommonData))
  .enter()
  .append('text')
  .text(d => d.data.Framework)
  .attr('transform', d => 'translate(' + labelLocation.centroid(d) + ')')
  .style('text-anchor', 'middle')
  .style('font-size', 15);
}

}
