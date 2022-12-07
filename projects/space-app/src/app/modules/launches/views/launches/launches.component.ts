import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'space-api/services';
import { LaunchDetailsUpdate } from 'space-api/types/launch-details-update';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launches = this.launchesService.getLaunches();

  constructor(private launchesService: LaunchesService) { }

  ngOnInit(): void {
  }

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesService.updateDetails(detailsUpdate).subscribe(() => {
        this.launches = this.launchesService.getLaunches();
    });
  }
}
