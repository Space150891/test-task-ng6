(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-product-buy-product-module"],{

/***/ "./src/app/modules/buy-product/buy-product-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BuyProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductRoutingModule", function() { return BuyProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buy_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-product.component */ "./src/app/modules/buy-product/buy-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: ':id',
        component: _buy_product_component__WEBPACK_IMPORTED_MODULE_2__["BuyProductComponent"]
    }
];
var BuyProductRoutingModule = /** @class */ (function () {
    function BuyProductRoutingModule() {
    }
    BuyProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BuyProductRoutingModule);
    return BuyProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/buy-product-service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product-service.ts ***!
  \************************************************************/
/*! exports provided: BuyProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductService", function() { return BuyProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyProductService = /** @class */ (function () {
    function BuyProductService(http) {
        this.http = http;
    }
    BuyProductService.prototype.getProduct = function (id) {
        // real request
        // return this.http.get<DetailedProduct>(`some_url/${id}`);
        // mock data
        var product = {
            id: 14559,
            name: 'Flat White XXX',
            price: 125,
            before_sale_price: null,
            description: 'Freshly-ground beans and steamed milk',
            full_description: 'Freshly-ground beans and steamed milk',
            order: 1,
            category: {
                id: 1727,
                name: 'Coffee'
            },
            images: {
                full_size: 'https://theexoticbean.com/wp-content/uploads/2015/12/flat_white_latte_coffee_E1.jpg',
                thumbnail: 'https://theexoticbean.com/wp-content/uploads/2015/12/flat_white_latte_coffee_E1.jpg'
            },
            extras: [
                {
                    id: 1535,
                    name: 'Milk Option',
                    min: 1,
                    max: 1,
                    items: [
                        {
                            id: 6631,
                            name: 'Full Milk',
                            extra_id: 1535,
                            price: 0
                        },
                        {
                            id: 6632,
                            name: 'Skim Milk',
                            extra_id: 1535,
                            price: 0
                        },
                        {
                            id: 6633,
                            name: 'Soy Milk',
                            extra_id: 1535,
                            price: 20
                        }
                    ]
                }, {
                    id: 1536,
                    name: 'Syrup Option',
                    min: 0,
                    max: 1,
                    items: [
                        {
                            id: 6635,
                            name: 'Nutty',
                            extra_id: 7345,
                            price: 10
                        },
                        {
                            id: 6636,
                            name: 'Cherry',
                            extra_id: 7345,
                            price: 10
                        },
                        {
                            id: 6637,
                            name: 'Chocolade',
                            extra_id: 7345,
                            price: 10
                        }
                    ]
                }, {
                    id: 15345,
                    name: 'Chocolade',
                    min: 0,
                    max: 3,
                    items: [
                        {
                            id: 6635,
                            name: 'Toblerone',
                            extra_id: 15358,
                            price: 70
                        },
                        {
                            id: 6636,
                            name: 'Patchi',
                            extra_id: 15359,
                            price: 60
                        },
                        {
                            id: 6637,
                            name: 'Spartak',
                            extra_id: 15356,
                            price: 40
                        }
                    ]
                }
            ],
            tags: [],
            availability: 'available'
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            window.setTimeout(function () { return observer.next(product); }, 1000);
            return observer;
        });
    };
    BuyProductService.prototype.buyProduct = function (data) {
        data.extras.forEach(function (element) {
            delete element.options;
        });
        alert("post data is " + JSON.stringify(data));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    BuyProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuyProductService);
    return BuyProductService;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/buy-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(0,0,0,0.3)\" size=\"large\" color=\"rgb(155,111,76)\" type=\"line-scale-pulse-out\">\n</ngx-spinner>\n<app-modal (OnClose)=\"onCloseModal()\" *ngIf=\"product && initialized\">\n  <form class=\"product pb-4\" [formGroup]=\"form\">\n    <a class=\"p-3 back\" (click)=\"goBack()\">\n      <svg class=\"back-icon p-2\" viewBox=\"0 0 512 512\">\n        <path d=\"M6.969,265.678l152.274,152.274c9.29,9.291,24.357,9.291,33.648,0c9.292-9.292,9.292-24.356,0-33.648L81.234,272.646   h406.675c13.14,0,23.793-10.654,23.793-23.793c0-13.138-10.653-23.793-23.793-23.793H81.234l111.653-111.656   c9.292-9.294,9.292-24.357,0-33.648c-4.646-4.643-10.735-6.97-16.824-6.97c-6.09,0-12.179,2.327-16.824,6.97L6.969,232.029   C-2.323,241.321-2.323,256.386,6.969,265.678z\" />\n      </svg>\n    </a>\n    <img [alt]=\"product.name\" [src]=\"product.images.full_size\" />\n    <div class=\"text-center pt-4 pb-1 px-3\">\n      <div class=\"description\">\n        <h3 class=\"pt-4 font-weight-bold\">{{product.name}}</h3>\n        <h6 class=\"pb-4 pt-2 mb-4\">{{product.description}}</h6>\n      </div>\n      <div class=\"price-count py-3 d-flex justify-content-between\">\n        <span>\n          <del *ngIf=\"product.before_sale_price\">$ {{product.before_sale_price}}</del>\n          $ {{product.price}}\n        </span>\n        <div class=\"product-count\">\n          <app-products-count [min]=\"1\" [max]=\"10\" formControlName=\"order\">\n          </app-products-count>\n        </div>\n      </div>\n    </div>\n    <div class=\"extras\">\n      <app-extras formControlName=\"extras\"></app-extras>\n    </div>\n    <div class=\"text-center py-3 mt-4 d-flex mx-2\">\n      <button class=\"submit py-2 px-4 mx-4 flex-grow-1\" (click)=\"buy()\" [disabled]=\"form.invalid\">\n        <div class=\"d-flex justify-content-between\">\n          <span>\n            <svg width=\"25px\" viewBox=\"0 0 510 510\" >\n              <path d=\"M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z\"/>\n            </svg>\n          </span>\n          <span>ADD {{count}} TO CARD</span>\n          <span>$ {{fullPrice}}</span>\n        </div>\n      </button>\n    </div>\n  </form>\n</app-modal>\n"

/***/ }),

