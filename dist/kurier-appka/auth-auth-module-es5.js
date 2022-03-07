(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "./src/app/auth/admin.guard.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/admin.guard.ts ***!
      \*************************************/

    /*! exports provided: AdminGuard */

    /***/
    function srcAppAuthAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
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

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(authService, router) {
          _classCallCheck(this, AdminGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAdmin = this.authService.getIsAdmin();

            if (!isAdmin) {
              this.router.navigate(['/dashboard']);
            }

            return isAdmin;
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminGuard,
        factory: AdminGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
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
    "./src/app/auth/auth-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create/create.component */
      "./src/app/auth/create/create.component.ts");
      /* harmony import */


      var _admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.guard */
      "./src/app/auth/admin.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth.module.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create/create.component */
      "./src/app/auth/create/create.component.ts");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./src/app/auth/auth-routing.module.ts");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../material.module */
      "./src/app/material.module.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/create/create.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/auth/create/create.component.ts ***!
      \*************************************************/

    /*! exports provided: CreateComponent */

    /***/
    function srcAppAuthCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
        return CreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");

      function CreateComponent_mat_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function CreateComponent_form_1_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Podaj poprawny login.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_form_1_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Podaj prawid\u0142owe has\u0142o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_form_1_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " rejestruj ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateComponent_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_form_1_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onSignup(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateComponent_form_1_mat_error_5_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateComponent_form_1_mat_error_9_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateComponent_form_1_button_10_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
        }
      }

      var CreateComponent = /*#__PURE__*/function () {
        function CreateComponent(authService) {
          _classCallCheck(this, CreateComponent);

          this.authService = authService;
          this.isLoading = false;
        }

        _createClass(CreateComponent, [{
          key: "onSignup",
          value: function onSignup(form) {
            if (form.invalid) {
              return;
            }

            this.isLoading = true;
            this.authService.createUser(form.value.login, form.value.password);
          }
        }]);

        return CreateComponent;
      }();

      CreateComponent.ɵfac = function CreateComponent_Factory(t) {
        return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["matInput", "", "name", "login", "ngModel", "", "type", "login", "placeholder", "login", "required", ""], ["loginInput", "ngModel"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "has\u0142o", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
        template: function CreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_form_1_Template, 11, 3, "form", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2em 1.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDJlbSAxLjVlbSAwIDA7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/login/login.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");

      function LoginComponent_mat_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function LoginComponent_form_1_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tre\u015B\u0107 walidacji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_1_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Podaj prawid\u0142owe has\u0142o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_1_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " zaloguj ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_1_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onLogin(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_1_mat_error_5_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_1_mat_error_9_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_form_1_button_10_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
        }
      }

      function LoginComponent_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Podano niew\u0142a\u015Bciwy login lub has\u0142o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.isLoading = false;
          this.isUnauthorized = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
              _this.isLoading = false;

              if (!authStatus) {
                _this.isUnauthorized = true;
              }
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            if (form.invalid) {
              return;
            }

            this.isLoading = true;
            this.authService.login(form.value.login, form.value.password);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["matInput", "", "name", "login", "type", "login", "ngModel", "", "placeholder", "login", "required", ""], ["loginInput", "ngModel"], ["matInput", "", "name", "password", "type", "password", "ngModel", "", "placeholder", "has\u0142o", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_1_Template, 11, 3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_p_2_Template, 2, 0, "p", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUnauthorized);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2em 1.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMmVtIDEuNWVtIDAgMDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map