import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Launch } from 'space-api/types/launch';

@Component({
  selector: 'tbody[appLaunchesListItem]',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListItemComponent {
  @Input() launch!: Launch;

  ngOnInit(): void {
    console.log('LaunchListItem created');
  }
}
