/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
export interface ViewUseCase<D, T> {
  retrieveAll(project?: D | {}): Promise<D[]>;

  retrieveOne(id: T, project?: D | {}): Promise<D | null>;
}

export const ViewUseCase = Symbol('ViewUseCase');
