# Angular in Space
Aplikacja do szkolenia zaawansowanego.

* `npm ci`
* `npm run dev-api` - start dev-api na `http://localhost:4510`
* `npm run start` - start aplikacji na `http://localhost:4500`

## Dodawanie nowego typu wyposażenia

* utwórz typ Equipment* rozszerzający EquipmentCommon w `space-api/types/equipments/equipment-*.ts`, a następnie dodaj go do `space-api/types/equipments/equipment.ts`
* utwórz wpis EquipmentTypes w `space-api/types/equipments/equipment-types.ts`
* utwórz moduł Equipment*Module w `space-app/modules/equipments/` i wyeksportuj go w ramach EquipmentsModule
    * utwórz komponent do edycji
    * utwórz komponent do odczytu
    * zarejestruj equipment config
