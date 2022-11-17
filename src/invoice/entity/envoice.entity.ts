import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

  @OneToMany(() => detail, (detalles) => detalles.idFactura, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  detalles: detail[];
}
