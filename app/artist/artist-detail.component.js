"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ArtistDetailComponent = (function () {
    function ArtistDetailComponent(route, artistService) {
        this.route = route;
        this.artistService = artistService;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        var artistId = this.route.snapshot.params["artistId"];
        this.artist = this.artistService.getArtist(artistId);
    };
    ArtistDetailComponent = __decorate([
        core_1.Component({
            selector: 'artist-detail',
            templateUrl: '../app/artist/artist-detail.component.html'
        })
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
}());
exports.ArtistDetailComponent = ArtistDetailComponent;
//# sourceMappingURL=artist-detail.component.js.map