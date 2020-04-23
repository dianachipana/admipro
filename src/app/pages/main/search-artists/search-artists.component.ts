import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styles: []
})
export class SearchArtistsComponent implements OnInit {
  cards=[1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
