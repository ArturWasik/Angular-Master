// tslint:disable:component-selector
import { Component, Input } from '@angular/core';
import { Lab } from 'space-api/types';

@Component({
  selector: 'tbody[appLabsListItem]',
  templateUrl: './labs-list-item.component.html',
  styleUrls: ['./labs-list-item.component.css']
})
export class LabsListItemComponent {
  @Input() lab!: Lab;
}
