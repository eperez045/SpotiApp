import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizier: DomSanitizer){}
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    const url: string = "https://open.spotify.com/embed/track/";
    return this.domSanitizier.bypassSecurityTrustResourceUrl(url + value);
  }

}
