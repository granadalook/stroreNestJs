import { IDescripcion } from './descripcion.interface';

export interface IFactura {
  id: string;
  cliente: string;
  FechaCreacion: Date;
  descripcion: IDescripcion[];
}
