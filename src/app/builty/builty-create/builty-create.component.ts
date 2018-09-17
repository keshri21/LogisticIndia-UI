import { Component, OnInit } from '@angular/core' ;
import { DO } from '../../model/do.model' ;
import { Builty } from '../../model/builty.model' ;

import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-builty-create',
  templateUrl: './builty-create.component.html',
  styleUrls: ['./builty-create.component.css']
})
export class BuiltyCreateComponent implements OnInit {
  doList

  constructor() { }

  ngOnInit() {
    this.doList.push(new DO(133, 'bilaspur', 1200, 2345, 4563));
    this.doList.push(new DO(132, 'bhilai', 1000, 2345, 4563));
    this.doList.push(new DO(131, 'bijuri', 1100, 2345, 4563));
  }

  builtyForm = new FormGroup({

    builtyNo: new FormControl(''),
    doId: new FormControl(''),
    doDisplay: new FormControl(''),
    party: new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      destinations: new FormControl(''),
      freightRanges: new FormControl(''),

    }),
    builtynew: new FormControl(''),
    otBuiltyCompany: new FormControl(''),
    otBuiltyNumber: new FormControl(''),
    vehicleNo: new FormControl(''),
    quantity: new FormControl(''),
    inAdvance: new FormControl(''),
    outAdvance: new FormControl(''),
    diesel: new FormControl(''),
    pumpName: new FormControl(''),
    freight: new FormControl(''),
    totalAdvance: new FormControl(''),
    permitNo: new FormControl(''),
    permitBalance: new FormControl(''),
    permitEndnew: new FormControl(''),
    igpNo: new FormControl(''),
    invoiceNo: new FormControl(''),
    invoiceValue: new FormControl(''),
    driverName: new FormControl(''),
    driverMobile: new FormControl(''),
    grossWeight: new FormControl(''),
    tierWeight: new FormControl(''),
    doBalance: new FormControl(''),
    transporter: new FormGroup({
      userName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      active: new FormControl('')
    }),
    subTransporter: new FormGroup({
      userName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      active: new FormControl('')
    }),
    waybillNo: new FormControl(''),
    tpNo: new FormControl(''),
    receivednew: new FormControl(''),
    receivedQuantity: new FormControl(''),
    netWeight: new FormControl(''),
    refund: new FormControl(''),
    assesibleValue: new FormControl(''),
    freightToBePaidBy: new FormControl(''),
    inAdvanceLimit: new FormControl('')

  })

}
