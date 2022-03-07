(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consignments-consignments-module"], {
    /***/
    "./src/app/consignments/consignment-create/consignment-create.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/consignments/consignment-create/consignment-create.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ConsignmentCreateComponent */

    /***/
    function srcAppConsignmentsConsignmentCreateConsignmentCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentCreateComponent", function () {
        return ConsignmentCreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _consignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../consignments.service */
      "./src/app/consignments/consignments.service.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/toast.service */
      "./src/app/shared/toast.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

      function ConsignmentCreateComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pole wymaga wyboru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("wymagana data od ", ctx_r4.formatDateForUser(ctx_r4.minDate), " do ", ctx_r4.formatDateForUser(ctx_r4.maxDate), ", format: M/D/RRRR");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r5.value == null ? null : _r5.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 5, max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r8.value == null ? null : _r8.value.length) || 0, "/35 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 3, max. 35 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r11.value == null ? null : _r11.value.length) || 0, "/10 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 1, max. 10 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r14.value == null ? null : _r14.value.length) || 0, "/10 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 10 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 12-345");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 12-345");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r20.value == null ? null : _r20.value.length) || 0, "/17 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 3, max. 17 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r23.value == null ? null : _r23.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r26.value == null ? null : _r26.value.length) || 0, "/20 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 20 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r29.value == null ? null : _r29.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: email, max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pole wymaga wyboru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r34.value == null ? null : _r34.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 5, max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r37.value == null ? null : _r37.value.length) || 0, "/35 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 3, max. 35 znak\xF3ww");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r40.value == null ? null : _r40.value.length) || 0, "/10 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 1, max. 10 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r43.value == null ? null : _r43.value.length) || 0, "/10 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_128_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 10 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_135_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 12-345");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 12-345");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_142_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r49.value == null ? null : _r49.value.length) || 0, "/17 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_143_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 3, max. 17 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_150_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r52.value == null ? null : _r52.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_151_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r55.value == null ? null : _r55.value.length) || 0, "/20 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 20 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_165_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r58.value == null ? null : _r58.value.length) || 0, "/60 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_166_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: email, max. 60 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_180_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pole wymaga wyboru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_span_186_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_187_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max 31kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_188_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 31kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_span_194_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_195_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max ", ctx_r69.wMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_196_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max. ", ctx_r70.wMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_span_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_203_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max ", ctx_r73.lMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_204_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max. ", ctx_r74.lMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_span_210_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_211_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max ", ctx_r77.hMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_212_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max. ", ctx_r78.hMax, "cm");
        }
      }

      function ConsignmentCreateComponent_form_3_span_219_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "szt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_220_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min 1 szt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_221_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "min. 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_229_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r83.value == null ? null : _r83.value.length) || 0, "/30 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_230_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 30 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_238_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (_r86.value == null ? null : _r86.value.length) || 0, "/100 znak\xF3w");
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_239_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max. 100 znak\xF3w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_span_249_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "z\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_250_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "max 11000.00z\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_251_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format 123.45z\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_span_259_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "z\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_hint_260_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 1234.56z\u0142");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_error_261_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format: 123.45z\u0142, nie mniej ni\u017C pobranie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentCreateComponent_form_3_mat_chip_266_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r97.size, " paczka DHL ");
        }
      }

      function ConsignmentCreateComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ConsignmentCreateComponent_form_3_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r98.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "p\u0142atnik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nadawca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "odbiorca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "trzecia strona?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConsignmentCreateComponent_form_3_mat_error_11_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "data nadania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r100.sdState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r101.sdState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-datepicker-toggle", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-datepicker", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConsignmentCreateComponent_form_3_mat_error_19_Template, 2, 2, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "nadawca:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "nazwa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r5.value = ctx_r102.trimDoubleSpace(_r5.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.snState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r104.snState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ConsignmentCreateComponent_form_3_mat_hint_27_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConsignmentCreateComponent_form_3_mat_error_28_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ulica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r8.value = ctx_r105.trimDoubleSpace(_r8.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r106.ssState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r107.ssState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ConsignmentCreateComponent_form_3_mat_hint_35_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ConsignmentCreateComponent_form_3_mat_error_36_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "dom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r11.value = ctx_r108.trimDoubleSpace(_r11.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r109.shState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r110.shState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ConsignmentCreateComponent_form_3_mat_hint_42_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ConsignmentCreateComponent_form_3_mat_error_43_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "lokal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r14.value = ctx_r111.maxTenDigit(_r14.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r112.saState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r113.saState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ConsignmentCreateComponent_form_3_mat_hint_49_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ConsignmentCreateComponent_form_3_mat_error_50_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "kod pocztowy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ConsignmentCreateComponent_form_3_Template_input_keydown_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r17.value = ctx_r114.formatPostalCode(_r17.value);
          })("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r17.value = ctx_r115.formatPostalCode(_r17.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r116.spcState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r117.spcState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ConsignmentCreateComponent_form_3_mat_hint_57_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ConsignmentCreateComponent_form_3_mat_error_58_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "miejscowo\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r20.value = ctx_r118.trimDoubleSpaceAndNumber(_r20.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r119.scState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r120.scState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ConsignmentCreateComponent_form_3_mat_hint_64_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ConsignmentCreateComponent_form_3_mat_error_65_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "osoba kontaktowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r23.value = ctx_r121.trimDoubleSpace(_r23.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r122.scpState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r123.scpState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ConsignmentCreateComponent_form_3_mat_hint_72_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ConsignmentCreateComponent_form_3_mat_error_73_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

            var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r26.value = ctx_r124.trimDoubleSpaceAndNotNumber(_r26.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r125.scphState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r126.scphState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ConsignmentCreateComponent_form_3_mat_hint_79_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ConsignmentCreateComponent_form_3_mat_error_80_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r127.sceState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r128.sceState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ConsignmentCreateComponent_form_3_mat_hint_87_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ConsignmentCreateComponent_form_3_mat_error_88_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "odbiorca:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "kraj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-select", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_mat_select_focus_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r129.cState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_mat_select_focusout_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r130.cState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Polska");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ConsignmentCreateComponent_form_3_mat_error_98_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "nazwa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r34.value = ctx_r131.trimDoubleSpace(_r34.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r132.rnState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r133.rnState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ConsignmentCreateComponent_form_3_mat_hint_105_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ConsignmentCreateComponent_form_3_mat_error_106_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "ulica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](112);

            var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r37.value = ctx_r134.trimDoubleSpace(_r37.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r135.rsState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r136.rsState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ConsignmentCreateComponent_form_3_mat_hint_113_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ConsignmentCreateComponent_form_3_mat_error_114_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "dom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r40.value = ctx_r137.trimDoubleSpace(_r40.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r138.rhState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r139.rhState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ConsignmentCreateComponent_form_3_mat_hint_120_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ConsignmentCreateComponent_form_3_mat_error_121_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "lokal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_125_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](126);

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r43.value = ctx_r140.maxTenDigit(_r43.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_125_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r141.raState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_125_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r142.raState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, ConsignmentCreateComponent_form_3_mat_hint_127_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, ConsignmentCreateComponent_form_3_mat_error_128_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "kod pocztowy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ConsignmentCreateComponent_form_3_Template_input_keydown_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](134);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r46.value = ctx_r143.formatPostalCode(_r46.value);
          })("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](134);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r46.value = ctx_r144.formatPostalCode(_r46.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r145.rpcState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r146.rpcState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, ConsignmentCreateComponent_form_3_mat_hint_135_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, ConsignmentCreateComponent_form_3_mat_error_136_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "miejscowo\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "input", 49, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_140_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](141);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r49.value = ctx_r147.trimDoubleSpaceAndNumber(_r49.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_140_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r148.rcState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_140_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r149.rcState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, ConsignmentCreateComponent_form_3_mat_hint_142_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, ConsignmentCreateComponent_form_3_mat_error_143_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "osoba kontaktowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 51, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_148_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149);

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r52.value = ctx_r150.trimDoubleSpace(_r52.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_148_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r151.rcpState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_148_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r152.rcpState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, ConsignmentCreateComponent_form_3_mat_hint_150_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, ConsignmentCreateComponent_form_3_mat_error_151_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 53, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_155_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](156);

            var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r55.value = ctx_r153.trimDoubleSpaceAndNotNumber(_r55.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_155_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r154.rcphState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_155_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r155.rcphState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, ConsignmentCreateComponent_form_3_mat_hint_157_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, ConsignmentCreateComponent_form_3_mat_error_158_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "input", 55, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_163_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r156.rceState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_163_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r157.rceState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, ConsignmentCreateComponent_form_3_mat_hint_165_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, ConsignmentCreateComponent_form_3_mat_error_166_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "paczka:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "rodzaj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-select", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_mat_select_focus_172_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r158.tState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_mat_select_focusout_172_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r159.tState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "paczka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "paleta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "koperta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, ConsignmentCreateComponent_form_3_mat_error_180_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "waga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 62, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_184_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](185);

            var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r63.value = ctx_r160.trimComma(_r63.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_184_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r161.weState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_184_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r162.weState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, ConsignmentCreateComponent_form_3_span_186_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, ConsignmentCreateComponent_form_3_mat_hint_187_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](188, ConsignmentCreateComponent_form_3_mat_error_188_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "d\u0142ugo\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "input", 65, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_192_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](193);

            var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r67.value = ctx_r163.trimComma(_r67.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_192_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r164.wiState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_192_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r165.wiState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, ConsignmentCreateComponent_form_3_span_194_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, ConsignmentCreateComponent_form_3_mat_hint_195_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, ConsignmentCreateComponent_form_3_mat_error_196_Template, 2, 1, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "szeroko\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "input", 67, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_200_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](201);

            var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r71.value = ctx_r166.trimComma(_r71.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_200_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r167.lState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_200_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r168.lState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, ConsignmentCreateComponent_form_3_span_202_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, ConsignmentCreateComponent_form_3_mat_hint_203_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, ConsignmentCreateComponent_form_3_mat_error_204_Template, 2, 1, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "wysoko\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "input", 69, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](209);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r75.value = ctx_r169.trimComma(_r75.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r170.hState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r171.hState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, ConsignmentCreateComponent_form_3_span_210_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, ConsignmentCreateComponent_form_3_mat_hint_211_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, ConsignmentCreateComponent_form_3_mat_error_212_Template, 2, 1, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "liczba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "input", 71, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_217_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](218);

            var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r79.value = ctx_r172.trimComma(_r79.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_217_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r173.qState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_217_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r174.qState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, ConsignmentCreateComponent_form_3_span_219_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, ConsignmentCreateComponent_form_3_mat_hint_220_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](221, ConsignmentCreateComponent_form_3_mat_error_221_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-checkbox", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "nonStandard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "zawarto\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "input", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_input_keyup_227_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](228);

            var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r83.value = ctx_r175.trimDoubleSpace(_r83.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_227_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r176.cnState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_227_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r177.cnState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, ConsignmentCreateComponent_form_3_mat_hint_229_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](230, ConsignmentCreateComponent_form_3_mat_error_230_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "uwagi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "textarea", 76, 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentCreateComponent_form_3_Template_textarea_keyup_235_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](228);

            var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r83.value = ctx_r178.trimDoubleSpace(_r83.value);
          })("focus", function ConsignmentCreateComponent_form_3_Template_textarea_focus_235_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r179.cmState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_textarea_focusout_235_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r180.cmState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, ConsignmentCreateComponent_form_3_mat_hint_238_Template, 2, 1, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, ConsignmentCreateComponent_form_3_mat_error_239_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "us\u0142ugi dodatkowe:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "mat-checkbox", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " za pobraniem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "kwota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 79, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_247_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r181.cvState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_247_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r182.cvState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, ConsignmentCreateComponent_form_3_span_249_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, ConsignmentCreateComponent_form_3_mat_hint_250_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](251, ConsignmentCreateComponent_form_3_mat_error_251_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-checkbox", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " ubezpieczenie przesy\u0142ki ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "warto\u015B\u0107");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 82, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ConsignmentCreateComponent_form_3_Template_input_focus_257_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r183.ivState = true;
          })("focusout", function ConsignmentCreateComponent_form_3_Template_input_focusout_257_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r184.ivState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, ConsignmentCreateComponent_form_3_span_259_Template, 2, 0, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, ConsignmentCreateComponent_form_3_mat_hint_260_Template, 2, 0, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, ConsignmentCreateComponent_form_3_mat_error_261_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " utw\xF3rz przesy\u0142k\u0119 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](266, ConsignmentCreateComponent_form_3_mat_chip_266_Template, 2, 1, "mat-chip", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " zam\xF3w kuriera ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("payerType").invalid && ctx_r1.form.get("payerType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("matDatepickerFilter", ctx_r1.weekendFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipmentDate").invalid && ctx_r1.form.get("shipmentDate").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.snState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperName").invalid && ctx_r1.form.get("shipperName").touched && !ctx_r1.snState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ssState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperStreet").invalid && ctx_r1.form.get("shipperStreet").touched && !ctx_r1.ssState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.shState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperHouseNumber").invalid && ctx_r1.form.get("shipperHouseNumber").touched && !ctx_r1.ssState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.saState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperApartmentNumber").invalid && ctx_r1.form.get("shipperApartmentNumber").touched && !ctx_r1.saState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.spcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperPostalCode").invalid && ctx_r1.form.get("shipperPostalCode").touched && !ctx_r1.spcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.scState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperCity").invalid && ctx_r1.form.get("shipperCity").touched && !ctx_r1.scState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.scpState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperContactPerson").invalid && ctx_r1.form.get("shipperContactPerson").touched && !ctx_r1.scpState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.scphState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperContactPhone").invalid && ctx_r1.form.get("shipperContactPhone").touched && !ctx_r1.scphState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sceState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("shipperContactEmail").invalid && ctx_r1.form.get("shipperContactEmail").touched && !ctx_r1.sceState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("country").invalid && ctx_r1.form.get("country").touched && !ctx_r1.cState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverName").invalid && ctx_r1.form.get("receiverName").touched && !ctx_r1.rnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rsState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverStreet").invalid && ctx_r1.form.get("receiverStreet").touched && !ctx_r1.rsState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rhState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverHouseNumber").invalid && ctx_r1.form.get("receiverHouseNumber").touched && !ctx_r1.rhState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.raState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverApartmentNumber").invalid && ctx_r1.form.get("receiverApartmentNumber").touched && !ctx_r1.raState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rpcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverPostalCode").invalid && ctx_r1.form.get("receiverPostalCode").touched && !ctx_r1.rpcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverCity").invalid && ctx_r1.form.get("receiverCity").touched && !ctx_r1.rcState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rcpState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverContactPerson").invalid && ctx_r1.form.get("receiverContactPerson").touched && !ctx_r1.rcpState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rcphState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverContactPhone").invalid && ctx_r1.form.get("receiverContactPhone").touched && !ctx_r1.rcphState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rceState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("receiverContactEmail").invalid && ctx_r1.form.get("receiverContactEmail").touched && !ctx_r1.rceState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("type").invalid && ctx_r1.form.get("type").touched && !ctx_r1.tState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.weState || ctx_r1.form.get("weight").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.weState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("weight").invalid && ctx_r1.form.get("weight").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.wiState || ctx_r1.form.get("width").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.wiState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("width").invalid && ctx_r1.form.get("width").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lState || ctx_r1.form.get("length").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("length").invalid && ctx_r1.form.get("length").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hState || ctx_r1.form.get("height").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("height").invalid && ctx_r1.form.get("height").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.qState || ctx_r1.form.get("quantity").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.qState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("quantity").invalid && ctx_r1.form.get("quantity").touched && !ctx_r1.qState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("content").invalid && ctx_r1.form.get("content").touched && !ctx_r1.cnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cmState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("comment").invalid && ctx_r1.form.get("comment").touched && !ctx_r1.cmState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cvState || ctx_r1.form.get("CoDValue").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cvState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("CoDValue").invalid && ctx_r1.form.get("CoDValue").touched && !ctx_r1.cvState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ivState || ctx_r1.form.get("insuranceValue").value != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ivState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("insuranceValue").invalid && ctx_r1.form.get("insuranceValue").touched && !ctx_r1.ivState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.size);
        }
      }

      var ConsignmentCreateComponent = /*#__PURE__*/function () {
        function ConsignmentCreateComponent(consignmentsService, authService, router, toastService) {
          _classCallCheck(this, ConsignmentCreateComponent);

          this.consignmentsService = consignmentsService;
          this.authService = authService;
          this.router = router;
          this.toastService = toastService;
          this.ivState = false;
          this.cvState = false;
          this.cmState = false;
          this.cnState = false;
          this.qState = false;
          this.hState = false;
          this.lState = false;
          this.wiState = false;
          this.weState = false;
          this.tState = false;
          this.rceState = false;
          this.rcState = false;
          this.rcpState = false;
          this.rcphState = false;
          this.rpchState = false;
          this.rpcState = false;
          this.raState = false;
          this.rhState = false;
          this.rsState = false;
          this.rnState = false;
          this.cState = false;
          this.sceState = false;
          this.scphState = false;
          this.scpState = false;
          this.scState = false;
          this.spcState = false;
          this.saState = false;
          this.ssState = false;
          this.shState = false;
          this.snState = false;
          this.sdState = false;
          this.isLoading = false;
          this.today = new Date();
          this.tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));
          this.in3days = new Date(this.today.setDate(this.today.getDate() + 2));
          this.minDate = new Date(this.tomorrow.getFullYear(), this.tomorrow.getMonth(), this.tomorrow.getDate());
          this.maxDate = new Date(this.in3days.getFullYear(), this.in3days.getMonth(), this.in3days.getDate());
          this.MAX_WEIGHT = 31;
          this.LONG = 120;
          this.SHORT = 60;
          this.LARGE = 76;
          this.SMALL = 36;
          this.HEAVY = 10.1;
          this.LIGHT = 1.1;

          this.weekendFilter = function (date) {
            var day = date.getDay();
            var saturday = 6;
            var sunday = 0;
            return day !== saturday && day !== sunday;
          };
        }

        _createClass(ConsignmentCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.createForm();
            this.setPieceValidators();
            this.setServiceValidators();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
              _this.isLoading = false;
            });
          }
        }, {
          key: "trimDoubleSpace",
          value: function trimDoubleSpace(string) {
            return string.replace(/\s\s+/g, ' ');
          }
        }, {
          key: "trimDoubleSpaceAndNumber",
          value: function trimDoubleSpaceAndNumber(string) {
            return this.trimDoubleSpace(string.replace(/\d+/g, ''));
          }
        }, {
          key: "trimDoubleSpaceAndNotNumber",
          value: function trimDoubleSpaceAndNotNumber(number) {
            return this.trimDoubleSpace(number.replace(/\D+/g, ''));
          }
        }, {
          key: "trimComma",
          value: function trimComma(number) {
            return number.replace(/\D+/g, '');
          }
        }, {
          key: "formatPostalCode",
          value: function formatPostalCode(postalCode) {
            if (postalCode.length < 4) postalCode = postalCode.replace(/\D+/g, '');
            if (postalCode.length == 2) postalCode = postalCode.concat('-');

            if (postalCode.length > 2) {
              postalCode = postalCode.replace(/\d\d-\d?\d?\D/g, postalCode.substring(0, postalCode.length - 1));
            }

            return postalCode;
          }
        }, {
          key: "maxTenDigit",
          value: function maxTenDigit(apartment) {
            if (apartment.length > 10) apartment = apartment.substring(0, 10);
            return apartment;
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              payerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('SHIPPER', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              shipmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              shipperName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aaaaa', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              shipperPostalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{2}-[0-9]{3}')]
              }),
              shipperCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aaa', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(17)]
              }),
              shipperStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aaa', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35)]
              }),
              shipperHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('aaa', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]
              }),
              shipperApartmentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]
              }),
              shipperContactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              shipperContactPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]
              }),
              shipperContactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('PL', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(2)]
              }),
              receiverName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bbbbb', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              receiverPostalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{2}-[0-9]{3}')]
              }),
              receiverCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bbb', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(17)]
              }),
              receiverStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bbb', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35)]
              }),
              receiverHouseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bbb', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]
              }),
              receiverApartmentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]
              }),
              receiverContactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              receiverContactPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]
              }),
              receiverContactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]
              }),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("ENVELOPE", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              }),
              width: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              }),
              length: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              }),
              height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              }),
              quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]
              }),
              nonStandard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
              content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('XXX', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]
              }),
              comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]
              }),
              CoD: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
              CoDValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              }),
              insurance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
              insuranceValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: null,
                disabled: true
              })
            });
          }
        }, {
          key: "formatDateForUser",
          value: function formatDateForUser(date) {
            var day = date.getDate().toString().padStart(2, '0');
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var year = date.getFullYear();
            return day + '-' + month + '-' + year;
          }
        }, {
          key: "formatDateForDhlApi",
          value: function formatDateForDhlApi(date) {
            var day = date.getDate().toString().padStart(2, '0');
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var year = date.getFullYear();
            return year + '-' + month + '-' + day;
          }
        }, {
          key: "setPieceValidators",
          value: function setPieceValidators() {
            var _this2 = this;

            var typeControl = this.form.get('type');
            this.weightControl = this.form.get('weight');
            this.widthControl = this.form.get('width');
            this.lengthControl = this.form.get('length');
            this.heightControl = this.form.get('height');
            typeControl.valueChanges.subscribe(function (type) {
              if (type === 'ENVELOPE') {
                _this2.weightControl.setValue(null);

                _this2.weightControl.disable();

                _this2.widthControl.setValue(null);

                _this2.widthControl.disable();

                _this2.lengthControl.setValue(null);

                _this2.lengthControl.disable();

                _this2.heightControl.setValue(null);

                _this2.heightControl.disable();
              } else if (type === 'PACKAGE' || type === 'PALLETTE') {
                _this2.wMax = _this2.LONG;
                _this2.lMax = _this2.LONG;
                _this2.hMax = _this2.LONG;

                _this2.weightControl.enable();

                _this2.weightControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(_this2.MAX_WEIGHT)]);

                _this2.setWeightListener();

                _this2.widthControl.enable();

                _this2.lengthControl.enable();

                _this2.heightControl.enable();

                _this2.setDimensionsValidators();
              }
            });
          }
        }, {
          key: "setDimensionsValidators",
          value: function setDimensionsValidators() {
            var _this3 = this;

            this.widthControl.valueChanges.subscribe(function (width) {
              if (width > _this3.SHORT) {
                if (_this3.lengthControl.value <= _this3.SHORT && _this3.heightControl.value <= _this3.SHORT) {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.SHORT;
                } else {
                  _this3.wMax = _this3.SHORT;

                  if (_this3.lengthControl.value > _this3.SHORT) {
                    _this3.lMax = _this3.LONG;
                    _this3.hMax = _this3.SHORT;
                  } else if (_this3.heightControl.value > _this3.SHORT) {
                    _this3.lMax = _this3.SHORT;
                    _this3.hMax = _this3.LONG;
                  }
                }
              } else {
                if (_this3.lengthControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.SHORT;
                } else if (_this3.heightControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.LONG;
                } else {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.LONG;
                }
              }

              _this3.updateDimensionsValidators();
            });
            this.lengthControl.valueChanges.subscribe(function (length) {
              if (length > _this3.SHORT) {
                if (_this3.widthControl.value <= _this3.SHORT && _this3.heightControl.value <= _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.SHORT;
                } else {
                  _this3.lMax = _this3.SHORT;

                  if (_this3.widthControl.value > _this3.SHORT) {
                    _this3.wMax = _this3.LONG;
                    _this3.hMax = _this3.SHORT;
                  } else if (_this3.heightControl.value > _this3.SHORT) {
                    _this3.wMax = _this3.SHORT;
                    _this3.hMax = _this3.LONG;
                  }
                }
              } else {
                if (_this3.widthControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.SHORT;
                } else if (_this3.heightControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.LONG;
                } else {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.LONG;
                }
              }

              _this3.updateDimensionsValidators();
            });
            this.heightControl.valueChanges.subscribe(function (height) {
              if (height > _this3.SHORT) {
                if (_this3.widthControl.value <= _this3.SHORT && _this3.lengthControl.value <= _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.LONG;
                } else {
                  _this3.hMax = _this3.SHORT;

                  if (_this3.widthControl.value > _this3.SHORT) {
                    _this3.wMax = _this3.LONG;
                    _this3.lMax = _this3.SHORT;
                  } else if (_this3.lengthControl.value > _this3.SHORT) {
                    _this3.wMax = _this3.SHORT;
                    _this3.lMax = _this3.LONG;
                  }
                }
              } else {
                if (_this3.widthControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.SHORT;
                  _this3.hMax = _this3.SHORT;
                } else if (_this3.lengthControl.value > _this3.SHORT) {
                  _this3.wMax = _this3.SHORT;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.SHORT;
                } else {
                  _this3.wMax = _this3.LONG;
                  _this3.lMax = _this3.LONG;
                  _this3.hMax = _this3.LONG;
                }
              }

              _this3.updateDimensionsValidators();
            });
          }
        }, {
          key: "updateDimensionsValidators",
          value: function updateDimensionsValidators() {
            this.updateDimensionValidators(this.widthControl, this.wMax);
            this.updateDimensionValidators(this.lengthControl, this.lMax);
            this.updateDimensionValidators(this.heightControl, this.hMax);
            this.determineSize();
          }
        }, {
          key: "updateDimensionValidators",
          value: function updateDimensionValidators(dimensionControl, maxValue) {
            dimensionControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(maxValue)]);
            dimensionControl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "setWeightListener",
          value: function setWeightListener() {
            var _this4 = this;

            this.weightControl.valueChanges.subscribe(function (weight) {
              _this4.weightControl.updateValueAndValidity({
                emitEvent: false
              });

              _this4.determineSize();
            });
          }
        }, {
          key: "determineSize",
          value: function determineSize() {
            this.weight = this.weightControl.value;
            this.width = this.widthControl.value;
            this.length = this.lengthControl.value;
            this.height = this.heightControl.value;

            if (this.weight && this.width && this.length && this.height) {
              var min = this.width < this.length ? this.width < this.height ? this.width : this.height : this.length < this.height ? this.length : this.height;
              var max = this.width > this.length ? this.width > this.height ? this.width : this.height : this.length > this.height ? this.length : this.height;

              if (this.weight < this.LIGHT && min + max < this.SMALL) {
                this.size = 'super lekka';
              } else if (this.weight < this.HEAVY && min + max < this.LARGE) {
                this.size = 'lekka';
              } else {
                this.size = 'ciężka';
              }
            } else {
              this.size = null;
            }
          }
        }, {
          key: "setServiceValidators",
          value: function setServiceValidators() {
            var CoD = this.form.get('CoD');
            var CoDValue = this.form.get('CoDValue');
            CoD.valueChanges.subscribe(function (selected) {
              if (selected) {
                CoDValue.enable();
                CoDValue.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(insuranceValue.value)]);
                insurance.setValue(true);
                insurance.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                insuranceValue.updateValueAndValidity;
              } else if (!selected) {
                CoDValue.setValue(null);
                CoDValue.disable();
                insurance.clearValidators();
              }

              CoDValue.updateValueAndValidity;
              insurance.updateValueAndValidity;
            });
            CoDValue.valueChanges.subscribe(function (value) {
              if (value > insuranceValue.value) {
                insuranceValue.setValue(value);
              }

              insuranceValue.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(CoDValue.value), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(11000)]);
              insuranceValue.updateValueAndValidity;
            });
            var insurance = this.form.get('insurance');
            var insuranceValue = this.form.get('insuranceValue');
            insurance.valueChanges.subscribe(function (selected) {
              if (selected) {
                insuranceValue.enable();
                insuranceValue.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(CoDValue.value), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(11000)]);
              } else if (!selected) {
                if (!selected && CoD.value) {
                  CoD.setValue(false);
                }

                insuranceValue.setValue(null);
                insuranceValue.disable();
                CoD.updateValueAndValidity;
              }

              insuranceValue.updateValueAndValidity;
            });
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            var _this5 = this;

            if (this.form.invalid) {
              return;
            }

            this.isLoading = true;
            var userId = this.authService.getUserId();
            var login = this.authService.getLogin();
            var form = this.form.value;
            var payerType = form.payerType;
            var pickedDate = form.shipmentDate;
            var shipmentDateTime = new Date(pickedDate.getFullYear(), pickedDate.getMonth(), pickedDate.getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()).toLocaleString('pl-PL');
            var shipmentDate = this.formatDateForDhlApi(pickedDate);
            var service = {
              CoD: form.CoD ? form.CoD : '',
              CoDValue: form.CoDValue ? form.CoDValue : '',
              insurance: form.insurance ? form.insurance : '',
              insuranceValue: form.insuranceValue ? form.insuranceValue : ''
            };
            var shipper = {
              name: form.shipperName,
              postalCode: form.shipperPostalCode.replace('-', ''),
              city: form.shipperCity,
              street: form.shipperStreet,
              houseNumber: form.shipperHouseNumber,
              apartmentNumber: form.shipperApartmentNumber ? form.shipperApartmentNumber.toString() : '',
              contactPerson: form.shipperContactPerson ? form.shipperContactPerson : '',
              contactPhone: form.shipperContactPhone ? form.shipperContactPhone : '',
              contactEmail: form.shipperContactEmail ? form.shipperContactEmail : ''
            };
            var receiver = {
              country: form.country,
              name: form.receiverName,
              postalCode: form.receiverPostalCode.replace('-', ''),
              city: form.receiverCity,
              street: form.receiverStreet,
              houseNumber: form.receiverHouseNumber,
              apartmentNumber: form.receiverApartmentNumber ? form.receiverApartmentNumber.toString() : '',
              contactPerson: form.receiverContactPerson ? form.receiverContactPerson : '',
              contactPhone: form.receiverContactPhone ? form.receiverContactPhone : '',
              contactEmail: form.receiverContactEmail ? form.receiverContactEmail : ''
            };
            var piece = {
              type: form.type,
              weight: form.weight ? form.weight : '',
              width: form.width ? form.width : '',
              length: form.length ? form.length : '',
              height: form.height ? form.height : '',
              quantity: form.quantity,
              nonStandard: form.nonStandard ? true : false
            };
            var comment = form.comment ? form.comment : '';
            var content = form.content;
            var consignment = {
              userId: userId,
              login: login,
              shipper: shipper,
              receiver: receiver,
              piece: piece,
              payerType: payerType,
              service: service,
              shipmentDate: shipmentDate,
              comment: comment,
              content: content,
              shipmentDateTime: shipmentDateTime
            };
            this.consignmentsService.createConsignment(consignment).then(function (response) {
              _this5.isLoading = false;

              if (response.status === 400) {
                _this5.toastService.showToast('Coś poszło nie tak   ; /');
              } else {
                _this5.form.reset();

                var consignmentId = response.consignmentId;

                _this5.toastService.showToast(response.message);

                _this5.router.navigate(['consignments', consignmentId]);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return ConsignmentCreateComponent;
      }();

      ConsignmentCreateComponent.ɵfac = function ConsignmentCreateComponent_Factory(t) {
        return new (t || ConsignmentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_consignments_service__WEBPACK_IMPORTED_MODULE_2__["ConsignmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]));
      };

      ConsignmentCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsignmentCreateComponent,
        selectors: [["ng-component"]],
        decls: 4,
        vars: 2,
        consts: [[1, "mat-title"], [4, "ngIf"], ["id", "newConsignment", 3, "formGroup", "submit", 4, "ngIf"], ["id", "newConsignment", 3, "formGroup", "submit"], ["appearance", "fill", 1, "short"], ["formControlName", "payerType"], ["value", "SHIPPER"], ["value", "RECEIVER"], ["value", "USER"], ["appearance", "fill"], ["matInput", "", "formControlName", "shipmentDate", 1, "number", 3, "matDatepicker", "min", "max", "matDatepickerFilter", "focus", "focusout"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mat-h3"], ["appearance", "fill", 1, "long"], ["matInput", "", "type", "text", "formControlName", "shipperName", "maxlength", "60", 3, "keyup", "focus", "focusout"], ["shipperName", ""], ["align", "end", 4, "ngIf"], ["appearance", "fill", 1, "medium"], ["matInput", "", "type", "text", "formControlName", "shipperStreet", "maxlength", "35", 3, "keyup", "focus", "focusout"], ["shipperStreet", ""], ["appearance", "fill", 1, "veryShort"], ["matInput", "", "type", "text", "formControlName", "shipperHouseNumber", "maxlength", "10", 3, "keyup", "focus", "focusout"], ["shipperHouseNumber", ""], ["matInput", "", "type", "number", "min", "1", "formControlName", "shipperApartmentNumber", 3, "keyup", "focus", "focusout"], ["shipperApartmentNumber", ""], ["matInput", "", "type", "tel", "formControlName", "shipperPostalCode", "maxlength", "6", 3, "keydown", "keyup", "focus", "focusout"], ["shipperPostalCode", ""], ["matInput", "", "type", "text", "formControlName", "shipperCity", "maxlength", "17", 3, "keyup", "focus", "focusout"], ["shipperCity", ""], ["matInput", "", "type", "text", "formControlName", "shipperContactPerson", "maxlength", "60", 3, "keyup", "focus", "focusout"], ["shipperContactPerson", ""], ["matInput", "", "type", "tel", "formControlName", "shipperContactPhone", "maxlength", "20", 3, "keyup", "focus", "focusout"], ["shipperContactPhone", ""], ["matInput", "", "type", "email", "formControlName", "shipperContactEmail", "maxlength", "60", 3, "focus", "focusout"], ["shipperContactEmail", ""], ["formControlName", "country", 3, "focus", "focusout"], ["country", ""], ["value", "PL"], ["matInput", "", "type", "text", "formControlName", "receiverName", "maxlength", "60", 3, "keyup", "focus", "focusout"], ["receiverName", ""], ["matInput", "", "type", "text", "formControlName", "receiverStreet", "maxlength", "35", 3, "keyup", "focus", "focusout"], ["receiverStreet", ""], ["matInput", "", "type", "text", "formControlName", "receiverHouseNumber", "maxlength", "10", 3, "keyup", "focus", "focusout"], ["receiverHouseNumber", ""], ["matInput", "", "type", "number", "min", "1", "formControlName", "receiverApartmentNumber", 3, "keyup", "focus", "focusout"], ["receiverApartmentNumber", ""], ["matInput", "", "type", "tel", "formControlName", "receiverPostalCode", "maxlength", "6", 3, "keydown", "keyup", "focus", "focusout"], ["receiverPostalCode", ""], ["matInput", "", "type", "text", "formControlName", "receiverCity", "maxlength", "17", 3, "keyup", "focus", "focusout"], ["receiverCity", ""], ["matInput", "", "type", "text", "formControlName", "receiverContactPerson", "maxlength", "60", 3, "keyup", "focus", "focusout"], ["receiverContactPerson", ""], ["matInput", "", "type", "tel", "formControlName", "receiverContactPhone", "maxlength", "20", 3, "keyup", "focus", "focusout"], ["receiverContactPhone", ""], ["matInput", "", "type", "email", "formControlName", "receiverContactEmail", "maxlength", "60", 3, "focus", "focusout"], ["receiverContactEmail", ""], ["formControlName", "type", 3, "focus", "focusout"], ["type", ""], ["value", "PACKAGE"], ["value", "PALLETTE"], ["value", "ENVELOPE"], ["matInput", "", "type", "number", "formControlName", "weight", 1, "right-align", "number", 3, "keyup", "focus", "focusout"], ["weight", ""], ["matSuffix", "", 4, "ngIf"], ["matInput", "", "type", "number", "formControlName", "width", 1, "right-align", "number", 3, "keyup", "focus", "focusout"], ["width", ""], ["matInput", "", "type", "number", "formControlName", "length", 1, "right-align", "number", 3, "keyup", "focus", "focusout"], ["length", ""], ["matInput", "", "type", "number", "formControlName", "height", 1, "right-align", "number", 3, "keyup", "focus", "focusout"], ["height", ""], ["matInput", "", "type", "number", "formControlName", "quantity", 1, "right-align", "number", 3, "keyup", "focus", "focusout"], ["quantity", ""], ["formControlName", "nonStandard", "labelPosition", "before"], ["matInput", "", "type", "text", "formControlName", "content", "maxlength", "30", 3, "keyup", "focus", "focusout"], ["content", ""], ["matInput", "", "type", "text", "formControlName", "comment", "maxlength", "100", 3, "keyup", "focus", "focusout"], ["comment", ""], ["formControlName", "CoD", "labelPosition", "before"], ["matInput", "", "type", "number", "formControlName", "CoDValue", 1, "right-align", "number", 3, "focus", "focusout"], ["CoDValue", ""], ["formControlName", "insurance", "labelPosition", "before"], ["matInput", "", "type", "number", "formControlName", "insuranceValue", 1, "right-align", "number", 3, "focus", "focusout"], ["insuranceValue", ""], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], ["color", "primary", "selected", "", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "disabled", ""], ["align", "end"], ["matSuffix", ""], ["color", "primary", "selected", ""]],
        template: function ConsignmentCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nowa przesy\u0142ka krajowa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsignmentCreateComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConsignmentCreateComponent_form_3_Template, 270, 73, "form", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChip"]],
        styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 0 0.2em 1em 0.5em;\n}\n\nmat-form-field.veryShort[_ngcontent-%COMP%] {\n  width: 5em;\n}\n\nmat-form-field.short[_ngcontent-%COMP%] {\n  width: 8em;\n}\n\nmat-form-field.medium[_ngcontent-%COMP%] {\n  width: 20em;\n}\n\nmat-form-field.long[_ngcontent-%COMP%] {\n  \n  width: 95%;\n  max-width: 50em;\n}\n\n\n\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: red !important;\n}\n\n\n\n#newConsignment[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .max-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  padding: 0.5em 0.5em 0 0.5em !important;\n}\n\n\n\n#newConsignment[_ngcontent-%COMP%]   .mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.25em 0 0.25em 0 !important;\n}\n\n\n\n#newConsignment[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\nmat-hint[_ngcontent-%COMP%], mat-error[_ngcontent-%COMP%] {\n  margin-top: -2px;\n  font-size: 1.2em;\n}\n\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\nspan[matSuffix][_ngcontent-%COMP%] {\n  margin-left: 0.3em;\n}\n\ninput.number[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.number[_ngcontent-%COMP%]::-webkit-inner-spin-button, input.number[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\ninput.number[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n\n\n.mat-chip-list-wrapper[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2em 1.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LWNyZWF0ZS9jb25zaWdubWVudC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBLG1DQUFtQzs7QUFDbkM7RUFDRSx1Q0FBdUM7QUFDekM7O0FBQ0EsbUNBQW1DOztBQUNuQztFQUNFLHFDQUFxQztBQUN2Qzs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSwwRkFBMEY7O0FBQzFGO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LWNyZWF0ZS9jb25zaWdubWVudC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMCAwLjJlbSAxZW0gMC41ZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkLnZlcnlTaG9ydCB7XG4gIHdpZHRoOiA1ZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkLnNob3J0IHtcbiAgd2lkdGg6IDhlbTtcbn1cblxubWF0LWZvcm0tZmllbGQubWVkaXVtIHtcbiAgd2lkdGg6IDIwZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkLmxvbmcge1xuICAvKiB3aWR0aDogY2FsYygxMDAlIC0gJGxlZnRNYXJnaW4pOyAqL1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDUwZW07XG59XG5cbi8qIGRsYWN6ZWdvIHRvIGfDs3dubyBuaWUgZHppYcWCYT8hICovXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG4vKiBkbGFjemVnbyB0byBnw7N3bm8gbmllIGR6aWHFgmE/ISAqL1xuI25ld0NvbnNpZ25tZW50IG1hdC1mb3JtLWZpZWxkIC5tYXgtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gMCAwLjVlbSAhaW1wb3J0YW50O1xufVxuLyogZGxhY3plZ28gdG8gZ8Ozd25vIG5pZSBkemlhxYJhPyEgKi9cbiNuZXdDb25zaWdubWVudCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAwICFpbXBvcnRhbnQ7XG59XG4vKiBkbGFjemVnbyB0byBnw7N3bm8gbmllIGR6aWHFgmE/ISAqL1xuI25ld0NvbnNpZ25tZW50IG1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxubWF0LWhpbnQsXG5tYXQtZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuc3BhblttYXRTdWZmaXhdIHtcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xufVxuXG5pbnB1dC5udW1iZXI6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dC5udW1iZXI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dC5udW1iZXI6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0Lm51bWJlciB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4vKiB0ZSBzdHlsZSB3IG9nw7NsZSBuaWUgZHppYcWCYWrEhSBhIHBvd2lubnkgxbxlYnkgdGVuIGNoaXBzIHd5xZt3aWV0bGHFgiBzacSZIG9ib2sgcHJ6eWNpc2vDs3cgKi9cbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAyZW0gMS41ZW0gMCAwO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './consignment-create.component.html',
            styleUrls: ['./consignment-create.component.css']
          }]
        }], function () {
          return [{
            type: _consignments_service__WEBPACK_IMPORTED_MODULE_2__["ConsignmentsService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
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
    "./src/app/consignments/consignment-list/cdk-detail-row.directive.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/consignments/consignment-list/cdk-detail-row.directive.ts ***!
      \***************************************************************************/

    /*! exports provided: CdkDetailRowDirective */

    /***/
    function srcAppConsignmentsConsignmentListCdkDetailRowDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDetailRowDirective", function () {
        return CdkDetailRowDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CdkDetailRowDirective = /*#__PURE__*/function () {
        function CdkDetailRowDirective(vcRef) {
          _classCallCheck(this, CdkDetailRowDirective);

          this.vcRef = vcRef;
        }

        _createClass(CdkDetailRowDirective, [{
          key: "expended",
          get: function get() {
            return this.opened;
          }
        }, {
          key: "cdkDetailRow",
          set: function set(value) {
            if (value !== this.row) {
              this.row = value;
            }
          }
        }, {
          key: "template",
          set: function set(value) {
            if (value !== this.tRef) {
              this.tRef = value;
            }
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.toggle();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.opened) {
              this.vcRef.clear();
            } else {
              this.render();
            }

            this.opened = this.vcRef.length > 0;
          }
        }, {
          key: "render",
          value: function render() {
            this.vcRef.clear();

            if (this.tRef && this.row) {
              this.vcRef.createEmbeddedView(this.tRef, {
                $implicit: this.row
              });
            }
          }
        }]);

        return CdkDetailRowDirective;
      }();

      CdkDetailRowDirective.ɵfac = function CdkDetailRowDirective_Factory(t) {
        return new (t || CdkDetailRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      CdkDetailRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDetailRowDirective,
        selectors: [["", "cdkDetailRow", ""]],
        hostVars: 2,
        hostBindings: function CdkDetailRowDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkDetailRowDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.expended);
          }
        },
        inputs: {
          cdkDetailRow: "cdkDetailRow",
          template: ["cdkDetailRowTpl", "template"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDetailRowDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDetailRow]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, {
          expended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expanded']
          }],
          cdkDetailRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDetailRowTpl']
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/consignments/consignment-list/consignment-list.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/consignments/consignment-list/consignment-list.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConsignmentListComponent */

    /***/
    function srcAppConsignmentsConsignmentListConsignmentListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentListComponent", function () {
        return ConsignmentListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _consignments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../consignments.service */
      "./src/app/consignments/consignments.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./cdk-detail-row.directive */
      "./src/app/consignments/consignment-list/cdk-detail-row.directive.ts");

      function ConsignmentListComponent_div_0_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConsignmentListComponent_div_0_mat_header_cell_9_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return $event ? ctx_r24.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentListComponent_div_0_mat_cell_10_Template_mat_cell_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConsignmentListComponent_div_0_mat_cell_10_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var element_r26 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return $event ? ctx_r29.selection.toggle(element_r26) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(element_r26));
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " id przesy\u0142ki ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r30.consignmentId);
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " u\u017Cytkownik ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r31.login);
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nadawca ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r32.shipperName);
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " odbiorca ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.receiverName, " ");
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.trackAndTraceInfo[0].status, " ");
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " data nadania ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.shipmentDateTime, " ");
        }
      }

      function ConsignmentListComponent_div_0_mat_header_cell_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell", 31);
        }
      }

      function ConsignmentListComponent_div_0_mat_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentListComponent_div_0_mat_cell_31_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentListComponent_div_0_mat_cell_31_Template_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var element_r36 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r39.onLabelPrint(element_r36.consignmentId);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_mat_header_row_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ConsignmentListComponent_div_0_mat_row_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row", 34);
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDetailRow", row_r40)("cdkDetailRowTpl", _r22);
        }
      }

      function ConsignmentListComponent_div_0_mat_progress_spinner_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 35);
        }
      }

      function ConsignmentListComponent_div_0_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentListComponent_div_0_button_37_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.deleteSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentListComponent_div_0_ng_template_43_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var status_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r45.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r45.timestamp);
        }
      }

      function ConsignmentListComponent_div_0_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConsignmentListComponent_div_0_ng_template_43_ng_container_12_Template, 6, 2, "ng-container", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentListComponent_div_0_ng_template_43_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var element_r43 = ctx.$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.showDetails(element_r43.consignmentId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " szczeg\xF3\u0142y ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("cols", ctx_r23.detailColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("id ", element_r43.consignmentId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nadawca ", element_r43.shipperName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("odbiorca ", element_r43.receiverName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r43.trackAndTraceInfo);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 100];
      };

      function ConsignmentListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lista przesy\u0142ek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ConsignmentListComponent_div_0_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-table", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConsignmentListComponent_div_0_mat_header_cell_9_Template, 2, 2, "mat-header-cell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConsignmentListComponent_div_0_mat_cell_10_Template, 2, 1, "mat-cell", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConsignmentListComponent_div_0_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConsignmentListComponent_div_0_mat_cell_13_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ConsignmentListComponent_div_0_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConsignmentListComponent_div_0_mat_cell_16_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ConsignmentListComponent_div_0_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConsignmentListComponent_div_0_mat_cell_19_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConsignmentListComponent_div_0_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ConsignmentListComponent_div_0_mat_cell_22_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ConsignmentListComponent_div_0_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ConsignmentListComponent_div_0_mat_cell_25_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ConsignmentListComponent_div_0_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConsignmentListComponent_div_0_mat_cell_28_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ConsignmentListComponent_div_0_mat_header_cell_30_Template, 1, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConsignmentListComponent_div_0_mat_cell_31_Template, 7, 0, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ConsignmentListComponent_div_0_mat_header_row_32_Template, 1, 0, "mat-header-row", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ConsignmentListComponent_div_0_mat_row_33_Template, 1, 2, "mat-row", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ConsignmentListComponent_div_0_mat_progress_spinner_34_Template, 1, 0, "mat-progress-spinner", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-toolbar", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ConsignmentListComponent_div_0_button_37_Template, 3, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-paginator", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ConsignmentListComponent_div_0_Template_mat_paginator_page_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.pageEvent = ctx_r50.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " add_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " utw\xF3rz now\u0105 przesy\u0142k\u0119 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ConsignmentListComponent_div_0_ng_template_43_Template, 15, 5, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selection.hasValue());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      }

      var SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;

      var ConsignmentListComponent = /*#__PURE__*/function () {
        function ConsignmentListComponent(consignmentsService, router, authService) {
          _classCallCheck(this, ConsignmentListComponent);

          this.consignmentsService = consignmentsService;
          this.router = router;
          this.authService = authService;
          this.isAuthenticated = false;
          this.displayedColumns = ['select', 'consignmentId', 'login', 'shipperName', 'receiverName', 'status', 'shipmentDateTime', 'action'];
          this.detailColumns = this.displayedColumns.length - 1;
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);

          this.isExpansionDetailRow = function (row) {
            return row.hasOwnProperty('detailRow');
          };
        }

        _createClass(ConsignmentListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.isLoading = true;
            this.isAuthenticated = this.authService.getIsAuth();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this6.isAuthenticated = isAuthenticated;
            });
            this.listConsignments();
          }
        }, {
          key: "listConsignments",
          value: function listConsignments() {
            var _this7 = this;

            this.consignmentsService.listConsignments().then(function (response) {
              _this7.isLoading = false;
              _this7.consignments = response.consignments;
              _this7.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this7.consignments);
              _this7.dataSource.paginator = _this7.paginator;
              var sortState = {
                active: 'shipmentDateTime',
                direction: 'desc'
              };
              _this7.sort.active = sortState.active;
              _this7.sort.direction = sortState.direction;

              _this7.sort.sortChange.emit(sortState);

              _this7.dataSource.sort = _this7.sort;
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
            this.dataSource.filter = filterValue;
          }
        }, {
          key: "showDetails",
          value: function showDetails(shipmentId) {
            this.router.navigate(['./consignments/' + shipmentId]);
          }
        }, {
          key: "deleteSelected",
          value: function deleteSelected() {
            var _this8 = this;

            var selectedConsignments = [];
            this.selection.selected.forEach(function (el) {
              selectedConsignments.push(el.consignmentId);
            });
            this.consignmentsService.deleteConsignments(selectedConsignments).then(function () {
              _this8.listConsignments();
            }, function (error) {});
          }
        }, {
          key: "handlePage",
          value: function handlePage(event) {
            if (this.selection.selected.length > event.pageSize) {
              this.selection.clear();
              this.selectRows();
            }
          }
        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.paginator.length;
            var pageSize = this.dataSource.paginator.pageSize;
            return numSelected === numRows || numSelected === pageSize ? true : false;
          }
        }, {
          key: "masterToggle",
          value: function masterToggle() {
            this.isAllSelected() ? this.selection.clear() : this.selectRows();
          }
        }, {
          key: "selectRows",
          value: function selectRows() {
            var _this9 = this;

            this.dataSource._pageData(this.dataSource._orderData(this.dataSource.filteredData)).forEach(function (row) {
              return _this9.selection.select(row);
            });
          }
        }, {
          key: "onLabelPrint",
          value: function onLabelPrint(consignmentId) {
            var _this10 = this;

            this.isLoading = true; // teraz, aby pobrać etykietę, backend pobiera z dhl całą przesyłkę i generuje pdfa (za każdym razem!)
            // a mógłby sprawdzić, czy plik jest już w /files i stamtąd pobrać
            // a w sumie etykieta pobierana będzie dla każdej utworzonej przesyłki więc może generować ją przy tworzeniu przesyłki i adres do etykiety zapisywać w db?
            // a może pdf'a zapisywać w db?

            this.consignmentsService.getConsignment(consignmentId).then(function (data) {
              var labelPath = SERVER_URL + data.labelPath;
              _this10.isLoading = false;
              window.open(labelPath, '_blank');
            }, function (error) {});
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return ConsignmentListComponent;
      }();

      ConsignmentListComponent.ɵfac = function ConsignmentListComponent_Factory(t) {
        return new (t || ConsignmentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_consignments_service__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
      };

      ConsignmentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsignmentListComponent,
        selectors: [["app-consignment-list"]],
        viewQuery: function ConsignmentListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "mat-title"], [1, "filter"], ["matInput", "", "placeholder", "wyszukaj przesy\u0142k\u0119", 3, "keyup"], [1, "list-container"], ["matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "select", 1, "mat-col-checkbox"], [4, "matHeaderCellDef"], [3, "click", 4, "matCellDef"], ["matColumnDef", "consignmentId"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "login"], ["matColumnDef", "shipperName"], ["matColumnDef", "receiverName"], ["matColumnDef", "status"], ["matColumnDef", "shipmentDateTime"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], ["matRipple", "", "class", "element-row", 3, "cdkDetailRow", "cdkDetailRowTpl", 4, "matRowDef", "matRowDefColumns"], ["color", "primary", "mode", "indeterminate", 4, "ngIf"], [1, "toolbar"], ["mat-button", "", "class", "delete-button", "matTooltip", "usu\u0144 wybrane", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], ["pageSize", "10", 3, "pageSizeOptions", "page"], ["mat-raised-button", "", "color", "accent", "routerLink", "create"], [1, "material-icons"], ["tpl", ""], [3, "checked", "indeterminate", "change"], [3, "click"], [3, "checked", "change"], ["mat-sort-header", ""], ["mat-raised-button", "", "color", "primary", "matTooltip", "utw\xF3rz podobn\u0105", "matTooltipPosition", "above", 1, "edit-button", 3, "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "wydrukuj etykiet\u0119", "matTooltipPosition", "above", 1, "edit-button", 3, "click"], ["matRipple", "", 1, "element-row", 3, "cdkDetailRow", "cdkDetailRowTpl"], ["color", "primary", "mode", "indeterminate"], ["mat-button", "", "matTooltip", "usu\u0144 wybrane", "matTooltipPosition", "above", 1, "delete-button", 3, "click"], [1, "mat-row", "detail-row"], [3, "cols"], [4, "ngFor", "ngForOf"], ["mat-button", "", "matTooltip", "szczeg\xF3\u0142y przesy\u0142ki", 3, "click"]],
        template: function ConsignmentListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConsignmentListComponent_div_0_Template, 45, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_9__["CdkDetailRowDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: [".detail-row[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  border-bottom: 2px solid #ffd740;\n}\n\n.element-row[_ngcontent-%COMP%] {\n  min-height: 4em;\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.element-row[_ngcontent-%COMP%]:not(.expanded) {\n  cursor: pointer;\n}\n\n.element-row[_ngcontent-%COMP%]:not(.expanded):hover {\n  background: #f5f5f5;\n}\n\n.element-row[_ngcontent-%COMP%]:not(.expanded):hover   button[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.mat-column-select[_ngcontent-%COMP%] {\n  flex: 0 0 4% !important;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  visibility: hidden;\n  margin: 0 0 0 0.5em;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2em 1.5em 0 0;\n}\n\nmat-progress-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LWxpc3QvY29uc2lnbm1lbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LWxpc3QvY29uc2lnbm1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC1yb3cge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZDc0MDtcbn1cblxuLmVsZW1lbnQtcm93IHtcbiAgbWluLWhlaWdodDogNGVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVsZW1lbnQtcm93Om5vdCguZXhwYW5kZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLmVsZW1lbnQtcm93Om5vdCguZXhwYW5kZWQpOmhvdmVyIGJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdCB7XG4gIGZsZXg6IDAgMCA0JSAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDAgMC41ZW07XG59XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5tYXQtdG9vbGJhci1yb3cge1xuICBwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDJlbSAxLjVlbSAwIDA7XG59XG5cbm1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-consignment-list',
            templateUrl: './consignment-list.component.html',
            styleUrls: ['./consignment-list.component.css']
          }]
        }], function () {
          return [{
            type: _consignments_service__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/consignments/consignment-list/polish-paginator-intl.ts":
    /*!************************************************************************!*\
      !*** ./src/app/consignments/consignment-list/polish-paginator-intl.ts ***!
      \************************************************************************/

    /*! exports provided: getPolishPaginatorIntl */

    /***/
    function srcAppConsignmentsConsignmentListPolishPaginatorIntlTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPolishPaginatorIntl", function () {
        return getPolishPaginatorIntl;
      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");

      var polishRangeLabel = function polishRangeLabel(page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
          return "0 z ".concat(length);
        }

        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " - ").concat(endIndex, " z ").concat(length);
      };

      function getPolishPaginatorIntl() {
        var paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
        paginatorIntl.itemsPerPageLabel = 'liczba przesyłek na stronie:';
        paginatorIntl.nextPageLabel = 'poprzednia strona';
        paginatorIntl.previousPageLabel = 'następna strona';
        paginatorIntl.getRangeLabel = polishRangeLabel;
        return paginatorIntl;
      }
      /***/

    },

    /***/
    "./src/app/consignments/consignment-show/consignment-show.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/consignments/consignment-show/consignment-show.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConsignmentShowComponent */

    /***/
    function srcAppConsignmentsConsignmentShowConsignmentShowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentShowComponent", function () {
        return ConsignmentShowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _consignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../consignments.service */
      "./src/app/consignments/consignments.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");

      function ConsignmentShowComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("nr ", ctx_r0.consignment == null ? null : ctx_r0.consignment.consignmentId, "");
        }
      }

      function ConsignmentShowComponent_mat_spinner_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.consignment == null ? null : ctx_r3.consignment.shipper.contactPerson);
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" tel.: ", ctx_r4.consignment.shipper.contactPhone, "");
        }
      }

      function ConsignmentShowComponent_div_4_mat_label_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("email: ", ctx_r5.consignment.shipper.contactEmail, "");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.consignment == null ? null : ctx_r6.consignment.receiver.contactPerson);
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("tel.: ", ctx_r7.consignment == null ? null : ctx_r7.consignment.receiver.contactPhone, "");
        }
      }

      function ConsignmentShowComponent_div_4_mat_label_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("email: ", ctx_r8.consignment == null ? null : ctx_r8.consignment.receiver.contactEmail, "");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_65_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "* paczka niestandardowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsignmentShowComponent_div_4_ng_container_65_ng_container_7_Template, 4, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("masa: ", ctx_r9.consignment == null ? null : ctx_r9.consignment.piece.weight, "kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("wymiary: ", ctx_r9.consignment == null ? null : ctx_r9.consignment.piece.width, " x ", ctx_r9.consignment == null ? null : ctx_r9.consignment.piece.length, " x ", ctx_r9.consignment == null ? null : ctx_r9.consignment.piece.height, " [cm]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.consignment == null ? null : ctx_r9.consignment.piece.nonStandard);
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("uwagi: ", ctx_r10.consignment.comment, "");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_69_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("kwota pobrania: ", ctx_r16.consignment.service.CoDValue, "z\u0142");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_69_mat_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("kwota ubezpieczenia: ", ctx_r17.consignment.service.insuranceValue, "z\u0142");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "opcje:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConsignmentShowComponent_div_4_ng_container_69_ng_container_5_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConsignmentShowComponent_div_4_ng_container_69_mat_label_6_Template, 2, 1, "mat-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.consignment.service.CoD);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.consignment.service.insurance);
        }
      }

      function ConsignmentShowComponent_div_4_ng_template_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_76_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var trackAndTraceInfo_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", trackAndTraceInfo_r18.status, " ");
        }
      }

      function ConsignmentShowComponent_div_4_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsignmentShowComponent_div_4_ng_container_76_ng_template_2_Template, 1, 1, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var trackAndTraceInfo_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trackAndTraceInfo_r18.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trackAndTraceInfo_r18.timestamp);
        }
      }

      function ConsignmentShowComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "nadawca:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ConsignmentShowComponent_div_4_ng_container_29_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ConsignmentShowComponent_div_4_ng_container_30_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ConsignmentShowComponent_div_4_mat_label_32_Template, 2, 1, "mat-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "odbiorca:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ConsignmentShowComponent_div_4_ng_container_54_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ConsignmentShowComponent_div_4_ng_container_55_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ConsignmentShowComponent_div_4_mat_label_57_Template, 2, 1, "mat-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "przesy\u0142ka:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ConsignmentShowComponent_div_4_ng_container_65_Template, 8, 5, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ConsignmentShowComponent_div_4_ng_container_68_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ConsignmentShowComponent_div_4_ng_container_69_Template, 7, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-vertical-stepper", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ConsignmentShowComponent_div_4_ng_template_75_Template, 2, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ConsignmentShowComponent_div_4_ng_container_76_Template, 7, 2, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentShowComponent_div_4_Template_button_click_78_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.open(ctx_r21.consignment.labelPath);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " poka\u017C etykiet\u0119 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentShowComponent_div_4_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.open(ctx_r23.consignment.letterPath);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " poka\u017C list przewozowy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsignmentShowComponent_div_4_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " - usu\u0144 przesy\u0142k\u0119 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " + utw\xF3rz now\u0105 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " + utw\xF3rz podobn\u0105 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " zam\xF3w kuriera ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("w\u0142a\u015Bciciel: ", ctx_r2.consignment == null ? null : ctx_r2.consignment.login, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("data: ", ctx_r2.consignment == null ? null : ctx_r2.consignment.shipmentDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.postalCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.street);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.houseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.apartmentNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.contactPerson) && (ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.name.toLowerCase()) !== (ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.contactPerson.toLowerCase()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.contactPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.consignment == null ? null : ctx_r2.consignment.shipper.contactEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.postalCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.street);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.houseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.apartmentNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.contactPerson) && (ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.name.toLowerCase()) !== (ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.contactPerson.toLowerCase()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.contactPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.consignment == null ? null : ctx_r2.consignment.receiver.contactEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.consignment == null ? null : ctx_r2.consignment.piece.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.consignment == null ? null : ctx_r2.consignment.piece.type) !== "ENVELOPE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("zawarto\u015B\u0107: ", ctx_r2.consignment == null ? null : ctx_r2.consignment.content, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.consignment == null ? null : ctx_r2.consignment.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.consignment == null ? null : ctx_r2.consignment.service.CoD) || (ctx_r2.consignment == null ? null : ctx_r2.consignment.service.insurance));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.consignment == null ? null : ctx_r2.consignment.trackAndTraceInfo.slice().reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.consignment.labelPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.consignment.letterPath);
        }
      }

      var SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl;

      var ConsignmentShowComponent = /*#__PURE__*/function () {
        function ConsignmentShowComponent(consignmentsService, route, authService, router) {
          _classCallCheck(this, ConsignmentShowComponent);

          this.consignmentsService = consignmentsService;
          this.route = route;
          this.authService = authService;
          this.router = router;
          this.isLoading = true;
        }

        _createClass(ConsignmentShowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function () {
              _this11.isLoading = false;
            });
            this.route.paramMap.subscribe(function (paramMap) {
              if (paramMap.has('consignmentId')) {
                var consignmentId = paramMap.get('consignmentId');
                _this11.isLoading = true;

                _this11.getConsignment(consignmentId);
              } else {
                _this11.router.navigate(['/consignments']);
              }
            });
          }
        }, {
          key: "getConsignment",
          value: function getConsignment(consignmentId) {
            var _this12 = this;

            this.consignmentsService.getConsignment(consignmentId).then(function (data) {
              _this12.isLoading = false;
              _this12.consignment = {
                login: data.login,
                consignmentId: data.consignmentId,
                creationDate: data.creationDate,
                status: data.status,
                shipper: data.shipper,
                receiver: data.receiver,
                piece: data.piece,
                payerType: data.payerType,
                service: data.service,
                shipmentDate: data.shipmentDate,
                comment: data.comment,
                content: data.content,
                labelPath: SERVER_URL + data.labelPath,
                letterPath: SERVER_URL + data.letterPath,
                trackAndTraceInfo: data.trackAndTraceInfo
              };
            }, function (error) {});
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + '-' + month + '-' + year;
          }
        }, {
          key: "open",
          value: function open(filePath) {
            window.open(filePath, '_blank');
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this13 = this;

            var consignmentId = [this.consignment.consignmentId];
            this.consignmentsService.deleteConsignments(consignmentId).then(function () {
              _this13.router.navigate(['/consignments']);
            }, function (error) {});
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStatusSub.unsubscribe();
          }
        }]);

        return ConsignmentShowComponent;
      }();

      ConsignmentShowComponent.ɵfac = function ConsignmentShowComponent_Factory(t) {
        return new (t || ConsignmentShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_consignments_service__WEBPACK_IMPORTED_MODULE_2__["ConsignmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ConsignmentShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsignmentShowComponent,
        selectors: [["ng-component"]],
        decls: 5,
        vars: 3,
        consts: [[1, "mat-title"], [4, "ngIf"], [1, "details-container"], [1, "mat-h3"], [1, "stepper-container"], ["linear", ""], ["stepper", ""], ["matStepperIcon", "edit"], [4, "ngFor", "ngForOf"], [1, "action-container"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", "routerLink", "/consignments/create"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "accent", "disabled", ""], ["matStepperIcon", "number", "matStepLabel", ""]],
        template: function ConsignmentShowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " szczeg\xF3\u0142y przesy\u0142ki ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsignmentShowComponent_span_2_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConsignmentShowComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConsignmentShowComponent_div_4_Template, 92, 28, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"]],
        styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\np[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.stepper-container[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n}\n\n.details-container[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 2em 1.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LXNob3cvY29uc2lnbm1lbnQtc2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29uc2lnbm1lbnRzL2NvbnNpZ25tZW50LXNob3cvY29uc2lnbm1lbnQtc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbnAge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuaDMge1xuICBtYXJnaW46IDA7XG59XG5cbi5zdGVwcGVyLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuLmFjdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDJlbSAxLjVlbSAwIDA7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentShowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './consignment-show.component.html',
            styleUrls: ['./consignment-show.component.css']
          }]
        }], function () {
          return [{
            type: _consignments_service__WEBPACK_IMPORTED_MODULE_2__["ConsignmentsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/consignments/consignments-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/consignments/consignments-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ConsignmentsRoutingModule */

    /***/
    function srcAppConsignmentsConsignmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentsRoutingModule", function () {
        return ConsignmentsRoutingModule;
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


      var _consignment_list_consignment_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./consignment-list/consignment-list.component */
      "./src/app/consignments/consignment-list/consignment-list.component.ts");
      /* harmony import */


      var _consignment_create_consignment_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consignment-create/consignment-create.component */
      "./src/app/consignments/consignment-create/consignment-create.component.ts");
      /* harmony import */


      var _consignment_show_consignment_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./consignment-show/consignment-show.component */
      "./src/app/consignments/consignment-show/consignment-show.component.ts");

      var routes = [{
        path: '',
        component: _consignment_list_consignment_list_component__WEBPACK_IMPORTED_MODULE_2__["ConsignmentListComponent"]
      }, {
        path: 'create',
        component: _consignment_create_consignment_create_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentCreateComponent"]
      }, {
        path: ':consignmentId',
        component: _consignment_show_consignment_show_component__WEBPACK_IMPORTED_MODULE_4__["ConsignmentShowComponent"]
      }];

      var ConsignmentsRoutingModule = function ConsignmentsRoutingModule() {
        _classCallCheck(this, ConsignmentsRoutingModule);
      };

      ConsignmentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConsignmentsRoutingModule
      });
      ConsignmentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConsignmentsRoutingModule_Factory(t) {
          return new (t || ConsignmentsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConsignmentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentsRoutingModule, [{
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
    "./src/app/consignments/consignments.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/consignments/consignments.component.ts ***!
      \********************************************************/

    /*! exports provided: ConsignmentsComponent */

    /***/
    function srcAppConsignmentsConsignmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentsComponent", function () {
        return ConsignmentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConsignmentsComponent = function ConsignmentsComponent() {
        _classCallCheck(this, ConsignmentsComponent);
      };

      ConsignmentsComponent.ɵfac = function ConsignmentsComponent_Factory(t) {
        return new (t || ConsignmentsComponent)();
      };

      ConsignmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConsignmentsComponent,
        selectors: [["ng-component"]],
        decls: 0,
        vars: 0,
        template: function ConsignmentsComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './consignments.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/consignments/consignments.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/consignments/consignments.module.ts ***!
      \*****************************************************/

    /*! exports provided: ConsignmentsModule */

    /***/
    function srcAppConsignmentsConsignmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentsModule", function () {
        return ConsignmentsModule;
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


      var _consignments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consignments.component */
      "./src/app/consignments/consignments.component.ts");
      /* harmony import */


      var _consignments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./consignments-routing.module */
      "./src/app/consignments/consignments-routing.module.ts");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../material.module */
      "./src/app/material.module.ts");
      /* harmony import */


      var _consignment_create_consignment_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consignment-create/consignment-create.component */
      "./src/app/consignments/consignment-create/consignment-create.component.ts");
      /* harmony import */


      var _consignment_list_consignment_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./consignment-list/consignment-list.component */
      "./src/app/consignments/consignment-list/consignment-list.component.ts");
      /* harmony import */


      var _consignment_list_cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./consignment-list/cdk-detail-row.directive */
      "./src/app/consignments/consignment-list/cdk-detail-row.directive.ts");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
      /* harmony import */


      var _consignment_list_polish_paginator_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./consignment-list/polish-paginator-intl */
      "./src/app/consignments/consignment-list/polish-paginator-intl.ts");
      /* harmony import */


      var _consignment_show_consignment_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./consignment-show/consignment-show.component */
      "./src/app/consignments/consignment-show/consignment-show.component.ts");

      var ConsignmentsModule = function ConsignmentsModule() {
        _classCallCheck(this, ConsignmentsModule);
      };

      ConsignmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConsignmentsModule
      });
      ConsignmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConsignmentsModule_Factory(t) {
          return new (t || ConsignmentsModule)();
        },
        providers: [{
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorIntl"],
          useValue: Object(_consignment_list_polish_paginator_intl__WEBPACK_IMPORTED_MODULE_10__["getPolishPaginatorIntl"])()
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _consignments_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConsignmentsModule, {
          declarations: [_consignments_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentsComponent"], _consignment_create_consignment_create_component__WEBPACK_IMPORTED_MODULE_6__["ConsignmentCreateComponent"], _consignment_list_consignment_list_component__WEBPACK_IMPORTED_MODULE_7__["ConsignmentListComponent"], _consignment_list_cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_8__["CdkDetailRowDirective"], _consignment_show_consignment_show_component__WEBPACK_IMPORTED_MODULE_11__["ConsignmentShowComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _consignments_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_consignments_component__WEBPACK_IMPORTED_MODULE_3__["ConsignmentsComponent"], _consignment_create_consignment_create_component__WEBPACK_IMPORTED_MODULE_6__["ConsignmentCreateComponent"], _consignment_list_consignment_list_component__WEBPACK_IMPORTED_MODULE_7__["ConsignmentListComponent"], _consignment_list_cdk_detail_row_directive__WEBPACK_IMPORTED_MODULE_8__["CdkDetailRowDirective"], _consignment_show_consignment_show_component__WEBPACK_IMPORTED_MODULE_11__["ConsignmentShowComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _consignments_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConsignmentsRoutingModule"]],
            providers: [{
              provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorIntl"],
              useValue: Object(_consignment_list_polish_paginator_intl__WEBPACK_IMPORTED_MODULE_10__["getPolishPaginatorIntl"])()
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/consignments/consignments.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/consignments/consignments.service.ts ***!
      \******************************************************/

    /*! exports provided: ConsignmentsService */

    /***/
    function srcAppConsignmentsConsignmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsignmentsService", function () {
        return ConsignmentsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var _shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/toast.service */
      "./src/app/shared/toast.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'consignments/';

      var ConsignmentsService = /*#__PURE__*/function () {
        function ConsignmentsService(http, authService, toastService, router) {
          _classCallCheck(this, ConsignmentsService);

          this.http = http;
          this.authService = authService;
          this.toastService = toastService;
          this.router = router;
        }

        _createClass(ConsignmentsService, [{
          key: "createConsignment",
          value: function createConsignment(consignment) {
            return this.http.post(BACKEND_URL + 'create', consignment).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "listConsignments",
          value: function listConsignments() {
            var _this14 = this;

            var userId = this.authService.getUserId();
            return this.http.post(BACKEND_URL, {
              userId: userId
            }).toPromise().then(function (response) {
              if (!response.consignments) {
                _this14.toastService.showToast(response.message);
              }

              return response;
            }, function (error) {
              return error;
            });
          }
        }, {
          key: "getConsignment",
          value: function getConsignment(consignmentId) {
            var _this15 = this;

            return this.http.get(BACKEND_URL + consignmentId).toPromise().then(function (response) {
              return response;
            }, function (error) {
              _this15.router.navigate(['/consignments']);

              return error;
            });
          }
        }, {
          key: "deleteConsignments",
          value: function deleteConsignments(selectedConsignments) {
            var _this16 = this;

            var userId = this.authService.getUserId();
            return this.http.patch(BACKEND_URL, {
              selectedConsignments: selectedConsignments,
              userId: userId
            }).toPromise().then(function (response) {
              _this16.toastService.showToast(response.message);

              return response;
            }, function (error) {
              return error;
            });
          }
        }]);

        return ConsignmentsService;
      }();

      ConsignmentsService.ɵfac = function ConsignmentsService_Factory(t) {
        return new (t || ConsignmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ConsignmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConsignmentsService,
        factory: ConsignmentsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsignmentsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=consignments-consignments-module-es5.js.map