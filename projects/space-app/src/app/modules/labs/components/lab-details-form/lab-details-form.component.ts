import { Component, Input, OnInit } from '@angular/core';
import { LabForm } from '../../services/lab-form/lab-form.types';

@Component({
  selector: 'app-lab-details-form',
  templateUrl: './lab-details-form.component.html',
  styleUrls: ['./lab-details-form.component.css']
})
export class LabDetailsFormComponent implements OnInit {
  @Input() formGroup!: LabForm['details'];

  constructor() { }

  ngOnInit(): void {
  }

}
