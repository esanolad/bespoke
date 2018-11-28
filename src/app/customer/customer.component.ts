import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  id:any;
  constructor(route:ActivatedRoute) {
    route.params.subscribe(params=>{this.id=params})
    console.log(this.id)
   }

  ngOnInit() {
    //console.log(this.id+1)
  }

}
