import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IFactura } from '../dto/fatctura.dto';
import { detail } from './detailInvoice.entity';

@Entity({ name: 'factura' })
export class Factura {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  cliente: string;
  @CreateDateColumn({
    name: 'creacion',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  FechaCreacion: Date;

  @OneToMany(() => detail, (detalle) => detalle.envoice, {
    cascade: ['insert', 'update'],
  })
  detalle: detail[];

  constructor(data?: IFactura) {
    if (data?.cliente) {
      this.cliente = data.cliente;
    }
    if (data?.descripcion.length > 0) {
      this.detalle = [];
      data.descripcion.forEach((item) => {
        this.detalle.push(new detail(item));
      });
    }
    if (data?.id) {
      this.id = data.id;
    }
    if (data?.FechaCreacion) {
      this.FechaCreacion = data.FechaCreacion;
    }
  }
}
