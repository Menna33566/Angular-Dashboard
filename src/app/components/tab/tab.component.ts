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
    Chart.register(...registerables); 
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  
    if (this.activeTab === 'graph') {
      this.cdRef.detectChanges();
      
      setTimeout(() => {
        this.initializeChart();  
      }, 0);
    } else if (this.chart) {
      this.chart.destroy(); 
      this.chart = undefined;
    }
  }
  
  cards = [
    {
      stationName: 'STATION NAME 1',
      dummy: 'DUMMY',
      totalSales: '62,721 m³',
      totalValue: '550 EGP',
      totalTransactionCount: '5161',
      compressionState: 'Compression',
      maxTransactionPerHour: '20',
      maxTransactionDateTime: '8-1-2021 | 10:16 PM',
    },
    {
      stationName: 'STATION NAME 2',
      dummy: 'DUMMY',
      totalSales: '45,000 m³',
      totalValue: '300 EGP',
      totalTransactionCount: '4000',
      compressionState: 'Compression',
      maxTransactionPerHour: '15',
      maxTransactionDateTime: '7-1-2021 | 09:00 PM',
    },
    {
      stationName: 'STATION NAME 3',
      dummy: 'DUMMY',
      totalSales: '50,000 m³',
      totalValue: '400 EGP',
      totalTransactionCount: '4500',
      compressionState: 'Compression',
      maxTransactionPerHour: '18',
      maxTransactionDateTime: '6-1-2021 | 11:30 PM',
    },
    {
      stationName: 'STATION NAME 4',
      dummy: 'DUMMY',
      totalSales: '70,000 m³',
      totalValue: '600 EGP',
      totalTransactionCount: '6000',
      compressionState: 'Compression',
      maxTransactionPerHour: '25',
      maxTransactionDateTime: '5-1-2021 | 08:45 PM',
    }
  ];





  initializeChart() {
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
        aspectRatio: 4,
        responsive: true,
        plugins: {
          legend: {
            display: false 
          }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 100,
                max: 300,
                ticks: {
                  stepSize: 50
                }
            },
            x: {
              grid: {
                display: false 
              },
              beginAtZero: false,
                ticks: {
                    font: {
                        size: 8
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
        this.initializeChart();  
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
      this.chart.destroy();
    }
  }
}