import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EquipmentTypes } from 'space-api/types';

export interface LabDetailsForm {
  name: FormControl<string>;
  moonId: FormControl<number | null>;
  autonomous: FormControl<boolean>;
  enableTags: FormControl<boolean>;
}

export interface LabEquipmentForm {
  [s: string]: FormControl<any>;
  name: FormControl<string>;
  tag: FormControl<string>;
  type: FormControl<EquipmentTypes>;
}

export interface LabForm {
  id: FormControl<number | null>,
  details: FormGroup<LabDetailsForm>
  equipments: FormArray<FormGroup<LabEquipmentForm>>
}
