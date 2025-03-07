import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-options-datatable',
  imports: [DataTablesModule],
  templateUrl: './options-datatable.component.html',
  styleUrl: './options-datatable.component.css'
})
export class OptionsDatatableComponent implements OnInit {
  dtOptions: Config = {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
  }
}
