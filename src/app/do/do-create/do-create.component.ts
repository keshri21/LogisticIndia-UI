import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { DoService } from '../../services/do.service'
import { ToastrService } from 'ngx-toastr';

import { DODetails } from '../../model/do-details.model'
@Component({
  selector: 'app-do-create',
  templateUrl: './do-create.component.html',
  styleUrls: ['./do-create.component.css']
})
export class DoCreateComponent implements OnInit {
  sizes: [string];
  doDetails: DODetails;
  submitted: boolean;

  constructor(private doFormBuilder: FormBuilder, private doService: DoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.doDetails = new DODetails(),
      this.sizes = ["Small", "Big", "medium"]
  }

  doCreateForm = this.doFormBuilder.group({
    bspDoNo: [''],
    areaDoNo: ['', Validators.required],
    auctionNo: [''],
    quantity: [''],
    doDate: [''],
    receivedDate: [''],
    dueDate: [''],
    size: [''],
    // party: new FormGroup({
    //   id: [''],
    //   name: [''],
    //   destinations: [''],
    //   freightRanges: [''],

    // }),
    party: [''],
    destinations: [''],
    // destinationParty: new FormGroup({
    //   id: [''],
    //   name: [''],
    //   destinations: [''],
    //   freightRanges: ['']
    // }),
    destinationParty: [''],
    // freight: new FormGroup({
    //   min: [''],
    //   max: ['']
    // }),
    freight: [''],
    permissionNo: [''],
    area: [''],
    collary: [''],
    grade: [''],
    by: [''],
    builtyCompany: [''],
    transporter: [''],
    emd: [''],
    doAmt: [''],
    doAmtpmt: [''],
    doRate: [''],
    doRateTcs: [''],
    withinOutSide: [''],
    disp: [''],
    liftedQuantity: [''],
    quantityDeduction: [''],
    lepseQuantity: [''],
    doStatus: [''],
    refundAmt: [''],
    refundDate: [''],
    emdAmt: [''],
    totalRefundAmt: [''],
    website: [''],
    finishDate: [''],
    remarks: [''],
    inAdvanceLimit: [''],
    freightToBePaidBy: ['']
  })


  onSubmitDo() {
    this.submitted = true;

    if (this.doCreateForm.invalid) {
      this.toastr.error("Form is invalid");
      return;
    }

    this.createDo(this.doCreateForm.value)
  }

  createDo(doData) {
    this.doService.createDoService(doData).subscribe(
      (data) => {

      },
      (err) => {

      }
    )
  }

  get f() { return this.doCreateForm.controls; }
}
