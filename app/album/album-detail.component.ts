import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy  } from '@angular/core';
 //
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl:  '../app/album/album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit, OnDestroy  {

  album;
  paramsSubscription: Subscription;
 

  constructor( private route: ActivatedRoute, private albumService: AlbumService ) {
            //this.album = this.albumService.getAlbum("72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3");
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
        this.album = this.albumService.getAlbum(params['albumId']);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

   

}
