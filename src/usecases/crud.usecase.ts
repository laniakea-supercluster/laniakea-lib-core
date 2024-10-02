/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { ViewUseCase } from './view.usecase';

export interface CrudUseCase<D, T> extends ViewUseCase<D, T> {
  registerNew(domain: D): Promise<D>;

  updateOne(id: T, domain: D): Promise<D | null>;

  removeOne(id: T): void;
}

export const CrudUseCase = Symbol('CrudUseCase');
