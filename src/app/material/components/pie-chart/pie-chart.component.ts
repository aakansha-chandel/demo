import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('containerPieChart') element: ElementRef;

  private host: any;
  private svg: any;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;
  private pieData = [1, 2, 3, 4, 5]

  ngAfterViewInit() {
      this.htmlElement = this.element.nativeElement;
      this.host = d3.select(this.htmlElement);
      this.setup();
      this.buildSVG();
      this.buildPie();
  }

  private setup(): void {
      this.width = 250;
      this.height = 250;
      this.radius = Math.min(this.width, this.height) / 2;
  }

  private buildSVG(): void {
      this.host.html('');
      this.svg = this.host.append('svg')
          .attr('viewBox', `0 0 ${this.width} ${this.height}`)
          .append('g')
          .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
  }

  private buildPie(): void {
      const pie = d3.pie();
      const arcSelection = this.svg.selectAll('.arc')
          .data(pie(this.pieData))
          .enter()
          .append('g')
          .attr('class', 'arc');

      // this.populatePie(arcSelection);
  }

  // private populatePie(arcSelection: d3.Selection<d3.layout.pie.Arc>): void {
  //     const innerRadius = this.radius - 50;
  //     const outerRadius = this.radius - 10;
  //     const pieColor = d3.scale.category20c();
  //     const arc = d3.svg.arc<d3.layout.pie.Arc>()
  //         .outerRadius(outerRadius);
  //     arcSelection.append('path')
  //         .attr('d', arc)
  //         .attr('fill', (datum, index) => {
  //             return pieColor(`${index}`);
  //         });

  //     arcSelection.append('text')
  //         .attr('transform', (datum: any) => {
  //             datum.innerRadius = 0;
  //             datum.outerRadius = outerRadius;
  //             return 'translate(' + arc.centroid(datum) + ')';
  //         })
  //         .text((datum, index) => this.pieData[index])
  //         .style('text-anchor', 'middle');
  // }

}
