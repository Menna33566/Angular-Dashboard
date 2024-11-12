import { CommonModule, NgIf } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { ChangeDetectorRef } from '@angular/core';

Chart.register(... registerables)

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent implements OnInit {
  activeTab: string = 'graph'; // Default tab
  chart: Chart | undefined;
  
  constructor(private cdRef: ChangeDetectorRef) {
    Chart.register(...registerables); // Register all Chart.js components
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  
    // Only initialize the chart if the "Graph" tab is active
    if (this.activeTab === 'graph') {
      // Use ChangeDetectorRef to ensure that the tab content is rendered
      this.cdRef.detectChanges();
      
      setTimeout(() => {
        this.initializeChart();  
      }, 0);
    } else if (this.chart) {
      this.chart.destroy(); // Destroy chart when switching to another tab
      this.chart = undefined;
    }
  }
  
  initializeChart() {
    // Destroy previous chart instance if it exists
    if (this.chart) {
      this.chart.destroy();
    }
  
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: [
          'Station Name Dummy 1', 
          'Station Name Dummy 1', 
          'Station Name Dummy 1', 
          'Station Name Dummy 1', 
          'Station Name Dummy 1'
        ],
        datasets: [
          {
            label: 'Sales',
            data: [255, 140, 200, 240, 130],
            backgroundColor: '#FF7F5C',
            maxBarThickness: 11,
            borderWidth:1,
            
          }
        ]
      },
      options: {
        aspectRatio: 3,
        responsive: true,
        plugins: {
          legend: {
            display: false // Disable the legend
          }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 100,
                max: 300,
                ticks: {
                  stepSize: 50
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 6
                    }
                }
            }
        }
    }
};
  
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, config);
    }
  }
  
  ngOnInit(): void {
    if (this.activeTab === 'graph') {
      setTimeout(() => {
        this.initializeChart();  // Ensure chart is initialized after DOM rendering
      }, 0);
    }
  }
  
  ngAfterViewInit(): void {
    if (this.activeTab === 'graph') {
      this.initializeChart();
    }
  }
  
  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy chart when component is destroyed
    }
  }
}