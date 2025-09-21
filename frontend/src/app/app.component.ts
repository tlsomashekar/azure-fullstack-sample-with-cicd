import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  customers: any[] = [];
  newName = '';
  newEmail = '';

  constructor(private service: CustomerService) {
    this.loadCustomers();
  }

  loadCustomers() {
    this.service.getCustomers().subscribe(data => this.customers = data);
  }

  addCustomer() {
    const customer = { name: this.newName, email: this.newEmail };
    this.service.addCustomer(customer).subscribe(() => {
      this.loadCustomers();
      this.newName = '';
      this.newEmail = '';
    });
  }
}
