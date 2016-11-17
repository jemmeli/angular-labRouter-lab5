import { Subscription } from 'rxjs/Subscription';
import { Component} from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
   templateUrl:  '../app/artist/artist-detail.component.html'
})
export class ArtistDetailComponent {

  artist;
  paramsSubscription: Subscription;

  constructor(private artistService: ArtistService) { 
    this.artist = this.artistService.getArtist("630662ea-1c7d-4208-99fd-ba3afec20f0c");
}



}
