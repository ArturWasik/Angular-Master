import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { of, merge } from 'rxjs';
import { Lab, LabDetails, Equipment, EquipmentTypes, EquipmentComputer, EquipmentDetector } from 'space-api/types';
import { LabForm } from './lab-form.types';

@Injectable({providedIn: 'root'})
export class LabFormService {
  readonly specificControls = {
    [EquipmentTypes.Computer]: (equipment: EquipmentComputer) => ({
      producer: new FormControl(equipment.producer),
      os: new FormControl(equipment.os),
    }),
    [EquipmentTypes.Detector]: (equipment: EquipmentDetector) => ({
      precision: new FormControl(equipment.precision),
      productionYear: new FormControl(equipment.productionYear),
    }),
    // add new types here
  };

  formToLab(form: FormGroup<LabForm>): Lab {
    return {equipments: [], ...form.value} as Lab;
  }

  addEquipment(form: FormGroup<LabForm>, type: EquipmentTypes): void {
    const formArray = form.controls.equipments;
    const formGroup = this.buildEquipment({type, name: '', tag: ''} as Equipment);
    const enableTags = form.controls.details.controls.enableTags.value;
    this.setEquipmentValidators(formGroup, enableTags);
    formArray.push(formGroup);
  }

  removeEquipment(form: FormGroup<LabForm>, index: number): void {
    form.controls.equipments.removeAt(index);
  }

  buildForm(lab: Lab): FormGroup<LabForm> {
    const form = new FormGroup({
      id: new FormControl(lab.id),
      details: this.buildDetails(lab.details),
      equipments: this.buildEquipmentList(lab.equipments)
    });
    this.observeEnableTags(form);
    this.observeAutonomous(form);
    return form;
  }

  private buildDetails(details: LabDetails): LabForm['details'] {
    return new FormGroup({
      name: new FormControl(details.name, {validators: [Validators.required], nonNullable: true}),
      moonId: new FormControl(details.moonId, {validators: [Validators.required]}),
      autonomous: new FormControl(details.autonomous, {nonNullable: true}),
      enableTags: new FormControl(details.enableTags, {nonNullable: true})
    });
  }

  private buildEquipmentList(equipments: Equipment[]): LabForm['equipments'] {
    return new FormArray(equipments.map(item => this.buildEquipment(item)));
  }

  private buildEquipment(equipment: Equipment): LabForm['equipments']['controls'][number] {
    const specificControls = equipment.type ? this.specificControls[equipment.type](equipment as any) : {};
    return new FormGroup({
      name: new FormControl(equipment.name, {validators: [Validators.required], nonNullable: true}),
      tag: new FormControl(equipment.tag, {validators: [Validators.required], nonNullable: true}),
      type: new FormControl(equipment.type, {validators: [Validators.required], nonNullable: true}),
      ...specificControls
    });
  }

  private observeAutonomous(form: FormGroup<LabForm>): void {
    const control = form.controls.details.controls.autonomous;
    merge(of(control.value), control.valueChanges)
      .subscribe((autonomous: boolean) => {
        if (autonomous) {
          form.controls.equipments.disable();
        } else {
          form.controls.equipments.enable();
        }
      });
  }

  private observeEnableTags(form: FormGroup<LabForm>): void {
    const control = form.controls.details.controls.enableTags;
    merge(of(control.value), control.valueChanges)
      .subscribe((enableTags: boolean) => {
        form.controls.equipments.controls.forEach(formGroup => this.setEquipmentValidators(formGroup, enableTags));
      });
  }

  private setEquipmentValidators(equipmentFormGroup: LabForm['equipments']['controls'][number], enableTags: boolean): void {
    const tagControl = equipmentFormGroup.controls.tag;
    if (enableTags) {
      tagControl.addValidators([Validators.required]);
    } else {
      tagControl.removeValidators([Validators.required]);
    }
    tagControl.updateValueAndValidity();
  }
}
