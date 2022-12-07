export interface AppConfig {
  version: string;
  features: {
    start: boolean;
    launches: boolean;
    labs: boolean;
    martianCalendar: boolean;
  };
}
