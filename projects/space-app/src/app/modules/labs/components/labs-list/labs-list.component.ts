import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lab } from 'space-api/types';

@Component({
  selector: 'app-labs-list',
  templateUrl: './labs-list.component.html',
  styleUrls: ['./labs-list.component.css']
})
export class LabsListComponent {
  @Output() labRemove = new EventEmitter<Lab>();
  @Input() labs!: Lab[];

  trackByFn(index: number, lab: Lab): number | null {
    return lab.id;
  }

  removeLab(lab: Lab): void {
    this.labRemove.emit(lab);
  }
}
