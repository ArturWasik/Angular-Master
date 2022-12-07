export interface Launch {
  id: number;
  missionPatch: string | null;
  missionName: string;
  rocketName: string;
  success: boolean | null;
  launchDate: string;
  launchSiteName: string | null;
  details: string | null;
  links: {
    videoLink: string | null;
    presskitLink: string | null;
    articleLink: string | null;
    wikipediaLink: string | null;
  };
}
