import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customer/dto/customer.dto';

@Injectable()
export class CustomerService {
  customers = [
    { id: '1', nombre: 'juan', apellido: 'restrepo', telefono: '123456789' },
    { id: '2', nombre: 'lucas', apellido: 'garcia', telefono: '123456789' },
    { id: '3', nombre: 'luis', apellido: 'muriel', telefono: '123456789' },
    { id: '4', nombre: 'camila', apellido: 'garces', telefono: '123456789' },
    { id: '5', nombre: 'doris', apellido: 'ramirez', telefono: '123456789' },
  ];
  getAllCustomers() {
    return this.customers;
  }
  getCustomerById(id: string) {
    const customer = this.customers.find((customer) => customer.id === id);
    return customer;
  }

  createCustomer(customer: CreateCustomerDto) {
    this.customers.push(customer);
    return { message: 'CLIENTE CREADO EXITOSAMNETE', customer };
  }
  updateCustomer(id: string, changes: CreateCustomerDto) {
    const customer = this.getCustomerById(id);
    if (!customer) {
      return { message: 'CLIENTE NO EXISTE' };
    }
    customer.id = changes.id;
    customer.nombre = changes.nombre;
    customer.apellido = changes.apellido;
    customer.telefono = changes.telefono;
    return this.createCustomer(customer);
  }
  updateCustomerPatch(id: string, changes: CreateCustomerDto) {
    const customer = this.getCustomerById(id);
    if (!customer) {
      return { message: 'CLIENTE NO EXISTE' };
    }
    customer.id = changes.id;
    customer.nombre = changes.nombre;
    customer.apellido = changes.apellido;
    customer.telefono = changes.telefono;
    return this.createCustomer(customer);
  }

  deleteCustomer(id: string) {
    const customerDelete = this.customers.findIndex(
      (customer) => customer.id === id,
    );
    const eliminado = this.customers.splice(customerDelete, 1);
    return {
      message: `CUSTOMER
     ELIMINADO ${id} `,
      eliminado,
    };
  }
}
