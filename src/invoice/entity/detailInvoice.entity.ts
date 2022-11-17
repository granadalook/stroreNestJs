import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Factura } from './envoice.entity';

@Entity({ name: 'detail' })
export class detail {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' })
  precio: string;
  @Column({ type: 'text' })
  articulo: string;
  @Column({ type: 'text' })
  cantidad: string;
  @ManyToOne(() => Factura, (factura) => factura.detalles)
  idFactura: string;
}
