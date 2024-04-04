import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mission } from '../models/mission';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  selectedYear: string = '';
  missions: Mission[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    const apiUrl = 'https://api.spacexdata.com/v3/launches';
    this.http.get<any[]>(apiUrl).subscribe(missions => {
      this.missions = missions;
    });
  }
  showMissionDetails(mission: any): void {
    this.router.navigate(['/missiondetails'], { state: { missionDetails: mission } });
  }

  filterByYear() {
    if (this.selectedYear) {
      const url = `https://api.spacexdata.com/v3/launches?launch_year=${this.selectedYear}`;
      this.http.get<any[]>(url).subscribe(
        missions => {
          this.missions = missions;
        },
        error => {
          console.error('Error fetching missions:', error);
        }
      );
    }
  }
}