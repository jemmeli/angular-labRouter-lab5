import { Subscription } from 'rxjs/Subscription';
import { Component  } from '@angular/core';
 
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl:  '../app/album/album-detail.component.html'
})
export class AlbumDetailComponent  {

  album;
 

  constructor( private albumService: AlbumService) {
            this.album = this.albumService.getAlbum("72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3");
  }

   

}
