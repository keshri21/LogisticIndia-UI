import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

import { DODetails } from '../../model/do-details.model'
@Component({
  selector: 'app-do-create',
  templateUrl: './do-create.component.html',
  styleUrls: ['./do-create.component.css']
})
export class DoCreateComponent implements OnInit {
  sizes: [string];
  doDetails: DODetails;
  constructor() { }

  ngOnInit() {
    this.doDetails = new DODetails(),
      this.sizes = ["Small", "Big", "medium"]
  }

  doCreateForm = new FormGroup({
    bspDoNo: new FormControl(''),
    areaDoNo: new FormControl(''),
    auctionNo: new FormControl(''),
    quantity: new FormControl(''),
    doDate: new FormControl(''),
    receivedDate: new FormControl(''),
    dueDate: new FormControl(''),
    size: new FormControl(''),
    party: new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      destinations: new FormControl(''),
      freightRanges: new FormControl(''),

    }),
    destinations: new FormControl(''),
    destinationParty: new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      destinations: new FormControl(''),
      freightRanges: new FormControl('')
    }),
    freight: new FormGroup({
      min: new FormControl(''),
      max: new FormControl('')
    }),
    permissionNo: new FormControl(''),
    area: new FormControl(''),
    collary: new FormControl(''),
    grade: new FormControl(''),
    by: new FormControl(''),
    builtyCompany: new FormControl(''),
    transporter: new FormControl(''),
    emd: new FormControl(''),
    doAmt: new FormControl(''),
    doAmtpmt: new FormControl(''),
    doRate: new FormControl(''),
    doRateTcs: new FormControl(''),
    withinOutSide: new FormControl(''),
    disp: new FormControl(''),
    liftedQuantity: new FormControl(''),
    quantityDeduction: new FormControl(''),
    lepseQuantity: new FormControl(''),
    doStatus: new FormControl(''),
    refundAmt: new FormControl(''),
    refundDate: new FormControl(''),
    emdAmt: new FormControl(''),
    totalRefundAmt: new FormControl(''),
    website: new FormControl(''),
    finishDate: new FormControl(''),
    remarks: new FormControl(''),
    inAdvanceLimit: new FormControl(''),
    freightToBePaidBy: new FormControl('')
  })
}
