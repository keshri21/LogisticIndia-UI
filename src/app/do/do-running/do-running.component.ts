import { Component, OnInit, Output } from '@angular/core';

export interface RunningDo {
  doId: number;
  collaryName: string;
  quantity: number;
  areaDoNo: number;
  bspDoNo: number;
}


@Component({
  selector: 'app-do-running',
  templateUrl: './do-running.component.html',
  styleUrls: ['./do-running.component.css']
})

export class DoRunningComponent implements OnInit {

  selectAll: boolean = false;
  isrunningDoTablevisible: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  activeDoProperties: Array<any> =
  [
    'doId',
    'collaryName',
    'quantity',
    'areaDoNo',
    'bspDoNo'
  ];

  activeDoList: RunningDo[] = [
    { doId: 1, collaryName: 'bijuri', quantity: 100, areaDoNo: 1234, bspDoNo: 37272 },
    { doId: 2, collaryName: 'kotma', quantity: 300, areaDoNo: 2334, bspDoNo: 37622 },
    { doId: 3, collaryName: 'beohari', quantity: 400, areaDoNo: 3262, bspDoNo: 374733 },];

  // onSelectAll(){
  //   this.selectAll = !this.selectAll;
  //   this.activeDoList.forEach(activeDo => {
  //       activeDo.selected = !activeDo.selected;
  //   });
  // }

  // onProceed(){
  //   this.activeDoList.forEach(activeDo => {
  //       console.log(activeDo.doDisplay + " " + activeDo.selected);
  //   });
  // }
}