/***/ "./src/app/modules/buy-product/buy-product.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  color: #000; }\n  .product .back {\n    position: absolute;\n    z-index: 1; }\n  .product .back .back-icon {\n      height: 46px;\n      width: 46px;\n      border-radius: 50%;\n      background-color: #FFF;\n      fill: #737373;\n      cursor: pointer;\n      transition: fill .3s ease-in-out; }\n  .product .back .back-icon:hover {\n        fill: #9b6f4c; }\n  .product img {\n    display: block;\n    max-width: 100%;\n    min-width: 360px;\n    min-height: 160px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .product .description {\n    border-bottom: solid 1px #f2f2f2; }\n  .product .description h6 {\n      color: #707070; }\n  .product .price-count {\n    font-size: 24px; }\n  .product .price-count del {\n      opacity: 0.5; }\n  .product .submit {\n    font-size: 24px;\n    border-radius: 4px;\n    background-color: #372921;\n    color: #FFF;\n    cursor: pointer; }\n  .product .submit svg {\n      fill: #FFF; }\n  .product .submit:disabled {\n      color: #acacb1;\n      cursor: not-allowed; }\n  .product .submit:disabled svg {\n        fill: #acacb1; }\n"

/***/ }),

/***/ "./src/app/modules/buy-product/buy-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product.component.ts ***!
  \**************************************************************/
