import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  constructor(private service: Service) {
    console.log(this.service.getData().subscribe());
  }
}
