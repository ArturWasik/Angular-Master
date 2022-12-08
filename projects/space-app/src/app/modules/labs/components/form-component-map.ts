import { Type } from "@angular/core";
import { EquipmentTypes } from "space-api/types";
import { ComputerFormComponent } from "./computer-form/computer-form.component";
import { DetectorFormComponent } from "./detector-form/detector-form.component";
import { FormComponent } from "./form-component";

export const formComponentMap = new Map<EquipmentTypes, Type<FormComponent>>([
    [EquipmentTypes.Computer, ComputerFormComponent],
    [EquipmentTypes.Detector, DetectorFormComponent],
  ]);
