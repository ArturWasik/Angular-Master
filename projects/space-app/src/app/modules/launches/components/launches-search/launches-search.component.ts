import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LaunchesQueryParams } from 'space-api/types';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss']
})
export class LaunchesSearchComponent {

  @Input() set params(params: LaunchesQueryParams) {
    this.form.patchValue(params);
  }
  @Output() paramsChange = new EventEmitter<LaunchesQueryParams>();

  form = new FormGroup({
    sort: new FormControl(),
    order: new FormControl(),
    query: new FormControl(),
  });

  search(): void {
    this.paramsChange.emit(this.form.getRawValue());
  }
}
