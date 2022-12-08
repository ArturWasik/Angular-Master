import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfFeatureEnabledDirective } from './if-feature-enabled.directive';

@NgModule({
  declarations: [
    IfFeatureEnabledDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfFeatureEnabledDirective
  ]
})
export class SharedModule { }
