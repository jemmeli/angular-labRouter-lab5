"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LoginFormComponent = (function () {
    function LoginFormComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.user = '';
        this.password = '';
    }
    LoginFormComponent.prototype.login = function () {
        if (this.loginService.login(this.user, this.password)) {
            this.router.navigate(['/']);
        }
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            template: "\n    <h1>Login</h1>\n    <div>\n      <input type=\"text\" [(ngModel)]=\"user\" placeholder=\"User\">\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n      <button (click)=\"login()\" class=\"btn btn-primary\">Login</button>\n    </div>\n  "
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map