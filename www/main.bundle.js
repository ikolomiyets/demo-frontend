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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"h1 my-4\">Policies List</div>\n  <table class=\"table table-sm table-hover table-striped\">\n    <thead>\n    <tr>\n      <th>#</th>\n      <th>Policy Number</th>\n      <th>Start Date</th>\n      <th>Insured</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let policy of (state | async).policies; let i = index\">\n        <th scope=\"row\">{{i + 1}}</th>\n        <td>{{policy.policyNumber}}</td>\n        <td>{{policy.startDate | date: 'dd/MM/yyyy' }}</td>\n        <td><a (click)=\"showInsured(customers, policy.policyNumber, policy.insured)\" style=\"cursor: pointer;\">View</a></td>\n      </tr>\n    </tbody>\n  </table>\n  <ng-template #customers let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Insured for policy No. {{policyNumber}}</h5>\n      <button class=\"close\" (click)=\"d()\" style=\"cursor: pointer;\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n      <table class=\"table-sm table-hover table-striped\">\n        <thead>\n        <tr>\n          <th>#</th>\n          <th>Last Name</th>\n          <th>First Name</th>\n          <th>Address</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let customer of (state | async).insured; let i = index\">\n          <th scope=\"row\">{{i + 1}}</th>\n          <td>{{customer.lastName}}</td>\n          <td>{{customer.firstName}}</td>\n          <td>{{customer.address}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-secondary\" (click)=\"d()\" style=\"cursor: pointer;\">Dismiss</button>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_app_actions__ = __webpack_require__("../../../../../src/app/state/app.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.state = this.store.select('app');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_app_actions__["g" /* DoLoadPolicies */]({ first: 1, count: 10 }));
    };
    AppComponent.prototype.showInsured = function (content, policyNumber, insured) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_app_actions__["h" /* DoResetInsured */]());
        this.policyNumber = policyNumber;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_app_actions__["f" /* DoInitCustomerRetrieval */](insured));
        this.modalService.open(content);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_app_reducers__ = __webpack_require__("../../../../../src/app/state/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_app_efects__ = __webpack_require__("../../../../../src/app/state/app.efects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["i" /* StoreModule */].forRoot({ app: __WEBPACK_IMPORTED_MODULE_7__state_app_reducers__["a" /* appReducer */] }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_9__state_app_efects__["a" /* AppEfects */]]),
                !__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : []
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/state/app.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DO_LOAD_POLICIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return POLICIES_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DO_INIT_CUSTOMER_RETRIEVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DO_RESET_INSURED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DO_RETRIEVE_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CUSTOMER_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DoLoadPolicies; });
/* unused harmony export PoliciesReceved */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DoInitCustomerRetrieval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DoResetInsured; });
/* unused harmony export DoRetrieveCustomer */
/* unused harmony export CustomerReceived */
var DO_LOAD_POLICIES = 'LOAD_POLICIES';
var POLICIES_RECEIVED = 'POLICIES_RECEIVED';
var DO_INIT_CUSTOMER_RETRIEVAL = 'DO_INIT_CUSTOMER_RETRIEVAL';
var DO_RESET_INSURED = 'DO_RESET_INSURED';
var DO_RETRIEVE_CUSTOMER = 'DO_RETRIEVE_CUSTOMER';
var CUSTOMER_RECEIVED = 'CUSTOMER_RECEIVED';
var DoLoadPolicies = (function () {
    function DoLoadPolicies(payload) {
        this.payload = payload;
        this.type = DO_LOAD_POLICIES;
    }
    return DoLoadPolicies;
}());

var PoliciesReceved = (function () {
    function PoliciesReceved(payload) {
        this.payload = payload;
        this.type = POLICIES_RECEIVED;
    }
    return PoliciesReceved;
}());

var DoInitCustomerRetrieval = (function () {
    function DoInitCustomerRetrieval(payload) {
        this.payload = payload;
        this.type = DO_INIT_CUSTOMER_RETRIEVAL;
    }
    return DoInitCustomerRetrieval;
}());

var DoResetInsured = (function () {
    function DoResetInsured() {
        this.type = DO_RESET_INSURED;
    }
    return DoResetInsured;
}());

var DoRetrieveCustomer = (function () {
    function DoRetrieveCustomer(payload) {
        this.payload = payload;
        this.type = DO_RETRIEVE_CUSTOMER;
    }
    return DoRetrieveCustomer;
}());

var CustomerReceived = (function () {
    function CustomerReceived(payload) {
        this.payload = payload;
        this.type = CUSTOMER_RECEIVED;
    }
    return CustomerReceived;
}());



/***/ }),

/***/ "../../../../../src/app/state/app.efects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEfects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_actions__ = __webpack_require__("../../../../../src/app/state/app.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppEfects = (function () {
    function AppEfects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.doLoadPolicies = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__app_actions__["c" /* DO_LOAD_POLICIES */])
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return _this.http.get('/policies');
        })
            .map(function (policies) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_6__app_actions__["i" /* POLICIES_RECEIVED */],
                payload: policies
            };
        });
        this.doInitCustomerRetrieval = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__app_actions__["b" /* DO_INIT_CUSTOMER_RETRIEVAL */])
            .map(function (action) { return action.payload; })
            .flatMap(function (insured) {
            var result = [];
            for (var _i = 0, insured_1 = insured; _i < insured_1.length; _i++) {
                var id = insured_1[_i];
                result.push({ type: __WEBPACK_IMPORTED_MODULE_6__app_actions__["e" /* DO_RETRIEVE_CUSTOMER */], payload: id });
            }
            return result;
        });
        this.doRetrieveCustomer = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__app_actions__["e" /* DO_RETRIEVE_CUSTOMER */])
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            console.log('Retrieving ', payload);
            return _this.http.get('/customers/' + payload);
        })
            .map(function (insured) {
            console.log('Retrieved', insured);
            return {
                type: __WEBPACK_IMPORTED_MODULE_6__app_actions__["a" /* CUSTOMER_RECEIVED */],
                payload: insured
            };
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AppEfects.prototype, "doLoadPolicies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AppEfects.prototype, "doInitCustomerRetrieval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AppEfects.prototype, "doRetrieveCustomer", void 0);
    AppEfects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AppEfects);
    return AppEfects;
}());



/***/ }),

/***/ "../../../../../src/app/state/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_actions__ = __webpack_require__("../../../../../src/app/state/app.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    policies: [],
    insured: []
};
function appReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__app_actions__["i" /* POLICIES_RECEIVED */]:
            return __assign({}, state, { policies: action.payload.policies });
        case __WEBPACK_IMPORTED_MODULE_0__app_actions__["d" /* DO_RESET_INSURED */]:
            return __assign({}, state, { insured: [] });
        case __WEBPACK_IMPORTED_MODULE_0__app_actions__["a" /* CUSTOMER_RECEIVED */]:
            return __assign({}, state, { insured: state.insured.concat([action.payload]) });
        default:
            return state;
    }
}


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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