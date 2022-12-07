import { Launch } from './launch';

export interface LaunchesQueryParams {
  sort: keyof Launch;
  order: 'ASC' | 'DESC';
  query: string;
}
