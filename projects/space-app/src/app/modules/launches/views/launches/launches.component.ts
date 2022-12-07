import { Component, OnInit } from '@angular/core';
import { LaunchesQueryParams } from 'space-api/types';
import { LaunchDetailsUpdate } from 'space-api/types/launch-details-update';
import { LaunchesStateService } from '../launches-state.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [LaunchesStateService]
})
export class LaunchesComponent implements OnInit {
  launches = this.launchesState.launches
  queryParams = this.launchesState.queryParams;

  constructor(private launchesState: LaunchesStateService) { }

  ngOnInit(): void {
  }

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesState.updateLaunchDetails(detailsUpdate);
  }

  searchLaunches(params: LaunchesQueryParams): void {
    this.launchesState.searchLaunches(params);
  }
}
