import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from '../../api-call.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sp-queue-modal',
  templateUrl: './sp-queue-modal.component.html',
  styleUrls: ['./sp-queue-modal.component.css']
})
export class SpQueueModalComponent implements OnInit, AfterViewInit {
  // public dataSource: any;    

  // public pageSize = 10;
  // public currentPage = 0;
  // public totalSize = 0;
  public filterResultDataSet = new MatTableDataSource<any>([]);
  public mySecondTableData = new MatTableDataSource<any>([]);
  public isLoading: boolean = true;
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  @ViewChild('secondTableSort') public secondTableSort: MatSort;
  searchedKeyword: string;
  //pageEvent: PageEvent; 
  text = '';

  constructor(private apiCallService: ApiCallService) { }

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
    //this.apiCallService.getAll('https://localhost:5001/api/ServiceRequest/GetSRQueue/user')
    this.apiCallService.getAll('http://localhost:5000/api/ServiceRequest/GetSRQueue/user')
      .subscribe(
        data => {
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
    // if (this.isLoading==="true") { this.isLoading = "false"; }
    // else { this.isLoading = "true"; }
    this.isLoading = false;
  }

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected == numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

}
