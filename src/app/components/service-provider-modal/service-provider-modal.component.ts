import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-provider-modal',
  templateUrl: './service-provider-modal.component.html',
  styleUrls: ['./service-provider-modal.component.css']
})
export class ServiceProviderModalComponent implements OnInit {

  showMap = false;
  btnText = "Load Map";
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  categories: any[] = [
    {name: 'Electronics'},
    {name: 'Electricals'},
    {name: 'Plumbing'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  showSPMap()
  {
    this.showMap = !this.showMap;
    this.btnText = !this.showMap ? "Load Map" : "Hide Map";
  }
}
