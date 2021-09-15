import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Input, OnInit} from '@angular/core';

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
  @Input() spCategories: string[]
  @Input() spAddress: string;
  @Input() spLatLong: string;
  @Input() spRatings: string;
  @Input() spVacinationStatus: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showSPMap()
  {
    this.showMap = !this.showMap;
    this.btnText = !this.showMap ? "Locate SP" : "Hide Map";
  }
}
