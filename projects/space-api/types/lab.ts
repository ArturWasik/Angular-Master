import { LabDetails } from './lab-details';
import { Equipment } from './equipments';

export interface Lab {
  id: number | null;
  details: LabDetails;
  equipments: Equipment[];
}
