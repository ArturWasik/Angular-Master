import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest, map, Observable, of, shareReplay, startWith } from 'rxjs';
import { MoonsService } from 'space-api/services';
import { Moon } from 'space-api/types';

@Component({
  selector: 'app-lab-moon-id-selector',
  templateUrl: './lab-moon-id-selector.component.html',
  styleUrls: ['./lab-moon-id-selector.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: LabMoonIdSelectorComponent, multi: true}
  ]
})
export class LabMoonIdSelectorComponent implements ControlValueAccessor, OnInit {
  // kontrolka do wyboru planety
  planetControl = new FormControl();

  // kontrolka do wyboru księżyca
  moonControl = new FormControl();

  // kolekcja wszystkich dostępnych księżyców
  moons: Observable<Moon[]> = this.moonsService.getMoons().pipe(
    startWith([]),
    shareReplay(1)
  );

  // kolekcja wszystkich dostępnych planet
  planetOptions: Observable<string[]> = this.moons.pipe(
    map(moons => Array.from(new Set(moons.map(({planet}) => planet))))
  )

  // kolekcja księżyców dla aktualnie wybranej planety
  moonOptions: Observable<Moon[]> = combineLatest([
    this.moons,
    this.planetControl.valueChanges.pipe(startWith(this.planetControl.value))
  ]).pipe(
    map(([moons, planet]) => moons.filter(moon => moon.planet === planet))
  )

  // property na funkcje onChange i onTouch
  onChange = (value: number | null) => {};
  onTouch = () => {};

  constructor(private moonsService: MoonsService) {

    // ustawianie odpowiedniej planety + emitowanie nowego moon id
    combineLatest([this.moons, this.moonControl.valueChanges]).subscribe(([moons, moonId]) => {
      const planet = moons.find(moon => moon.id === moonId)?.planet ?? null;
      this.planetControl.setValue(planet);
      this.onChange(moonId);
    });
  }

  ngOnInit(): void {
        // czyszczenie moon id przy zmianie planety
        this.planetControl.valueChanges.subscribe(() => {
          this.onChange(null);
        });
  }

  // rejestracja funkcji onChange
  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  // rejestracja funkcji onTouch
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  // reagowanie na zmianę wartości kontrolki z zewnątrz
  writeValue(moonId: number): void {
    this.moonControl.setValue(moonId);
  }

  // zmiana dostępności kontrolek
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.disableControls() : this.enableControls();
  }

  private disableControls(): void {
    this.moonControl.disable();
    this.planetControl.disable();
  }

  private enableControls(): void {
    this.moonControl.enable();
    this.planetControl.enable();
  }
}
