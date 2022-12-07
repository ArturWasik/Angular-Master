import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabsService } from 'space-api/services';
import { EquipmentTypes, Lab } from 'space-api/types';
import { LabFormService } from '../../services/lab-form/lab-form.service';
import { LabForm } from '../../services/lab-form/lab-form.types';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  form!: FormGroup<LabForm>;
  step: Observable<keyof Lab> = this.route.queryParams
    .pipe(
      map(params => params['step'] ?? 'details')
    );

  constructor(private route: ActivatedRoute,
              private router: Router,
              private labService: LabsService,
              private formService: LabFormService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.form = this.formService.buildForm(data['lab']));
  }

  saveLab(): void {
    if (this.form.invalid) {
      alert('Popraw formularz!');
      return;
    }

    const lab = this.formService.formToLab(this.form);
    this.labService.saveLab(lab).subscribe({
      next: () => this.router.navigate(['../..'], {relativeTo: this.route}),
      error: () => alert('Zapis nie powiódł się!')
    });
  }

  addEquipment(type: EquipmentTypes): void {
    this.formService.addEquipment(this.form, type);
  }

  removeEquipment(index: number): void {
    this.formService.removeEquipment(this.form, index);
  }
}