/*! exports provided: BuyProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductComponent", function() { return BuyProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _buy_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-product-service */ "./src/app/modules/buy-product/buy-product-service.ts");
/* harmony import */ var _extras_validator_extras_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras-validator/extras-validator */ "./src/app/modules/buy-product/extras-validator/extras-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuyProductComponent = /** @class */ (function () {
    function BuyProductComponent(fb, spinner, router, route, buyProductService) {
        this.fb = fb;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.buyProductService = buyProductService;
        this.selectedExtras = [];
        this.initialized = true;
        this.alive = true;
    }
    BuyProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (param) {
            return _this.buyProductService.getProduct(param.id);
        })).subscribe(function (product) {
            _this.product = product;
            _this.createGroup();
            _this.spinner.hide();
        }, function (ex) {
            console.log("Error! " + ex);
            _this.spinner.hide();
            _this.goBack();
        });
    };
    BuyProductComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Object.defineProperty(BuyProductComponent.prototype, "fullPrice", {
        get: function () {
            var extraPrice = 0;
            this.selectedExtras.forEach(function (extra) {
                extra.items.forEach(function (item) {
                    extraPrice += item.price;
                });
            });
            return (this.product.price + extraPrice) * this.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuyProductComponent.prototype, "count", {
        get: function () {
            return this.form.value.order;
        },
        enumerable: true,
        configurable: true
    });
    BuyProductComponent.prototype.buy = function () {
        var _this = this;
        this.buyProductService.buyProduct(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function () {
            _this.goBack();
        });
    };
    BuyProductComponent.prototype.onCloseModal = function () {
        this.goBack();
    };
    BuyProductComponent.prototype.goBack = function () {
        this.router.navigate(['/products']);
    };
    BuyProductComponent.prototype.trackByFn = function (index, item) {
        return item.id && index;
    };
    BuyProductComponent.prototype.createGroup = function () {
        var group = {
            id: [this.product.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator],
            order: [{ value: this.product.order, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]')]],
            category: [this.product.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        };
        var extras = [];
        this.form = this.fb.group(group);
        this.product.extras.forEach(function (item) {
            var ex = Object.assign({}, item);
            ex.options = ex.items;
            ex.items = [];
            extras.push(ex);
        });
        this.selectedExtras = extras;
        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.selectedExtras, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _extras_validator_extras_validator__WEBPACK_IMPORTED_MODULE_6__["ExtrasValidator"].ValidateExtras]);
        this.form.addControl('extras', control);
        this.initialized = true;
    };
    BuyProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-product',
            template: __webpack_require__(/*! ./buy-product.component.html */ "./src/app/modules/buy-product/buy-product.component.html"),
            styles: [__webpack_require__(/*! ./buy-product.component.scss */ "./src/app/modules/buy-product/buy-product.component.scss")],
            providers: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _buy_product_service__WEBPACK_IMPORTED_MODULE_5__["BuyProductService"]])
    ], BuyProductComponent);
    return BuyProductComponent;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/buy-product.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/buy-product/buy-product.module.ts ***!
  \***********************************************************/
