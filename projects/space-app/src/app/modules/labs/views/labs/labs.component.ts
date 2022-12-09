import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LabsService } from 'space-api/services';
import { Lab } from 'space-api/types';
import { loadLabs } from '../../actions/labs.actions';
import { selectLabsAll } from '../../selectors/labs.selectors';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  labs = this.store.select(selectLabsAll);

  constructor(private labService: LabsService,
              private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadLabs());
  }

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
