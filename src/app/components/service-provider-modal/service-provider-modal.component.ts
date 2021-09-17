import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-provider-modal',
  templateUrl: './service-provider-modal.component.html',
  styleUrls: ['./service-provider-modal.component.css']
})
export class ServiceProviderModalComponent implements OnInit {

  showMap = false;
  btnText = "Locate SP";
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  categories: any[] = [
    {name: 'Electronics'},
    {name: 'Electricals'},
    {name: 'Plumbing'},
  ];
  @Input() spName = ''; 
  @Input() spCategories: any[] = [{name: ''}];
  @Input() spAddress: string;
  @Input() spLatLong: string;
  @Input() spRatings: string;
  @Input() spVacinationStatus: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) { 
    this.spName = data.spName;
    this.spAddress = data.spLocation;
    this.spCategories[0].name = data.spCategories;
  }

  ngOnInit(): void {
  }

  showSPMap()
  {
    this.showMap = !this.showMap;
    this.btnText = !this.showMap ? "Locate SP" : "Hide Map";
  }
}
