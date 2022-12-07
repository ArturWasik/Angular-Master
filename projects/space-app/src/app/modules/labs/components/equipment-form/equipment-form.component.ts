import { Component, Input, OnInit } from '@angular/core';
import { LabForm } from '../../services/lab-form/lab-form.types';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  @Input() formGroup!: LabForm['equipments']['controls'][number];

  constructor() { }

  ngOnInit(): void {
  }

}
