(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "./src/app/auth/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'consignments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | consignments-consignments-module */
          "consignments-consignments-module").then(__webpack_require__.bind(null,
          /*! ./consignments/consignments.module */
          "./src/app/consignments/consignments.module.ts")).then(function (m) {
            return m.ConsignmentsModule;
          });
        },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.autoAuthUser();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["main[_ngcontent-%COMP%] {\n  margin: 1em 1em 10em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW5cbiAgbWFyZ2luOiAxZW0gMWVtIDEwZW0gMWVtXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.sass']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material.module */
      "./src/app/material.module.ts");
      /* harmony import */


      var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth/auth-interceptor */
      "./src/app/auth/auth-interceptor.ts");
      /* harmony import */


      var _shared_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/error-interceptor */
      "./src/app/shared/error-interceptor.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _shared_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
              useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
              useClass: _shared_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth-interceptor.ts":
    /*!******************************************!*\
      !*** ./src/app/auth/auth-interceptor.ts ***!
      \******************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.authService.getToken();
            var authRequest = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + authToken)
            });
            return next.handle(authRequest);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth.guard.ts":
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuthenticated = this.authService.getIsAuth();

            if (!isAuthenticated) {
              this.router.navigate(['/auth/login']);
            }

            return isAuthenticated;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/toast.service */
      "./src/app/shared/toast.service.ts");

      var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'user/';
      var ADMIN_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].adminId;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, toastService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.toastService = toastService;
          this.isAuthenticated = false;
          this.isAdmin = false;
          this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            return this.accessToken;
          }
        }, {
          key: "getIsAuth",
          value: function getIsAuth() {
            return this.isAuthenticated;
          }
        }, {
          key: "getIsAdmin",
          value: function getIsAdmin() {
            return this.isAdmin;
          }
        }, {
          key: "getAuthStatusListener",
          value: function getAuthStatusListener() {
            return this.authStatusListener.asObservable();
          }
        }, {
          key: "createUser",
          value: function createUser(login, password) {
            var _this = this;

            var authData = {
              login: login,
              password: password
            };
            this.http.post(BACKEND_URL + 'create', authData).subscribe(function (response) {
              _this.toastService.showToast(response.message);

              _this.router.navigate(['/']);
            }, function () {
              _this.authStatusListener.next(false);

              location.reload();
            });
          }
        }, {
          key: "login",
          value: function login(_login, password) {
            var _this2 = this;

            var authData = {
              login: _login,
              password: password
            };
            this.http.post(BACKEND_URL + 'login', authData).subscribe(function (response) {
              var accessToken = response.accessToken;
              _this2.accessToken = accessToken;

              if (accessToken) {
                var expiresInDuration = response.expiresIn;

                _this2.setAuthTimer(expiresInDuration);

                _this2.isAuthenticated = true;
                var userId = response.userId;
                _this2.isAdmin = _this2.checkIfAdmin(userId);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                var login = response.login;
                var refreshToken = response.refreshToken;

                _this2.saveAuthData(userId, accessToken, expirationDate, login, refreshToken);

                _this2.authStatusListener.next(true);

                _this2.toastService.showToast(response.message);

                _this2.router.navigate(['/']);
              } else {
                _this2.toastService.showToast('Coś poszło nie tak!');
              }
            }, function () {
              _this2.authStatusListener.next(false);
            });
          }
        }, {
          key: "autoAuthUser",
          value: function autoAuthUser() {
            var authInformation = this.getAuthData();

            if (!authInformation) {
              return;
            }

            var now = new Date();
            var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

            if (expiresIn > 0) {
              this.accessToken = authInformation.accessToken;
              this.isAuthenticated = true;
              var userId = authInformation.userId;
              this.isAdmin = this.checkIfAdmin(userId);
              this.setAuthTimer(expiresIn / 1000);
              this.authStatusListener.next(true);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accessToken = null;
            this.isAuthenticated = false;
            this.isAdmin = false;
            this.authStatusListener.next(false);
            clearTimeout(this.accessTokenTimer);
            this.clearAuthData();
            this.toastService.showToast('Użytkownik został wylogowany.');
            this.router.navigate(['/auth/login']);
          }
        }, {
          key: "setAuthTimer",
          value: function setAuthTimer(duration) {
            var _this3 = this;

            this.accessTokenTimer = setTimeout(function () {
              _this3.refresh();
            }, duration * 1000);
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this4 = this;

            var authData = this.getAuthData();
            var refreshData = {
              userId: authData.userId,
              refreshToken: authData.refreshToken
            };
            this.http.post(BACKEND_URL + 'accessToken', refreshData).subscribe(function (response) {
              var accessToken = response.accessToken;
              _this4.accessToken = accessToken;

              if (accessToken) {
                var expiresInDuration = response.expiresIn;

                _this4.setAuthTimer(expiresInDuration);

                _this4.isAuthenticated = true;
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

                _this4.saveRefreshData(accessToken, expirationDate);

                _this4.authStatusListener.next(true);

                _this4.toastService.showToast(response.message);
              } else {
                _this4.toastService.showToast('Przedłużenie sesji użytkownika nieudane.');

                _this4.logout();
              }
            }, function () {
              _this4.logout();
            });
          }
        }, {
          key: "saveRefreshData",
          value: function saveRefreshData(accessToken, expirationDate) {
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('expiration', expirationDate.toISOString());
          }
        }, {
          key: "saveAuthData",
          value: function saveAuthData(userId, accessToken, expirationDate, login, refreshToken) {
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('expiration', expirationDate.toISOString());
            sessionStorage.setItem('login', login);
            sessionStorage.setItem('refreshToken', refreshToken);
          }
        }, {
          key: "clearAuthData",
          value: function clearAuthData() {
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('expiration');
            sessionStorage.removeItem('login');
            sessionStorage.removeItem('refreshToken');
          }
        }, {
          key: "getAuthData",
          value: function getAuthData() {
            var userId = sessionStorage.getItem('userId');
            var accessToken = sessionStorage.getItem('accessToken');
            var expirationDate = sessionStorage.getItem('expiration');
            var login = sessionStorage.getItem('login');
            var refreshToken = sessionStorage.getItem('refreshToken');

            if (!userId || !accessToken || !expirationDate || !login || !refreshToken) {
              return;
            }

            return {
              userId: userId,
              accessToken: accessToken,
              expirationDate: new Date(expirationDate),
              login: login,
              refreshToken: refreshToken
            };
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return sessionStorage.getItem('userId');
          }
        }, {
          key: "getLogin",
          value: function getLogin() {
            return sessionStorage.getItem('login');
          }
        }, {
          key: "checkIfAdmin",
          value: function checkIfAdmin(userId) {
            // zapytanie do backendu o to czy jest adminem
            return userId === ADMIN_ID ? true : false;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _shared_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/dashboard.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DashboardComponent_h1_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " daszbord\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(authService) {
          _classCallCheck(this, DashboardComponent);

          this.authService = authService;
          this.userIsAuthenticated = false;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.userIsAuthenticated = this.authService.getIsAuth();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this5.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 1,
        vars: 1,
        consts: [["class", "mat-title", 4, "ngIf"], [1, "mat-title"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_h1_0_Template, 2, 0, "h1", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function HeaderComponent_ng_container_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " person_add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " nowy user ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " view_list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " przesy\u0142ki ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ng_container_1_button_9_Template, 4, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " exit_to_app ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " wyloguj ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " brightness_medium ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " invert_colors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " darek mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.login, " daszbord ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
        }
      }

      function HeaderComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " logowanie ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authService) {
          _classCallCheck(this, HeaderComponent);

          this.authService = authService;
          this.isAuthenticated = false;
          this.isAdmin = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.isAuthenticated = this.authService.getIsAuth();
            this.isAdmin = this.authService.getIsAdmin();
            this.login = this.authService.getLogin();
            this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this6.isAuthenticated = isAuthenticated;
              _this6.isAdmin = _this6.authService.getIsAdmin();
              _this6.login = _this6.authService.getLogin();
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 3,
        vars: 2,
        consts: [["color", "primary"], [4, "ngIf"], ["mat-raised-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent", 4, "ngIf"], ["mat-raised-button", "", "routerLink", "/dashboard", "routerLinkActive", "mat-accent"], [1, "material-icons"], ["mat-raised-button", "", "routerLink", "/consignments", "routerLinkActive", "mat-accent"], ["mat-raised-button", "", "routerLink", "/auth/create", "routerLinkActive", "mat-accent", 4, "ngIf"], [1, "spacer"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "/auth/create", "routerLinkActive", "mat-accent"], ["mat-raised-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_1_Template, 21, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_button_2_Template, 4, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
          }
        },
        directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
        styles: ["button[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/material.module.ts":
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /*! exports provided: AngularMaterialModule */

    /***/
    function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
        return AngularMaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/table */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/tree.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

      var AngularMaterialModule = function AngularMaterialModule() {
        _classCallCheck(this, AngularMaterialModule);
      };

      AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularMaterialModule
      });
      AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularMaterialModule_Factory(t) {
          return new (t || AngularMaterialModule)();
        },
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"]],
        imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
          exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-interceptor.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/error-interceptor.ts ***!
      \*********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppSharedErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/shared/toast.service.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authService, toastService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authService = authService;
          this.toastService = toastService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this7 = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              if (error.status === 401) {
                _this7.authService.refresh();
              }

              console.log(error);
              var message = error.error.message;
              message ? message : 'Wystąpił nieznany błąd.';

              _this7.toastService.showToast(message);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/toast.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/toast.service.ts ***!
      \*****************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppSharedToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(snackBar) {
          _classCallCheck(this, ToastService);

          this.snackBar = snackBar;
        }

        _createClass(ToastService, [{
          key: "showToast",
          value: function showToast(message, action, duration) {
            if (!duration) {
              duration = 5000;
            }

            var snackBarRef = this.snackBar.open(message, action, {
              duration: duration
            });
            snackBarRef.onAction().subscribe(function () {// wciśnięcie przycisku tosta
            });
            snackBarRef.afterDismissed().subscribe(function () {// po zamknięciu tosta
            });
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        serverUrl: 'http://localhost:4000/',
        apiURL: 'http://localhost:4000/api/',
        adminId: '5ead7ab5556feb3794d8b0a5'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/macbook/Projects/courier-app/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map