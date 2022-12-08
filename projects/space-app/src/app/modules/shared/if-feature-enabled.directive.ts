import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppConfig } from 'space-api/types';
import { APP_CONFIG } from '../../app-config-token';

@Directive({
  selector: '[appIfFeatureEnabled]'
})
export class IfFeatureEnabledDirective {
  private hasView = false;

  @Input('appIfFeatureEnabled') set featureName(value: keyof AppConfig['features']) {
    if (this.appConfig.features[value] && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              @Inject(APP_CONFIG) private appConfig: AppConfig) { }

}
