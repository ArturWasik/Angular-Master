import { EquipmentTypes } from './equipment-types';
import { EquipmentCommon } from './equipment-common';

export interface EquipmentComputer extends EquipmentCommon {
  type: EquipmentTypes.Computer;
  os: string;
  producer: string;
}
