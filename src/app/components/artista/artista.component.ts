import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService) {
    this.route.params.subscribe( params => {
      this.loading = true;
      // tslint:disable-next-line: no-string-literal
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  getArtista(id: string){
    this.spotify.getArtista(id)
                .subscribe(artista => {
                  console.log(artista);
                  this.artista = artista;
                  this.loading = false;
                });
  }
  // tslint:disable-next-line: typedef
  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
                .subscribe(topTracks => {
                  console.log(topTracks);
                  this.topTracks = topTracks;
                });
  }

}
