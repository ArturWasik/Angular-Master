import { Application, Request, Response } from 'express';

export interface CustomRoute {
  path: string;
  method: keyof Pick<Application, 'get' | 'post' | 'put' | 'delete'>;
  handler: (req: Request, res: Response) => void;
}