/*! exports provided: BuyProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProductModule", function() { return BuyProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _buy_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-product-routing.module */ "./src/app/modules/buy-product/buy-product-routing.module.ts");
/* harmony import */ var _buy_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-product.component */ "./src/app/modules/buy-product/buy-product.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _buy_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-product-service */ "./src/app/modules/buy-product/buy-product-service.ts");
/* harmony import */ var _extras_extras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/extras.component */ "./src/app/modules/buy-product/extras/extras.component.ts");
/* harmony import */ var _extras_item_extras_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extras-item/extras-item.component */ "./src/app/modules/buy-product/extras-item/extras-item.component.ts");
/* harmony import */ var _products_count_products_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-count/products-count.component */ "./src/app/modules/buy-product/products-count/products-count.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BuyProductModule = /** @class */ (function () {
    function BuyProductModule() {
    }
    BuyProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _buy_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["BuyProductRoutingModule"]
            ],
            providers: [_buy_product_service__WEBPACK_IMPORTED_MODULE_5__["BuyProductService"]],
            declarations: [_buy_product_component__WEBPACK_IMPORTED_MODULE_3__["BuyProductComponent"], _extras_extras_component__WEBPACK_IMPORTED_MODULE_6__["ExtrasComponent"], _extras_item_extras_item_component__WEBPACK_IMPORTED_MODULE_7__["ExtrasItemComponent"], _products_count_products_count_component__WEBPACK_IMPORTED_MODULE_8__["ProductsCountComponent"]]
        })
    ], BuyProductModule);
    return BuyProductModule;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/extras-item/extras-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/buy-product/extras-item/extras-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"extras-group\" *ngIf=\"data\">\n  <div class=\"extra-name px-4 py-1 d-flex justify-content-between align-items-center\">\n    <h5 class=\"text-uppercase m-0 py-4\">\n      {{data.name}}\n      <em *ngIf=\"isRequired\">\n        (required)\n      </em>\n    </h5>\n    <a *ngIf=\"canReset\" (click)=\"reset()\">\n      reset\n    </a>\n  </div>\n  <div class=\"px-4 py-3 req-text\" *ngIf=\"isRequired && data.items.length < data.min\">\n    Please select {{data.min}} item(s)\n  </div>\n  <div class=\"options\">\n    <div class=\"px-4 \" *ngFor=\"let item of data.options; trackBy: trackByFn; let ind = index;\">\n      <label class=\"option d-flex justify-content-between m-x my-2 py-3\">\n        <div>\n          {{item.name}}\n          <em>($ {{item.price}})</em>\n        </div>\n        <input [type]=\"inputType\" [value]=\"item\" [name]=\"data.id\" [id]=\"item.id\" (change)=\"onSelectionChange($event, item)\" [checked]=\"isChecked(item)\">\n        <div class=\"checkmark\" [ngClass]=\"inputType\"></div>\n      </label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/buy-product/extras-item/extras-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/buy-product/extras-item/extras-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".extras-group {\n  color: #000; }\n  .extras-group em {\n    font-style: inherit;\n    color: #818181; }\n  .extras-group .extra-name {\n    background-color: #f2f2f2; }\n  .extras-group .extra-name a {\n      cursor: pointer;\n      font-size: 18px; }\n  .extras-group .req-text {\n    background-color: #e4e4e4;\n    font-size: 16px; }\n  .extras-group .options {\n    font-size: 18px; }\n  .extras-group .options > div {\n      border-bottom: 1px solid #f2f2f2; }\n  .extras-group .options > div:last-child {\n        border: none; }\n  .extras-group .options .option {\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .extras-group .options .option input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer; }\n  .extras-group .options .option input:checked ~ .checkmark:after {\n          display: block;\n          background: #707070; }\n  .extras-group .options .option:hover input ~ .checkmark {\n        background-color: #f7f7f7; }\n  .extras-group .options .option .checkmark {\n        position: relative;\n        height: 24px;\n        width: 24px;\n        border: 3px solid #707070; }\n  .extras-group .options .option .checkmark.radio {\n          border-radius: 50%; }\n  .extras-group .options .option .checkmark.radio:after {\n            border-radius: 50%; }\n  .extras-group .options .option .checkmark:after {\n          position: absolute;\n          content: \"\";\n          display: none;\n          width: 18px;\n          height: 18px;\n          border: 3px solid white;\n          background: #707070; }\n"

/***/ }),

