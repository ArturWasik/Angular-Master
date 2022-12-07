import { Lab, EquipmentTypes } from '../types';

export const mockedLabs: Lab[] = [
  {
    id: 1,
    details: {
      name: 'YaoNet Lab',
      autonomous: false,
      enableTags: true,
      moonId: 20
    },
    equipments: [
      {name: 'Zenbook', tag: 'ZEN321', type: EquipmentTypes.Computer, producer: 'Asus', os: 'Windows'},
      {name: 'Detektor promieniowania', tag: 'PROM567', type: EquipmentTypes.Detector, precision: 0.755, productionYear: 2018}
    ]
  },
  {
    id: 2,
    details: {
      name: 'SpaceX Lab',
      autonomous: false,
      enableTags: false,
      moonId: 1
    },
    equipments: [
      {name: 'Macbook Pro', tag: '', type: EquipmentTypes.Computer, producer: 'Apple', os: 'Macos'},
      {name: 'Detektor podczerwieni', tag: '', type: EquipmentTypes.Detector, precision: 0.12, productionYear: 2020}
    ]
  },
  {
    id: 3,
    details: {
      name: 'Blueorigin Lab',
      autonomous: true,
      enableTags: false,
      moonId: 15
    },
    equipments: [
    ]
  }
];
