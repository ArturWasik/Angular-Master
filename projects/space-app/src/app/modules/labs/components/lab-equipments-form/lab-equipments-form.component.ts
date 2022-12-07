import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EquipmentTypes } from 'space-api/types';
import { LabForm } from '../../services/lab-form/lab-form.types';


@Component({
  selector: 'app-lab-equipments-form',
  templateUrl: './lab-equipments-form.component.html',
  styleUrls: ['./lab-equipments-form.component.css']
})
export class LabEquipmentsFormComponent implements OnInit {
  @Input() formArray!: LabForm['equipments'];
  @Output() equipmentAdd = new EventEmitter<EquipmentTypes>();
  @Output() equipmentRemove = new EventEmitter<number>();
  EquipmentTypes = EquipmentTypes;
  selectedEquipmentType = new FormControl(EquipmentTypes.Computer, {nonNullable: true});

  constructor() { }

  ngOnInit(): void {
  }

  addEquipment(): void {
    this.equipmentAdd.emit(this.selectedEquipmentType.value);
  }

  removeEquipment(index: number): void {
    this.equipmentRemove.emit(index);
  }
}
