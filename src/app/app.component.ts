import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { OptionsDatatableComponent } from './options-datatable/options-datatable.component';

@Component({
  selector: 'app-root',
  imports: [BasicDatatableComponent, OptionsDatatableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Datatable_230028';
}
