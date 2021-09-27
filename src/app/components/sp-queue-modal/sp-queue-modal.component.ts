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

  public filterResultDataSet = new MatTableDataSource<SrDetails>([]);
  public mySecondTableData = new MatTableDataSource<SrDetails>([]);
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

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.filterResultDataSet.filter = filterValue;
  }

  ngAfterViewInit(): void {
    this.filterResultDataSet.paginator = this.paginator;
    this.filterResultDataSet.sort = this.sort;
    this.mySecondTableData.sort = this.secondTableSort;
  }
  getCategoryList(): any {
    this.apiCallService.getAll('http://localhost:5000/api/ServiceRequest/GetSRQueue/user')
      .subscribe(
        (data: SrDetails[]) => {
          //this.filterResultDataSet=data
          this.filterResultDataSet.data = data
        },
        error => {
          console.log(error);
        });
  }
  gridBack(): any {
    this.isLoading = true;
  }
  confirmSR(): any {
    this.isLoading = false;
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

}
