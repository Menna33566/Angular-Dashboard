import { Component } from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { RighSidebarComponent } from "../right-sidebar/righ-sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabComponent, RighSidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
