import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabEquipmentForm } from '../../services/lab-form/lab-form.types';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent {
  @Input() formGroup!: FormGroup<LabEquipmentForm>;
}
