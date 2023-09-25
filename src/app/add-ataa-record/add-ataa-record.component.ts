import { Component } from '@angular/core';
import {GetAtaaRecordsServiceService} from "../service/get-ataa-records-service.service";


@Component({
  selector: 'app-add-ataa-record',
  templateUrl: './add-ataa-record.component.html',
  styleUrls: ['./add-ataa-record.component.css']
})
export class AddAtaaRecordComponent {

  //AtaaRecord Object
  AtaaRecord = {aircraftOwner:'', operation:'', aircraftType:'', runway:'', approach:'', departure:'', count:'', date:''};

  constructor(private getAtaaRecordsService: GetAtaaRecordsServiceService) {}

  addRecord(){
    this.getAtaaRecordsService.addRecords(this.AtaaRecord).subscribe(()=>{})
  }

}
