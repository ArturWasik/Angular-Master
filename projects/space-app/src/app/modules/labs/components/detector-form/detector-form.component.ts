import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabEquipmentForm } from '../../services/lab-form/lab-form.types';

@Component({
  selector: 'app-detector-form',
  templateUrl: './detector-form.component.html',
  styleUrls: ['./detector-form.component.scss']
})
export class DetectorFormComponent {
  @Input() formGroup!: FormGroup<LabEquipmentForm>;
}
