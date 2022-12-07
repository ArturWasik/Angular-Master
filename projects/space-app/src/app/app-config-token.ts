import { inject, InjectionToken } from "@angular/core";
import { AppConfigService } from "space-api/services";
import { AppConfig } from "space-api/types";

export const APP_CONFIG = new InjectionToken<AppConfig | null>('APP_CONFIG', {
  providedIn: 'root',
  factory: () => inject(AppConfigService).currentAppConfig
});