/***/ "./src/app/modules/buy-product/extras-item/extras-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/buy-product/extras-item/extras-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExtrasItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasItemComponent", function() { return ExtrasItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtrasItemComponent = /** @class */ (function () {
    function ExtrasItemComponent() {
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ExtrasItemComponent.prototype, "isRequired", {
        get: function () {
            return this.data.min > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtrasItemComponent.prototype, "inputType", {
        get: function () {
            return this.data.max > 1 ? 'checkbox' : 'radio';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtrasItemComponent.prototype, "canReset", {
        get: function () {
            return this.data.items.length > 0 && (!this.isRequired || this.data.min > 1);
        },
        enumerable: true,
        configurable: true
    });
    ExtrasItemComponent.prototype.isChecked = function (item) {
        return this.data.items.filter(function (x) { return x === item; }).length > 0;
    };
    ExtrasItemComponent.prototype.onSelectionChange = function ($event, item) {
        if (this.data.items.length >= this.data.max && $event.target.checked && this.inputType !== 'radio') {
            this.data.items = this.data.items.filter(function (x) { return x !== item; });
            return;
        }
        if ($event.target.checked) {
            if (this.inputType !== 'radio') {
                this.data.items.push(item);
            }
            else {
                this.data.items = [item];
            }
        }
        else {
            this.data.items = this.data.items.filter(function (x) { return x !== item; });
        }
        this.selectionChanged.emit();
    };
    ExtrasItemComponent.prototype.reset = function () {
        this.data.items = [];
    };
    ExtrasItemComponent.prototype.trackByFn = function (index, item) {
        return item.id && index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExtrasItemComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ExtrasItemComponent.prototype, "selectionChanged", void 0);
    ExtrasItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extras-item',
            template: __webpack_require__(/*! ./extras-item.component.html */ "./src/app/modules/buy-product/extras-item/extras-item.component.html"),
            styles: [__webpack_require__(/*! ./extras-item.component.scss */ "./src/app/modules/buy-product/extras-item/extras-item.component.scss")],
        })
    ], ExtrasItemComponent);
    return ExtrasItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/extras-validator/extras-validator.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/buy-product/extras-validator/extras-validator.ts ***!
  \**************************************************************************/
/*! exports provided: ExtrasValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasValidator", function() { return ExtrasValidator; });
var ExtrasValidator = /** @class */ (function () {
    function ExtrasValidator() {
    }
    ExtrasValidator.ValidateExtras = function (control) {
        var value = control.value;
        var valid = true;
        value.forEach(function (val) {
            var count = val.items.length;
            if (!(val.min <= count && val.max >= count)) {
                valid = false;
            }
        });
        return valid ? null : { Error: true };
    };
    return ExtrasValidator;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/extras/extras.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/buy-product/extras/extras.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-extras-item *ngFor=\"let item of value; trackBy: trackByFn\" [data]=\"item\" (selectionChanged)=\"selectionChanged()\">\n</app-extras-item>\n\n"

/***/ }),

/***/ "./src/app/modules/buy-product/extras/extras.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/buy-product/extras/extras.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/buy-product/extras/extras.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/buy-product/extras/extras.component.ts ***!
  \****************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ExtrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasComponent", function() { return ExtrasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ExtrasComponent; }),
    multi: true
};
var ExtrasComponent = /** @class */ (function () {
    function ExtrasComponent() {
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(ExtrasComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ExtrasComponent.prototype.onChange = function ($event) {
        this.value = $event;
    };
    ExtrasComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    ExtrasComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    ExtrasComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ExtrasComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ExtrasComponent.prototype.selectionChanged = function () {
        this.onChangeCallback(this.value);
    };
    ExtrasComponent.prototype.trackByFn = function (index, item) {
        return item.id && index;
    };
    ExtrasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extras',
            template: __webpack_require__(/*! ./extras.component.html */ "./src/app/modules/buy-product/extras/extras.component.html"),
            styles: [__webpack_require__(/*! ./extras.component.scss */ "./src/app/modules/buy-product/extras/extras.component.scss")],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], ExtrasComponent);
    return ExtrasComponent;
}());



/***/ }),

/***/ "./src/app/modules/buy-product/products-count/products-count.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/buy-product/products-count/products-count.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-count d-flex\">\n  <button (click)=\"changeCount(-1)\" [disabled]=\"value === min\">-</button>\n  <div class=\"px-4 mx-2\">{{value}}</div>\n  <button (click)=\"changeCount()\" [disabled]=\"value === max\">+</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/buy-product/products-count/products-count.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/buy-product/products-count/products-count.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  font-weight: inherit; }\n\n.product-count button {\n  background-color: #9b6f4c;\n  color: #FFF;\n  cursor: pointer;\n  border-radius: 50%;\n  height: 38px;\n  width: 38px; }\n\n.product-count button:disabled {\n    background-color: #acacb1;\n    cursor: not-allowed; }\n"

/***/ }),

/***/ "./src/app/modules/buy-product/products-count/products-count.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/buy-product/products-count/products-count.component.ts ***!
  \********************************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, ProductsCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCountComponent", function() { return ProductsCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ProductsCountComponent; }),
    multi: true
};
var ProductsCountComponent = /** @class */ (function () {
    function ProductsCountComponent() {
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(ProductsCountComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue && v >= this.min && v <= this.max) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ProductsCountComponent.prototype.changeCount = function (num) {
        if (num === void 0) { num = 1; }
        this.value += num;
    };
    ProductsCountComponent.prototype.onChange = function ($event) {
        this.value = $event;
    };
    ProductsCountComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    ProductsCountComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    ProductsCountComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ProductsCountComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductsCountComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductsCountComponent.prototype, "max", void 0);
    ProductsCountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-count',
            template: __webpack_require__(/*! ./products-count.component.html */ "./src/app/modules/buy-product/products-count/products-count.component.html"),
            styles: [__webpack_require__(/*! ./products-count.component.scss */ "./src/app/modules/buy-product/products-count/products-count.component.scss")],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], ProductsCountComponent);
    return ProductsCountComponent;
}());



/***/ })

}]);
//# sourceMappingURL=buy-product-buy-product-module.js.map