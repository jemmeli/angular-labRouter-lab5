"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(route, albumService) {
        this.route = route;
        this.albumService = albumService;
        //this.album = this.albumService.getAlbum("72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3");
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.params.subscribe(function (params) {
            _this.album = _this.albumService.getAlbum(params['albumId']);
        });
    };
    AlbumDetailComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    AlbumDetailComponent = __decorate([
        core_1.Component({
            selector: 'album-detail',
            templateUrl: '../app/album/album-detail.component.html'
        })
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
}());
exports.AlbumDetailComponent = AlbumDetailComponent;
//# sourceMappingURL=album-detail.component.js.map