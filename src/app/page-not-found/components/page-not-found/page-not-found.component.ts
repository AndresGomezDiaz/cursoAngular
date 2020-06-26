import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  img: string = 'assets/images/404_page_not_found.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
