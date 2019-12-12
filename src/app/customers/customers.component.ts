import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {ç

  title: string;
  people: ICustomer[];

  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "Customers";
    this.isVisible = true;
    this.people = [
      {
        id: 1, name: 'Tupu Tamadre', city: 'Nepecity', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)
      },
      {
        id: 2, name: 'Mia Khalifa', city: 'Los Angeles', orderTotal: 19.99, customerSince: new Date(2011, 2, 3)
      },
      {
        id: 3, name: 'Yoseba Jartanga', city: 'Hong Kong', orderTotal: 99.99, customerSince: new Date(2018, 5, 12)
      },
      {
        id: 4, name: 'Abradolf Linkler', city: 'Jamaica', orderTotal: 29.99, customerSince: new Date(2024, 9, 5)
      }
    ];
  }

  changeVisibility(){
    if(this.isVisible){
      this.isVisible = false;
    } else{
      this.isVisible = true;
    }
  }



}
