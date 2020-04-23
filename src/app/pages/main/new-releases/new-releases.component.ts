import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styles: []
})
export class NewReleasesComponent implements OnInit {
 cards=[1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
