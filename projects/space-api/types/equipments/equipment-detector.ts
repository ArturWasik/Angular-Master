import { EquipmentTypes } from './equipment-types';
import { EquipmentCommon } from './equipment-common';

export interface EquipmentDetector extends EquipmentCommon {
  type: EquipmentTypes.Detector;
  precision: number;
  productionYear: number;
}
