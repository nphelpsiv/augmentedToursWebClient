webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tours_tours_component__ = __webpack_require__("../../../../../src/app/tours/tours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exhibit_exhibit_component__ = __webpack_require__("../../../../../src/app/exhibit/exhibit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'tours', component: __WEBPACK_IMPORTED_MODULE_2__tours_tours_component__["a" /* ToursComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__exhibit_exhibit_component__["a" /* ExhibitComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 3em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/tours\">Tours</a>\n  </nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Augmented Tours';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tours_tours_component__ = __webpack_require__("../../../../../src/app/tours/tours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exhibit_exhibit_component__ = __webpack_require__("../../../../../src/app/exhibit/exhibit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tour_search_tour_search_component__ = __webpack_require__("../../../../../src/app/tour-search/tour-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__exhibit_edit_exhibit_edit_component__ = __webpack_require__("../../../../../src/app/exhibit-edit/exhibit-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tours_tours_component__["a" /* ToursComponent */],
                __WEBPACK_IMPORTED_MODULE_5__exhibit_exhibit_component__["a" /* ExhibitComponent */],
                __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tour_search_tour_search_component__["a" /* TourSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__exhibit_edit_exhibit_edit_component__["a" /* ExhibitEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                __WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__tour_service__["a" /* TourService */], __WEBPACK_IMPORTED_MODULE_7__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Tours</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let tour of tours\" class=\"col-1-4\"\n    routerLink = \"/detail/{{tour.id}}\">\n    <div class=\"module tour\">\n      <h4>{{tour.name}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-tour-search></app-tour-search>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(tourService) {
        this.tourService = tourService;
        this.tours = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTours();
    };
    DashboardComponent.prototype.getTours = function () {
        var _this = this;
        this.tourService.getTours()
            .subscribe(function (tours) { return _this.tours = tours.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exhibit-edit/exhibit-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n    display: inline-block;\n    width: 3em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n  input {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n  button {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exhibit-edit/exhibit-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2></h2><div *ngIf=\"exhibit\">\n  \n  <h2>{{ exhibit._name | uppercase }}</h2>\n  <div><span>id: </span>{{exhibit.id}}</div>\n  <div><span>AR Text: </span>{{exhibit._text}}</div>\n  <div>\n    <label>rename exhibit:\n      <input [(ngModel)]=\"exhibit._name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <div>\n    <label>Add/Edit AR Text :\n      <input [(ngModel)]=\"exhibit._text\" placeholder=\"ARText\"/>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/exhibit-edit/exhibit-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exhibit_exhibit__ = __webpack_require__("../../../../../src/app/exhibit/exhibit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExhibitEditComponent = (function () {
    function ExhibitEditComponent(tourService, route, location) {
        this.tourService = tourService;
        this.route = route;
        this.location = location;
    }
    ExhibitEditComponent.prototype.ngOnInit = function () {
        //this.getExhibits();
    };
    // getExhibits(): void {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.tourService.getExhibit(id).subscribe(exhibit => this.exhibit = exhibit);
    // }
    ExhibitEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__exhibit_exhibit__["a" /* Exhibit */])
    ], ExhibitEditComponent.prototype, "exhibit", void 0);
    ExhibitEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exhibit-edit',
            template: __webpack_require__("../../../../../src/app/exhibit-edit/exhibit-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exhibit-edit/exhibit-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tour_service__["a" /* TourService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ExhibitEditComponent);
    return ExhibitEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exhibit/exhibit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ExhibitComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.exhibits {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.exhibits li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.exhibits li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.exhibits a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n\n.exhibits a:hover {\n  color:#607D8B;\n}\n\n.exhibits .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.button {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exhibit/exhibit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ tour.name | uppercase }}'s exhibits</h2>\n\n<div *ngIf=\"exhibits\">\n  <ul class=\"exhibits\">\n    <li *ngFor=\"let exhibit of exhibits\"\n    [class.selected]=\"exhibit === selectedExhibit\"\n    (click)=\"onSelect(exhibit)\">\n      <a routerLink=\"/detail/{{exhibit.id}}\">\n        <span class=\"badge\">{{exhibit.id}}</span> {{exhibit._name}}\n      </a>\n      <button class=\"delete\" title=\"delete exhibit\"\n      (click)=\"delete(exhibit)\">x</button>\n    </li>\n  </ul>\n</div>\n\n<app-exhibit-edit [exhibit]=\"selectedExhibit\"></app-exhibit-edit>\n\n<button (click)=\"save()\">save</button>\n<button (click)=\"goBack()\">go back</button>"

/***/ }),

/***/ "../../../../../src/app/exhibit/exhibit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tours_tour__ = __webpack_require__("../../../../../src/app/tours/tour.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExhibitComponent = (function () {
    function ExhibitComponent(tourService, route, location) {
        this.tourService = tourService;
        this.route = route;
        this.location = location;
    }
    ExhibitComponent.prototype.ngOnInit = function () {
        this.getTourExhibits();
    };
    ExhibitComponent.prototype.onSelect = function (exhibit) {
        this.selectedExhibit = exhibit;
    };
    ExhibitComponent.prototype.getTourExhibits = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        //this.tourService.log(`Current exhibits = ${this.exhibits}` + `Before call tour = ${this.tour}`)
        this.tourService.getTour(id).subscribe(function (tour) { _this.exhibits = tour.exhibits; _this.tour = tour; }, function (error) { return console.log("Couldnt load exhibits"); });
        //this.tourService.log(`After call exhibits = ${this.exhibits}` + `After call tour = ${this.tour}`)
    };
    ExhibitComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExhibitComponent.prototype.save = function () {
        var _this = this;
        this.tourService.updateTour(this.tour)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__tours_tour__["a" /* Tour */])
    ], ExhibitComponent.prototype, "tour", void 0);
    ExhibitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exhibit',
            template: __webpack_require__("../../../../../src/app/exhibit/exhibit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exhibit/exhibit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__tour_service__["a" /* TourService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], ExhibitComponent);
    return ExhibitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exhibit/exhibit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exhibit; });
var Exhibit = (function () {
    function Exhibit(text, image, name, id) {
        this._image = image;
        this._name = name;
        this._text = text;
        this.id = id;
    }
    return Exhibit;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__ = __webpack_require__("../../../../../src/app/exhibit/exhibit.ts");

var InMemoryDataService = (function () {
    function InMemoryDataService() {
        this.exhibit1 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 1", 1, "exhibit1", 1);
        this.exhibit2 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 2", 1, "exhibit2", 2);
        this.exhibit3 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 3", 1, "exhibit3", 3);
        this.exhibit4 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 4", 1, "exhibit4", 4);
        this.exhibit5 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 5", 1, "exhibit5", 5);
        this.exhibit6 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 6", 1, "exhibit6", 6);
        this.exhibit7 = new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */]("exhibit 7", 1, "exhibit7", 7);
        this.exhibitsList1 = [this.exhibit1, this.exhibit2, this.exhibit3];
        this.exhibitsList2 = [this.exhibit2];
        this.exhibitsList3 = [this.exhibit3];
        this.exhibitsList4 = [this.exhibit4];
        this.exhibitsList5 = [this.exhibit5];
        this.exhibitsList6 = [this.exhibit6];
        this.exhibitsList7 = [this.exhibit7];
    }
    InMemoryDataService.prototype.createDb = function () {
        var tours = [
            { id: 1, name: 'Neals Tour', exhibits: this.exhibitsList1 },
            { id: 2, name: 'Bens Tours', exhibits: this.exhibitsList2 },
            { id: 3, name: 'Chris Tour', exhibits: this.exhibitsList3 },
            { id: 4, name: 'Taylors tour', exhibits: this.exhibitsList4 },
            { id: 5, name: 'Jims Tour', exhibits: this.exhibitsList5 },
            { id: 6, name: 'The Best Tour', exhibits: this.exhibitsList6 },
            { id: 7, name: 'Aquarium', exhibits: this.exhibitsList7 }
        ];
        // const exhibits = [
        //   { id: 1, name: 'Neals exhibit' },
        //   { id: 2, name: 'Bens exhibit' },
        //   { id: 3, name: 'Chris exhibit' },
        //   { id: 4, name: 'Taylors exhibit' },
        //   { id: 5, name: 'Jims exhibit' },
        //   { id: 6, name: 'The Best exhibit' },
        //   { id: 7, name: 'Aquarium' }
        // ];
        return { tours: tours };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\nh2 {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\n  body {\n    margin: 2em;\n  }\n  body, input[text], button {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\n  \n  button.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\n  button.clear {\n    color: #888;\n    margin-bottom: 12px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  \n    <h2>Messages</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tour-search/tour-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroSearch private styles */\n.search-result li {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width:195px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n  \n  .search-result li:hover {\n    background-color: #607D8B;\n  }\n  \n  .search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n  \n  .search-result li a:hover {\n    color: white;\n  }\n  .search-result li a:active {\n    color: white;\n  }\n  #search-box {\n    width: 200px;\n    height: 20px;\n  }\n  \n  \n  ul.search-result {\n    margin-top: 0;\n    padding-left: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tour-search/tour-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n    <h4>Tour Search</h4>\n  \n    <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  \n    <ul class=\"search-result\">\n      <li *ngFor=\"let tour of tours$ | async\" >\n        <a routerLink=\"/detail/{{tour.id}}\">\n          {{tour.name}}\n        </a>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tour-search/tour-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TourSearchComponent = (function () {
    function TourSearchComponent(tourService) {
        this.tourService = tourService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    TourSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    TourSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tours$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (term) { return _this.tourService.searchTours(term); }));
    };
    TourSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tour-search',
            template: __webpack_require__("../../../../../src/app/tour-search/tour-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tour-search/tour-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tour_service__["a" /* TourService */]])
    ], TourSearchComponent);
    return TourSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tour.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var TourService = (function () {
    function TourService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.toursUrl = 'api/tours'; // URL to web api
        this.exhibitsUrl = 'api/exhibits';
    }
    // getTours(): Observable<Tour[]> {
    //   //this.messageService.add('HeroService: fetched tours');
    //   return this.http.get<Tour[]>(this.toursUrl).pipe(catchError(this.handleError('getTours', [])));
    //   //return of (TOURS);
    // }
    /** GET tours from the server */
    TourService.prototype.getTours = function () {
        var _this = this;
        return this.http.get(this.toursUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (tours) { return _this.log("fetched tours"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getTours', [])));
    };
    TourService.prototype.getExhibits = function () {
        var _this = this;
        return this.http.get(this.exhibitsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (exhibits) { return _this.log("fetched exhibit"); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getExhibit', [])));
    };
    /** GET tour by id. Will 404 if id not found */
    TourService.prototype.getTour = function (id) {
        var _this = this;
        var url = this.toursUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched tour id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTour id=" + id)));
    };
    TourService.prototype.getExhibit = function (id) {
        var _this = this;
        var url = this.exhibitsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("fetched exhibit id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getExhibit id=" + id)));
    };
    /** PUT: update the tour on the server */
    TourService.prototype.updateTour = function (tour) {
        var _this = this;
        return this.http.put(this.toursUrl, tour, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("updated tour id=" + tour.id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateTour')));
    };
    /** POST: add a new tour to the server */
    TourService.prototype.addTour = function (tour) {
        var _this = this;
        return this.http.post(this.toursUrl, tour, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (tour) { return _this.log("added tour w/ id=" + tour.id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('addTour')));
    };
    /** DELETE: delete the tour from the server */
    TourService.prototype.deleteTour = function (tour) {
        var _this = this;
        var id = typeof tour === 'number' ? tour : tour.id;
        var url = this.toursUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("deleted tour id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteTour')));
    };
    /** DELETE: delete the exhibit from the server */
    TourService.prototype.deleteExhibit = function (exhibit) {
        var _this = this;
        var id = typeof exhibit === 'number' ? exhibit : exhibit.id;
        var url = this.exhibitsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("deleted exhibit id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteExhibit')));
    };
    /* GET tours whose name contains search term */
    TourService.prototype.searchTours = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty tour array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/tours/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* tap */])(function (_) { return _this.log("found tours matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('searchTours', [])));
    };
    // getHero(id: number): Observable<Tour> {
    //   // Todo: send the message _after_ fetching the tour
    //   this.messageService.add(`TOurService: fetched tour id=${id}`);
    //   return of(TOURS.find(tour => tour.id === id));
    // }
    /** Log a TourService message with the MessageService */
    TourService.prototype.log = function (message) {
        this.messageService.add('TourService: ' + message);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    TourService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    TourService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], TourService);
    return TourService;
}());



/***/ }),

/***/ "../../../../../src/app/tours/tour.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__ = __webpack_require__("../../../../../src/app/exhibit/exhibit.ts");

var Tour = (function () {
    function Tour() {
    }
    Tour.prototype.getExhibits = function () {
        return this.exhibits;
    };
    Tour.prototype.addExhibit = function (text, image, name) {
        this.exhibits.push(new __WEBPACK_IMPORTED_MODULE_0__exhibit_exhibit__["a" /* Exhibit */](text, image, name, this.exhibits.length));
    };
    return Tour;
}());



/***/ }),

/***/ "../../../../../src/app/tours/tours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ToursComponent's private CSS styles */\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .tours {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .tours li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  \n  .tours li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  \n  .tours a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n  \n  .tours a:hover {\n    color:#607D8B;\n  }\n  \n  .tours .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  \n  .button {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\n  \n  button:hover {\n    background-color: #cfd8dc;\n  }\n  \n  button.delete {\n    position: relative;\n    left: 194px;\n    top: -32px;\n    background-color: gray !important;\n    color: white;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tours/tours.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2>My Tours</h2>\n<ul class=\"tours\">\n  <li *ngFor=\"let tour of tours\"\n    [class.selected]=\"tour === selectedHero\"\n    (click)=\"onSelect(tour)\">\n    <span class=\"badge\">{{tour.id}}</span> {{tour.name}}\n  </li>\n</ul> -->\n \n<h2>My Tours</h2>\n\n<div>\n  <label>Tour name:\n    <input #tourName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(tourName.value); tourName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"tours\">\n  <li *ngFor=\"let tour of tours\">\n    <a routerLink=\"/detail/{{tour.id}}\">\n      <span class=\"badge\">{{tour.id}}</span> {{tour.name}}\n    </a>\n    <button class=\"delete\" title=\"delete tour\"\n    (click)=\"delete(tour)\">x</button>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/tours/tours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tour_service__ = __webpack_require__("../../../../../src/app/tour.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToursComponent = (function () {
    function ToursComponent(tourService) {
        this.tourService = tourService;
    }
    // onSelect(tour: Tour): void {
    //   this.selectedHero = tour;
    // }
    ToursComponent.prototype.getTours = function () {
        var _this = this;
        this.tourService.getTours().subscribe(function (tours) { return _this.tours = tours; });
    };
    ToursComponent.prototype.ngOnInit = function () {
        this.getTours();
    };
    ToursComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.tourService.addTour({ name: name })
            .subscribe(function (tour) {
            _this.tours.push(tour);
        });
    };
    ToursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tours',
            template: __webpack_require__("../../../../../src/app/tours/tours.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tours/tours.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tour_service__["a" /* TourService */]])
    ], ToursComponent);
    return ToursComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserLoginComponent = (function () {
    function UserLoginComponent() {
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map