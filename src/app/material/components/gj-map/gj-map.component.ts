import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';

declare const $: any;
@Component({
  selector: 'app-gj-map',
  templateUrl: './gj-map.component.html',
  styleUrls: ['./gj-map.component.css']
})
export class GJMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const svgContainer = $('#svg');
    const width = svgContainer.width();
    console.log('width-svg' + width);
    const height = svgContainer.height();
    const aspect = width / height;
    const container = svgContainer.parent();
    console.log(container);
    const targetWidth = container.width();
    const svg = d3.select('#svg');
    svg.attr('width', targetWidth);
    svg.attr('height', Math.round(targetWidth / aspect));
    const g = svg.append('g');
    const file = '/assets/Gujarat.json';
    console.log(file);
    d3.json(file).then( (topology: any) => {
      const topology1 = topojson.feature(topology, topology.objects.districts);
      console.log(topology1);
      const projection = d3.geoMercator().fitSize([width, height], topology1);
      const path = d3.geoPath().projection(projection);
      // console.log(
      //   ...topojson.feature(topology, topology.objects.districts).features
      // );
      g.selectAll('path')
      .data(topojson.feature(topology, topology.objects.districts).features)
      .join((enter): any => {
        const sel = enter
          .append('path')
          .attr('d', path)
          .attr('id', (d: any, i): any => {
            const id = d.properties.district.split(' ').join('');
            console.log(id);
            return id;
          })
          .attr('stroke-opacity', 1)
          .attr('fill', '#808080') // In-map
          .attr('stroke', '#ffff')
          .attr('stroke-width', 0)
          .style('cursor', 'pointer')
          .on('mouseenter', (d) => {
            console.log(d);
            console.log(d.srcElement.id);
            // const id = d.properties.district.split(" ").join("");
            const id = d.srcElement.id;
            console.log(id);
            // d3.select();
            d3.select('#' + id)
              .attr('stroke-width', 2)
              .attr('stroke', '#ffff'); // outline
            d3.select('#' + id).attr('fill', 'yellow');
            console.log('#' + id);
          })
          .on('mouseleave', (d) => {
            console.log(d);
            const id = d.srcElement.id;
            d3.select('#' + id)
              .attr('stroke-width', 0)
              .attr('stroke', '#fffff');
            d3.select('#' + id).attr('fill', '#808080');
          })
          .on('touchstart', (d) => {})
          .on('click', (d, i) => {
            console.log(d);
          });
        sel.append('title').text((d: any, i) => {
          return d.properties.district;
        })
        .transition()
        .duration(1000)
        .style('background-color', 'purple');
      });
      g.selectAll('#labels')
      .data(topojson.feature(topology, topology.objects.districts).features)
      .enter()
      .append('text')
      .attr('class', 'labels')
      .attr('x', (d: any) => {
          return path.centroid(d)[0];
      })
      .attr('y', (d: any) => {
          return path.centroid(d)[1];
      })
      .text((d: any) => {
        console.log('label' + d.properties.district);
        return d.properties.district;
      })
      .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'central')
        .style('font-size', 8)
        .style('fill', 'black');
  });
}
}
