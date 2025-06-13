import { Request, Response, NextFunction } from "express";

/**
 * Envolve métodos async para que erros sejam capturados e enviados ao middleware de erro
 * 
 * @param fn função assíncrona do controller
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
