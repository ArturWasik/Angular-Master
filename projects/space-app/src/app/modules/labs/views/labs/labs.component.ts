import { Component } from '@angular/core';
import { LabsService } from 'space-api/services';
import { Lab } from 'space-api/types';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  labs = this.labService.getLabs();

  constructor(private labService: LabsService) { }

  removeLab(lab: Lab): void {
    if (!confirm('Czy na pewno?')) {
      return;
    }

    this.labService.removeLab(lab.id!)
      .subscribe({
        next: () => this.labs = this.labService.getLabs(),
        error: () => alert('Usuwanie nie powiodło się!')
      });
  }
}
