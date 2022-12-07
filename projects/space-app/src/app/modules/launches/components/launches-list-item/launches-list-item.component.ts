import { Component, Input } from '@angular/core';
import { Launch } from 'space-api/types/launch';

@Component({
  selector: 'tbody[appLaunchesListItem]',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.scss']
})
export class LaunchesListItemComponent {
  @Input() launch!: Launch;
}
