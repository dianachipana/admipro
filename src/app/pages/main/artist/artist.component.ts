import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  titulos:any[]=['Foto','Album','Canción','Vista Previa' ]
  music:any[]=[
    {imagen: 'assets/image/no-img.png',album: 'Album X',cancion: 'Canción X'} ,
    {imagen: 'assets/image/no-img.png',album: 'Album X',cancion: 'Canción X'}, 
    {imagen: 'assets/image/no-img.png',album: 'Album X',cancion: 'Canción X'} 
  ]
  constructor() { }

  ngOnInit() {
  }

}
