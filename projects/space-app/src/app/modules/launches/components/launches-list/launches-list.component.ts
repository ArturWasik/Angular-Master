import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Launch } from 'space-api/types/launch';
import { LaunchDetailsUpdate } from 'space-api/types/launch-details-update';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent {
  @Input() launches!: Launch[];

  @Output() launchDetailsUpdate = new EventEmitter<LaunchDetailsUpdate>();

  updateDetails(launch: Launch, $event: string): void {
    this.launchDetailsUpdate.emit({id: launch.id, details: $event});
  }
}
