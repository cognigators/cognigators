import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from '../../api-call.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ServiceProviderModalComponent } from '../service-provider-modal/service-provider-modal.component';
import { SrDetails } from '../../components/sp-queue-modal/model/SRDetails'

@Component({
  selector: 'app-sp-queue-modal',
  templateUrl: './sp-queue-modal.component.html',
  styleUrls: ['./sp-queue-modal.component.css']
})
export class SpQueueModalComponent implements OnInit, AfterViewInit {
  selectAll: boolean = false;
  public filterResultDataSet = new MatTableDataSource<SrDetails>([]);
  public serviceRequestData = new MatTableDataSource<SrDetails>([]);
  public isLoading: boolean = true;
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  @ViewChild('secondTableSort') public secondTableSort: MatSort;
  searchedKeyword: string;
  //pageEvent: PageEvent; 
  text = '';

  constructor(private apiCallService: ApiCallService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategoryList();
    console.log(this.selectAll);

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.filterResultDataSet.filter = filterValue;
    this.serviceRequestData.filter = filterValue;
    
  }

  ngAfterViewInit(): void {
    this.filterResultDataSet.paginator = this.paginator;
    this.filterResultDataSet.sort = this.sort;
    this.serviceRequestData.paginator = this.paginator;
    this.serviceRequestData.sort = this.secondTableSort;
  }
  getCategoryList(): any {
    this.apiCallService.getAll('http://localhost:5000/api/ServiceRequest/GetSRQueue/user')
      .subscribe(
        (data: SrDetails[]) => {
          //this.filterResultDataSet=data
          this.filterResultDataSet.data = data;
          this.serviceRequestData.data = data
        },
        error => {
          console.log(error);
        });
  }
  gridBack(): any {
    this.isLoading = true;
  }
  confirmSR(): any {
   // this.isLoading = false;
  //  let filteredSR =  this.filterResultDataSet.data.filter(t=>t.select ===true);
  this.serviceRequestData.data=  this.filterResultDataSet.data.filter(t=>t.select ===true);
  if(this.serviceRequestData.data && this.serviceRequestData.data.length>0)
  {
    this.isLoading = false;
  }
  else{
    this.isLoading = true;
    alert('Please select atleast One Checkbox to Create the SR');
  }
    console.log(this.serviceRequestData.data);
    
  }

  openSPDialog(row): void
  {
    var rowData = row;
    this.dialog.open(ServiceProviderModalComponent, {
      data: {
                spName : row.sp_name,
                spLocation : row.sp_location,
                spCategories : row.s_category_name
            }
    });
  }
  updateCheck(){
    console.log(this.selectAll);
    if(this.selectAll === true){
      this.filterResultDataSet.data.map((item)=>{
        item.select=true;
      });

    }else {
      this.filterResultDataSet.data.map((item)=>{
        item.select=false;
      });
    }
  }
  createServiceRequest(){
    this.serviceRequestData.data
  }

}
