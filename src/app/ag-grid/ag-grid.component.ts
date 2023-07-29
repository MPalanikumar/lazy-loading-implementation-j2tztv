import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './ag-grid.component.html' 
})

export class AgGridComponent {
  public colDef: any[];
  public defaultSortingOrder: any[];
  constructor(private http: HttpClient){
    this.colDef = [{
      headerName: 'Name',
      field: 'athlete',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Age',
      field: 'age',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Country',
      field: 'country',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Gold',
      field: 'gold',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Silver',
      field: 'silver',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Bronze',
      field: 'bronze',
      width: 150,
      sortingOrder: ["asc", "desc"]
    },{
      headerName: 'Total',
      field: 'total',
      width: 150,
      sortingOrder: ["asc", "desc"]
    }];

    this.defaultSortingOrder = ["desc", "asc", null];
  }

  onGridReady(params) {
    this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json').subscribe((data: any[])=>{
        params.api.setRowData(data);
    })
  }
}