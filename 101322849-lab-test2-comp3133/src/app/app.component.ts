import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MissionListComponent } from './mission-list/mission-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MissionListComponent, RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101322849-lab-test2-comp3133';
}
