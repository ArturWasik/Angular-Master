import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LabForm } from '../../services/lab-form/lab-form.types';
import { formComponentMap } from '../form-component-map';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  @Input() formGroup!: LabForm['equipments']['controls'][number];
  @ViewChild('formComponentContainer', {read: ViewContainerRef, static: true}) formComponentContainer!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    const formComponent = formComponentMap.get(this.formGroup.getRawValue().type)!;
    const ref = this.formComponentContainer.createComponent(formComponent);
    ref.instance.formGroup = this.formGroup;
  }

}
