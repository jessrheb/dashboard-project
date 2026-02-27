import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexStates,
  ApexStroke,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';

import { Data } from '../../data';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  fill: ApexFill;
  stroke: ApexStroke;
  states: ApexStates;
};

@Component({
  selector: 'app-donut-chart',
  standalone: false,
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.css',
})
export class DonutChart {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor(private readonly data: Data) {
    this.chartOptions = {
      series: Object.values(this.data.trafficSource),
      chart: {
        height: '289px',
        type: 'donut',
        width: '100%',
      },
      labels: Object.keys(this.data.trafficSource).map((label) =>
        label.replace(/^./, (char) => char.toUpperCase()),
      ),
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        fillSeriesColor: false,
      },
      fill: {
        colors: [
          function ({ value }: any) {
            if (value < 20) {
              return 'rgb(21, 183, 159)';
            } else if (value >= 20 && value < 60) {
              return 'rgb(251, 156, 12)';
            } else {
              return 'rgb(99, 91, 255)';
            }
          },
        ],
      },
      stroke: {
        width: 0,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
    };
  }
}
