import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { geoMercator, geoPath } from 'd3';
import * as t from 'topojson';
@Component({
  selector: 'app-d3-map',
  templateUrl: './d3-map.component.html',
  styleUrls: ['./d3-map.component.css']
})
export class D3MapComponent implements OnInit {
  constructor() {
    // console.log('geojson data' + this.mapData);
  }
    ngOnInit(): void {
    const width = 900;
    const height = 600;

    const projection = d3.geoMercator();
    const svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height);
    const path = d3.geoPath()
    .projection(projection);
    const g = svg.append('g');
    g.attr('class', 'map');
      // .scale(2200)
      // .translate([-1200, 1400])
      // .center([0, 0]);
    // const pathGenerator = geoPath().projection(projection);

    d3.json('assets/data/india1.json')
      .then(data => {
        // const cities = feature(data, data.objects[])
        console.log(data);
      });
    }

}
