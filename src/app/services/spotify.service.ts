import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }


// tslint:disable-next-line: typedef
getQuery(query: string){
  const url = `https://api.spotify.com/v1/${ query }`;

  const headers = new HttpHeaders({
    Authorization: 'Bearer BQAVdQGqEZo3GAtLmUX-x8G4nmrry1mwnXbOYN32ONO4iJ8AmMSE3NJBCmyIStytLP0N6cZcmXYqZgRRy2w'
    });

  return this.http.get(url, {headers});
}

  // tslint:disable-next-line: typedef
getNewReleases(){

  return this.getQuery('browse/new-releases?country=us&limit=15')
    .pipe(map(data => {
      // tslint:disable-next-line: no-string-literal
      return data['albums'].items;
    }));
}

  // tslint:disable-next-line: typedef
getArtistas( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => {
      // tslint:disable-next-line: no-string-literal
      return data['artists'].items;
    }));
  }

  // tslint:disable-next-line: typedef
  getArtista( id: string){

    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => {
    //   // tslint:disable-next-line: no-string-literal
    //   return data['artists'].items;
    // }));
  }

  getTopTracks( id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => {
      // tslint:disable-next-line: no-string-literal
      return data['tracks'];
    }));
  }
}


