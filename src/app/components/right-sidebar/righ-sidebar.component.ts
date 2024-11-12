import { NgFor, CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-righ-sidebar',
  standalone: true,
  imports: [NgFor ,CommonModule],
  templateUrl: './righ-sidebar.component.html',
  styleUrl: './righ-sidebar.component.css'
})
export class RighSidebarComponent  implements AfterViewInit {

  list = [
    { stationName: 'Station 1', stationValue: '62,721', progress: 45 },
    { stationName: 'Station 2', stationValue: '50,000', progress: 60 },
    { stationName: 'Station 3', stationValue: '35,500', progress: 30 }
  ];  
  ngAfterViewInit() {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [
          {
            label: '',
            data: [65, 59, 90, 81, 56, 55, 40, 38, 70, 50, 60, 80],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            
          },
          {
            label: '',
            data: [28, 48, 40, 19, 96, 27, 100, 50, 45, 60, 55, 70],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        elements: {
          line: {
              tension: 0.4 // نفس الخاصية يمكن تطبيقها هنا أيضًا
          }
      },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Disable the legend
          }}}
    });
  }
}
