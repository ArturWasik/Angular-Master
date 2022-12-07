import { AppConfig } from '../types';

export const mockedAppConfig: AppConfig = {
  version: `build ${new Date().toISOString()}`,
  features: {
    start: true,
    launches: true,
    labs: true,
    martianCalendar: true
  }
};
