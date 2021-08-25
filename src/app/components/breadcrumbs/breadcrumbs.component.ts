import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'i-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: { title: string, route: string }[];
  constructor() { } 

  ngOnInit(): void {

  }

}
