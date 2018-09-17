import { Component, OnInit } from '@angular/core';

export interface Builtys {
  builtyNo: number;
  receivedDate: Date;
  receivedQuantity: number;
}


@Component({
  selector: 'app-builty-receipt',
  templateUrl: './builty-receipt.component.html',
  styleUrls: ['./builty-receipt.component.css']
})
export class BuiltyReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  builtyListProperties:string[] = [
    "Builty No",
    "Received Date",
    "Received Quantity"
  ]

  builtyList: Builtys[] = [
    { builtyNo: 1234, receivedDate: new Date("1968-11-16T00:00:00"), receivedQuantity: 100 },
    { builtyNo: 1235, receivedDate: new Date("1968-11-16T00:00:00"), receivedQuantity: 100 }
  ]
}
