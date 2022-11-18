import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IDescripcion } from '../interface/descripcion.interface';
import { Factura } from './envoice.entity';

@Entity({ name: 'detail' })
@Index('INDEX UNICO', ['articulo', 'idFactura'], { unique: true })
export class detail {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' })
  precio: string;
  @Column({ type: 'text' })
  articulo: string;
  @Column({ type: 'text' })
  cantidad: string;
  @Column({ type: 'text' })
  idFactura: string;

  @ManyToOne(() => Factura, (factura) => factura.detalle, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'idFactura', referencedColumnName: 'id' }])
  envoice: Factura;
  constructor(data?: IDescripcion) {
    if (data?.articulo) {
      this.articulo = data.articulo;
    }
    if (data?.cantidad) {
      this.cantidad = data.cantidad;
    }
    if (data?.precio) {
      this.precio = data.precio;
    }
    if (data?.id) {
      this.id = data.id;
    }
    if (data?.idFactura) {
      this.idFactura = data.idFactura;
    }
  }
}
