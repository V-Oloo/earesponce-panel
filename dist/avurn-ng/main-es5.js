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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-preloader></app-preloader>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/contact/contact.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/contact/contact.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"contact\" class=\"contact-area ptb-100 bg-image\">\n    <div class=\"container\">\n        <div class=\"section-title\">\n            <span>Get In Touch</span>\n            <h2>Let's <b>Contact</b> Us</h2>\n            <p>If you’d like a free consultation, please start by completing the form below:</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-md-12\">\n                <div class=\"contact-info\">\n                    <div class=\"d-table\">\n                        <div class=\"d-table-cell\">\n                            <h2>Contact Information</h2>\n                            <ul>\n                                <li><i class=\"icofont-envelope\"></i> <span>Contact Us:</span>feedback@reinitresearch.com</li>\n\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-12\">\n                <div class=\"contact-form\">\n                    <form [formGroup]=\"Form\" (ngSubmit)=\"submitForm()\">\n                        <div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                            {{message}}\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\"  role=\"alert\">\n                            {{error}}\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6 col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Name\">\n                                    <div class=\"form-control-feedback\"\n                                    *ngIf=\"name.errors && (name.dirty || name.touched)\">\n                                    <p *ngIf=\"name.errors.required\"><span style=\"color: red;\">field required</span></p>\n                                    <p *ngIf=\"name.errors.pattern\"><span style=\"color: red;\">invalid name</span></p>\n                                </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6 col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email Address\">\n                                    <div class=\"form-control-feedback\"\n                                    *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                                    <p *ngIf=\"email.errors.required\"><span style=\"color: red;\">field required</span></p>\n                                    <p *ngIf=\"email.errors.email\"><span style=\"color: red;\">Invalid Email</span></p>\n                                </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12 col-md-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"subject\"  class=\"form-control\" placeholder=\"Subject\">\n                                    <div class=\"form-control-feedback\"\n                                        *ngIf=\"subj.errors && (subj.dirty || subj.touched)\">\n                                        <p *ngIf=\"subj.errors.required\"><span style=\"color: red;\">field required</span></p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-lg-12 col-md-12\">\n                                <div class=\"form-group\">\n                                    <textarea placeholder=\"Message\" formControlName=\"message\" class=\"form-control\" cols=\"30\" rows=\"5\"></textarea>\n                                    <div class=\"form-control-feedback\"\n                                        *ngIf=\"mess.errors && (mess.dirty || mess.touched)\">\n                                        <span style=\"color: red;\" *ngIf=\"mess.errors.required\">field required</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12 col-md-12\">\n                                <button type=\"submit\" [disabled]=\"loading || Form.invalid\" class=\"btn btn-primary\">\n                                    <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loading\" role=\"status\" aria-hidden=\"true\"></span>\n                                    Send Message\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/footer/footer.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/footer/footer.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-area\">\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-lg-3 col-md-7\">\n                <div class=\"section-title\">\n                    <span>Our Vision</span>\n                    <p>\n                        <i>\n                            Our vision is to be the most respected, trusted, cost-effective and sought after research firm by our clients and employees.\n                        </i>\n                    </p>\n                </div>\n\n            </div>\n\n            <div class=\"col-lg-3 col-md-7\">\n                <div class=\"section-title\">\n                    <span style=\"color: aqua;\">Contact Info</span>\n                    <p>\n\n                        Email:feedback@reinitresearch.com\n\n                    </p>\n                </div>\n\n            </div>\n\n            <div class=\"col-lg-3 col-md-7\">\n                <div class=\"section-title\">\n                    <span style=\"color: rgb(217, 255, 0);\">Location</span>\n                    <p>\n\n                        Headquaters Nairobi, Kenya\n\n                    </p>\n                </div>\n\n            </div>\n\n            <div class=\"col-lg-3 col-md-7\">\n                <div class=\"section-title\">\n                    <span style=\"color: rgb(7, 28, 255);\">Folow & Like Us</span>\n                    <ul>\n                        <li><a href=\"https://www.facebook.com/reinitresearch/\" target=\"_blank\"><i class=\"icofont-facebook\"></i></a></li>\n                        <li><a href=\"https://www.instagram.com/reinitresearch/?hl=en\" target=\"_blank\"><i class=\"icofont-instagram\"></i></a></li>\n\n                    </ul>\n                </div>\n\n\n            </div>\n        </div>\n        <div class=\"row \">\n            Copyright © Reinit Research\n        </div>\n\n    </div>\n</footer>\n\n<div class=\"go-top\"><i class=\"icofont-swoosh-up\"></i></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"assets/img/logo-1.png\" alt=\"logo\">\n            <img src=\"assets/img/logo-1.png\" alt=\"logo\">\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#home\">Home</a></li>\n                <!-- <li class=\"nav-item\"><a class=\"nav-link\" href=\"#whoweare\">Why Join Us</a></li> -->\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"#contact\">Contact</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/preloader/preloader.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/preloader/preloader.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutsPreloaderPreloaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"preloader\">\n    <div class=\"loader\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/who-we-are/who-we-are.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/who-we-are/who-we-are.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLayoutsWhoWeAreWhoWeAreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"who-we-are ptb-100 bg-image\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-md-12\">\n                <div class=\"section-title\">\n                    <span>Why Join Our Panel</span>\n                    <p>\n                        When you join our panel, we give you the opportunity to voice your opinions.\n                        Every time you participate in a survey, your opinions will impact the services and products that we use in our everyday lives.\n                        It is common for our clients to use market research to gain a better perspective on what consumers need before releasing their service or products.\n                        This helps the businesses to tailor their services and products to the needs of the consumers.\n                        When joining our research panel, you are directly influencing the decision of local, regional and even global business to create better services and products.\n                    </p>\n\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-12\">\n                <div class=\"section-title\">\n                    <span>Benefits of joining our panel</span>\n                    <p>\n                        Every time you participate in our surveys, you earn redeemable points and stand a chance to win amazing prizes. You can immediately redeem your points to airtime of your choice! You can also participate in our monthly raffle for a reward.\n\n\n\n                        What are you waiting for?\n                    </p>\n                    <a href=\"#home\" class=\"btn btn-primary\">Join Us Today</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/error/error.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/error/error.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagesErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page-title-area item-bg4\">\n    <div class=\"container\">\n        <h2>404 Error</h2>\n    </div>\n</section>\n\n<section class=\"error-area ptb-100\">\n    <div class=\"container\">\n        <div class=\"error-content\">\n            <img src=\"assets/img/error-404.png\" alt=\"error\">\n            <form class=\"search-form\">\n                <input type=\"text\" class=\"search-field\" placeholder=\"search\">\n                <button type=\"submit\" class=\"search-submit\">Search</button>\n            </form>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home-eighteen/home-eighteen.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home-eighteen/home-eighteen.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagesHomeEighteenHomeEighteenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-banner main-banner-with-form item-bg2\">\n    <div class=\"d-table\">\n        <div class=\"d-table-cell\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-md-12\">\n\n                        <div class=\"contact-info\">\n                            <h3>Join Our Panel</h3><hr/>\n\n                            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"registerUser()\">\n                                <div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                                    {{message}}\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\"  role=\"alert\">\n                                    {{error}}\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>First Name<span style=\"color: red;\">*</span></label>\n                                            <input formControlName=\"first_name\" type=\"text\" class=\"form-control\">\n                                            <div class=\"form-control-feedback\"\n                                               *ngIf=\"fname.errors && (fname.dirty || fname.touched)\">\n                                               <span style=\"color: red;\" *ngIf=\"fname.errors.required\">field required</span>\n                                               <span style=\"color: red;\" *ngIf=\"fname.errors.pattern\">numerics and symbols not allowed</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>Last Name<span style=\"color: red;\">*</span></label>\n                                            <input formControlName=\"last_name\" type=\"text\" class=\"form-control\">\n                                            <div class=\"form-control-feedback\"\n                                               *ngIf=\"lname.errors && (lname.dirty || lname.touched)\">\n                                               <span style=\"color: red;\" *ngIf=\"lname.errors.required\">field required</span>\n                                               <span style=\"color: red;\" *ngIf=\"lname.errors.pattern\">numerics and symbols not allowed</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>Gender<span style=\"color: red;\">*</span></label>\n                                            <select class=\"custom-select\" formControlName=\"gender\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option>Male</option>\n                                                <option>Female</option>\n                                             </select>\n                                            <div class=\"form-control-feedback\" *ngIf=\"gender.errors && (gender.dirty || gender.touched)\">\n                                               <span style=\"color: red;\" *ngIf=\"gender.errors.required\">field required</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>Date Of Birth<span style=\"color: red;\">*</span></label>\n                                            <input type=\"text\"\n\n                                                placeholder=\"date of birth\"\n                                                formControlName=\"dob\"\n                                                class=\"form-control\"\n                                                bsDatepicker>\n                                                <div class=\"form-control-feedback\" *ngIf=\"dob.errors && (dob.dirty || dob.touched)\">\n                                                    <span style=\"color: red;\" *ngIf=\"dob.errors.required\">field required</span>\n                                                 </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Email<span style=\"color: red;\">*</span></label>\n                                            <input formControlName=\"email\" type=\"email\" class=\"form-control\">\n                                            <div class=\"form-control-feedback\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"email.errors.required\">field required</span>\n                                                <span style=\"color: red;\" *ngIf=\"email.errors.email\">Invalid Email</span>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>Verify Email<span style=\"color: red;\">*</span></label>\n                                            <input [ngClass]=\"{ 'is-invalid': submitted && vemail.errors }\" formControlName=\"verify_email\" type=\"email\" class=\"form-control\">\n\n                                            <div class=\"form-control-feedback\" *ngIf=\"vemail.errors && (vemail.dirty || vemail.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"vemail.errors.required\">field required</span>\n                                                <span style=\"color: red;\" *ngIf=\"vemail.errors.mustMatch\">Emails do not match</span>\n                                             </div>\n                                        </div>\n                                    </div> -->\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Country<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <select class=\"custom-select\" (change)=\"getCountryRegion($event)\" formControlName=\"country_id\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option *ngFor=\"let city of countries\" [ngValue]=\"city.country_id\" >{{city.country_name}}</option>\n                                             </select>\n                                             <div class=\"form-control-feedback\" *ngIf=\"cid.errors && (cid.dirty || cid.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"cid.errors.required\">field required</span>\n\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <label>Region<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <select class=\"custom-select\" formControlName=\"region_id\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option *ngFor=\"let region of filterRegions\" [ngValue]=\"region.region_id\">{{region.region_name}}</option>\n\n                                             </select>\n                                             <div class=\"form-control-feedback\" *ngIf=\"rid.errors && (rid.dirty || rid.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"rid.errors.required\">field required</span>\n\n                                             </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Country Code<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <input formControlName=\"country_code\" type=\"text\" class=\"form-control\">\n\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <label>Phone Number<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n\n                                            <input formControlName=\"phone_no\" type=\"number\" class=\"form-control\">\n                                        </div>\n                                        <div class=\"form-control-feedback\" *ngIf=\"phone.errors && (phone.dirty || phone.touched)\">\n                                            <span style=\"color: red;\" *ngIf=\"phone.errors.required\">field required</span>\n\n                                         </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Town<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n\n                                            <input formControlName=\"town\" [ngClass]=\"{ 'is-invalid': submitted && town.errors }\" type=\"text\" class=\"form-control\">\n                                        </div>\n                                        <div class=\"form-control-feedback\" *ngIf=\"town.errors && (town.dirty || town.touched)\">\n                                            <span style=\"color: red;\" *ngIf=\"town.errors.required\">field required</span>\n\n                                         </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <label>Education Level<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <select class=\"custom-select\" formControlName=\"education_level_id\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option *ngFor=\"let item of education\" [ngValue]=\"item.education_levels_id\">{{item.education_level}}</option>\n\n                                             </select>\n                                             <div class=\"form-control-feedback\" *ngIf=\"edl.errors && (edl.dirty || edl.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"edl.errors.required\">field required</span>\n\n                                             </div>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Employment Status<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <select class=\"custom-select\" formControlName=\"employment_status_id\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option *ngFor=\"let item of empState\" [ngValue]=\"item.employment_status_id\">{{item.employment_status}}</option>\n\n                                             </select>\n                                             <div class=\"form-control-feedback\" *ngIf=\"esi.errors && (esi.dirty || esi.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"esi.errors.required\">field required</span>\n\n                                             </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6\">\n                                        <label>Marital Status<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n                                            <select class=\"custom-select\" formControlName=\"marital_status_id\">\n                                                <option value=\"\" disabled>---Select---</option>\n                                                <option *ngFor=\"let item of maritalState\" [ngValue]=\"item.marital_status_id\">{{item.marital_status}}</option>\n\n                                             </select>\n                                             <div class=\"form-control-feedback\" *ngIf=\"msi.errors && (msi.dirty || msi.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"msi.errors.required\">field required</span>\n\n                                             </div>\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n\n\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-6\">\n                                        <label>Password<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n\n                                            <input formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && pass.errors }\" type=\"password\" class=\"form-control\">\n\n                                              <div class=\"form-control-feedback\" *ngIf=\"pass.errors && (pass.dirty || pass.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"pass.errors.required\">field required</span>\n                                                <span style=\"color: red;\" *ngIf=\"pass.errors.minlength\">Password must be at least 6 characters</span>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <label>Confirm Password<span style=\"color: red;\">*</span></label>\n                                        <div class=\"form-group\">\n\n                                            <input formControlName=\"confirm_pass\" type=\"password\" class=\"form-control\">\n\n                                            <div class=\"form-control-feedback\" *ngIf=\"cpass.errors && (cpass.dirty || cpass.touched)\">\n                                                <span style=\"color: red;\" *ngIf=\"cpass.errors.required\">field required</span>\n                                                <span style=\"color: red;\" *ngIf=\"cpass.errors.mustMatch\">Passwords must match</span>\n                                             </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loading || registrationForm.invalid\">\n                                        <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loading\" role=\"status\" aria-hidden=\"true\"></span>\n                                        Register\n                                    </button>\n\n                            </form>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-4 col-md-12\">\n                        <div class=\"contact-form\">\n                            <h3>Login</h3><hr/>\n                            <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\">\n                                <div *ngIf=\"lmessage\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                                    {{lmessage}}\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                <div *ngIf=\"lerror\" class=\"alert alert-danger alert-dismissible fade show\"  role=\"alert\">\n                                    {{lerror}}\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Email<span style=\"color: red;\">*</span></label>\n                                            <input type=\"email\"  [ngClass]=\"{ 'is-invalid': submitted && mail.errors }\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email Address\">\n                                            <div *ngIf=\"submitted && mail.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"mail['errors']['required']\">Required field</div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-12 col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Password<span style=\"color: red;\">*</span></label>\n                                            <input type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && password.errors }\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                            <div *ngIf=\"submitted && password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"password['errors']['required']\">Required field</div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-lg-12 col-md-12\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">\n                                            <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loading\" role=\"status\" aria-hidden=\"true\"></span>\n                                            Login\n                                        </button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<app-who-we-are></app-who-we-are>\n\n<app-contact></app-contact>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_pages_home_eighteen_home_eighteen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/home-eighteen/home-eighteen.component */
    "./src/app/components/pages/home-eighteen/home-eighteen.component.ts");
    /* harmony import */


    var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/error/error.component */
    "./src/app/components/pages/error/error.component.ts");
    /* harmony import */


    var _components_pages_home_eighteen_home_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/home-eighteen/home.resolver */
    "./src/app/components/pages/home-eighteen/home.resolver.ts");

    var routes = [{
      path: '',
      resolve: {
        stats: _components_pages_home_eighteen_home_resolver__WEBPACK_IMPORTED_MODULE_5__["HomeResolver"]
      },
      component: _components_pages_home_eighteen_home_eighteen_component__WEBPACK_IMPORTED_MODULE_3__["HomeEighteenComponent"]
    }, {
      path: 'error',
      component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recallJsFuntions();
        }
      }, {
        key: "recallJsFuntions",
        value: function recallJsFuntions() {
          var _this = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              $('.preloader').fadeIn('slow');
            }
          });
          this.routerSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"];
          })).subscribe(function (event) {
            $.getScript('../assets/js/main.js');
            $('.preloader').fadeOut('slow');
            _this.location = _this.router.url;

            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"]
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_layouts_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/layouts/contact/contact.component */
    "./src/app/components/layouts/contact/contact.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/layouts/preloader/preloader.component */
    "./src/app/components/layouts/preloader/preloader.component.ts");
    /* harmony import */


    var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/layouts/footer/footer.component */
    "./src/app/components/layouts/footer/footer.component.ts");
    /* harmony import */


    var _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/layouts/navbar/navbar.component */
    "./src/app/components/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _components_layouts_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/layouts/who-we-are/who-we-are.component */
    "./src/app/components/layouts/who-we-are/who-we-are.component.ts");
    /* harmony import */


    var _components_pages_home_eighteen_home_eighteen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pages/home-eighteen/home-eighteen.component */
    "./src/app/components/pages/home-eighteen/home-eighteen.component.ts");
    /* harmony import */


    var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/pages/error/error.component */
    "./src/app/components/pages/error/error.component.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./global */
    "./src/app/global.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_layouts_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__["PreloaderComponent"], _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_layouts_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"], _components_layouts_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_11__["WhoWeAreComponent"], _components_pages_home_eighteen_home_eighteen_component__WEBPACK_IMPORTED_MODULE_12__["HomeEighteenComponent"], _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot()],
      providers: [_global__WEBPACK_IMPORTED_MODULE_16__["Globals"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
      exports: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/layouts/contact/contact.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/layouts/contact/contact.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/layouts/contact/contact.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/layouts/contact/contact.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsLayoutsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/home.service */
    "./src/app/components/services/home.service.ts");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(fb, service) {
        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.service = service;
        this.submitted = false;
        this.loading = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this2 = this;

          this.submitted = true;

          if (this.Form.invalid) {
            return;
          }

          this.loading = true;
          this.service.contactUs(this.Form.value).subscribe(function (res) {
            _this2.loading = false, _this2.message = res.success;

            _this2.Form.reset();
          }, function (err) {
            _this2.loading = false, _this2.error = err.error.message;
            console.log(err);
          });
        }
      }, {
        key: "subj",
        get: function get() {
          return this.Form.get('subject');
        }
      }, {
        key: "name",
        get: function get() {
          return this.Form.get('name');
        }
      }, {
        key: "mess",
        get: function get() {
          return this.Form.get('message');
        }
      }, {
        key: "email",
        get: function get() {
          return this.Form.get('email');
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/layouts/contact/contact.component.scss")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/layouts/footer/footer.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/layouts/footer/footer.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/layouts/footer/footer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/layouts/footer/footer.component.ts ***!
    \***************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/layouts/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/layouts/navbar/navbar.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/layouts/navbar/navbar.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/layouts/navbar/navbar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/layouts/navbar/navbar.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/components/layouts/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/layouts/preloader/preloader.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/layouts/preloader/preloader.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutsPreloaderPreloaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/layouts/preloader/preloader.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/layouts/preloader/preloader.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PreloaderComponent */

  /***/
  function srcAppComponentsLayoutsPreloaderPreloaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function () {
      return PreloaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PreloaderComponent =
    /*#__PURE__*/
    function () {
      function PreloaderComponent() {
        _classCallCheck(this, PreloaderComponent);
      }

      _createClass(PreloaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreloaderComponent;
    }();

    PreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-preloader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./preloader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/preloader/preloader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./preloader.component.scss */
      "./src/app/components/layouts/preloader/preloader.component.scss")).default]
    })], PreloaderComponent);
    /***/
  },

  /***/
  "./src/app/components/layouts/who-we-are/who-we-are.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/layouts/who-we-are/who-we-are.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLayoutsWhoWeAreWhoWeAreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/layouts/who-we-are/who-we-are.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/layouts/who-we-are/who-we-are.component.ts ***!
    \***********************************************************************/

  /*! exports provided: WhoWeAreComponent */

  /***/
  function srcAppComponentsLayoutsWhoWeAreWhoWeAreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhoWeAreComponent", function () {
      return WhoWeAreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhoWeAreComponent =
    /*#__PURE__*/
    function () {
      function WhoWeAreComponent() {
        _classCallCheck(this, WhoWeAreComponent);
      }

      _createClass(WhoWeAreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhoWeAreComponent;
    }();

    WhoWeAreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-who-we-are',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./who-we-are.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layouts/who-we-are/who-we-are.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./who-we-are.component.scss */
      "./src/app/components/layouts/who-we-are/who-we-are.component.scss")).default]
    })], WhoWeAreComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/error/error.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/pages/error/error.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagesErrorErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/pages/error/error.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/error/error.component.ts ***!
    \***********************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsPagesErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.scss */
      "./src/app/components/pages/error/error.component.scss")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/home-eighteen/home-eighteen.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/pages/home-eighteen/home-eighteen.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagesHomeEighteenHomeEighteenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS1laWdodGVlbi9ob21lLWVpZ2h0ZWVuLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/pages/home-eighteen/home-eighteen.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/pages/home-eighteen/home-eighteen.component.ts ***!
    \***************************************************************************/

  /*! exports provided: HomeEighteenComponent */

  /***/
  function srcAppComponentsPagesHomeEighteenHomeEighteenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeEighteenComponent", function () {
      return HomeEighteenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/home.service */
    "./src/app/components/services/home.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./password.validator */
    "./src/app/components/pages/home-eighteen/password.validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var HomeEighteenComponent =
    /*#__PURE__*/
    function () {
      function HomeEighteenComponent(fb, service, _route, datePipe) {
        _classCallCheck(this, HomeEighteenComponent);

        this.fb = fb;
        this.service = service;
        this._route = _route;
        this.datePipe = datePipe;
        this.submitted = false;
        this.loading = false;
      }

      _createClass(HomeEighteenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDashboardData();
          this.registrationForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z ]*")]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z ]*")]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            // verify_email: ['', [Validators.required, Validators.email ]],
            country_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            region_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            education_level_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            employment_status_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            town: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            marital_status_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country_code: [{
              value: '',
              disabled: true
            }],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirm_pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          }, {
            validators: Object(_password_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirm_pass'),
            validator: Object(_password_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('email', 'verify_email')
          });
          this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData() {
          var _this3 = this;

          this._route.data.subscribe(function (data) {
            _this3.countries = data.stats[0];
            _this3.regions = data.stats[1];
            _this3.education = data.stats[2];
            _this3.empState = data.stats[3];
            _this3.maritalState = data.stats[4];
            console.log(_this3.education);
          });
        }
      }, {
        key: "getCountryRegion",
        value: function getCountryRegion(event) {
          var id = event.target.selectedIndex;
          console.log(id);
          this.filterRegions = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.regions, {
            'country_id': id
          });
          console.log(this.filterRegions);
          this.selectedCountry(id);
        }
      }, {
        key: "selectedCountry",
        value: function selectedCountry(id) {
          var result = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.countries, {
            'country_id': id
          });
          console.log(result);
          var code = result.phone_code;
          this.registrationForm.patchValue({
            country_code: code
          });
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this4 = this;

          this.submitted = true;

          if (this.registrationForm.invalid) {
            this.loading = false;
            return;
          }

          this.loading = true;
          var first_name = this.registrationForm.value.first_name;
          var last_name = this.registrationForm.value.last_name;
          var gender = this.registrationForm.value.gender;
          var dob = this.datePipe.transform(this.registrationForm.value.dob, 'yyyy-MM-dd');
          var email = this.registrationForm.value.email;
          var country_id = this.registrationForm.value.country_id;
          var region_id = this.registrationForm.value.region_id;
          var phone_no = this.registrationForm.value.phone_no;
          var education_level_id = this.registrationForm.value.education_level_id;
          var employment_status_id = this.registrationForm.value.employment_status_id;
          var marital_status_id = this.registrationForm.value.marital_status_id;
          var country_code = this.registrationForm.getRawValue().country_code;
          var password = this.registrationForm.value.password;
          var town = this.registrationForm.value.town;
          var number = country_code + phone_no;
          var data = {
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            dob: dob,
            email: email,
            country_id: country_id,
            region_id: region_id,
            phone_no: number,
            education_level_id: education_level_id,
            employment_status_id: employment_status_id,
            marital_status_id: marital_status_id,
            password: password,
            town: town
          };
          this.service.register(data).subscribe(function (res) {
            _this4.loading = false, _this4.message = res.success;
            console.log(res);

            _this4.registrationForm.reset();
          }, function (err) {
            _this4.loading = false, _this4.error = err.error.message, console.log(err);
          });
          console.log(this.registrationForm.value);
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this5 = this;

          this.submitted = true;

          if (this.loginForm.invalid) {
            // this.loading = false;
            return;
          }

          console.log(this.loginForm.value);
          this.loading = true;
          this.service.login(this.loginForm.value).subscribe(function (res) {
            _this5.loading = false;
            var url = res.redirect_to;
            console.log(url);
            window.location.href = url;
            _this5.lmessage = res.success, console.log(res);
          }, function (err) {
            _this5.loading = false;
            _this5.lerror = err.error.message, console.log(err);
          });
        }
      }, {
        key: "fname",
        get: function get() {
          return this.registrationForm.get('first_name');
        }
      }, {
        key: "lname",
        get: function get() {
          return this.registrationForm.get('last_name');
        }
      }, {
        key: "gender",
        get: function get() {
          return this.registrationForm.get('gender');
        }
      }, {
        key: "dob",
        get: function get() {
          return this.registrationForm.get('dob');
        }
      }, {
        key: "email",
        get: function get() {
          return this.registrationForm.get('email');
        }
      }, {
        key: "vemail",
        get: function get() {
          return this.registrationForm.get('verify_email');
        }
      }, {
        key: "cid",
        get: function get() {
          return this.registrationForm.get('country_id');
        }
      }, {
        key: "rid",
        get: function get() {
          return this.registrationForm.get('region_id');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.registrationForm.get('phone_no');
        }
      }, {
        key: "edl",
        get: function get() {
          return this.registrationForm.get('education_level_id');
        }
      }, {
        key: "esi",
        get: function get() {
          return this.registrationForm.get('employment_status_id');
        }
      }, {
        key: "msi",
        get: function get() {
          return this.registrationForm.get('marital_status_id');
        }
      }, {
        key: "code",
        get: function get() {
          return this.registrationForm.get('country_code');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.registrationForm.get('password');
        }
      }, {
        key: "cpass",
        get: function get() {
          return this.registrationForm.get('confirm_pass');
        }
      }, {
        key: "town",
        get: function get() {
          return this.registrationForm.get('town');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }, {
        key: "mail",
        get: function get() {
          return this.loginForm.get('email');
        }
      }]);

      return HomeEighteenComponent;
    }();

    HomeEighteenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
      }];
    };

    HomeEighteenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home-eighteen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-eighteen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home-eighteen/home-eighteen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-eighteen.component.scss */
      "./src/app/components/pages/home-eighteen/home-eighteen.component.scss")).default]
    })], HomeEighteenComponent);
    /***/
  },

  /***/
  "./src/app/components/pages/home-eighteen/home.resolver.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/pages/home-eighteen/home.resolver.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeResolver */

  /***/
  function srcAppComponentsPagesHomeEighteenHomeResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeResolver", function () {
      return HomeResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/home.service */
    "./src/app/components/services/home.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeResolver =
    /*#__PURE__*/
    function () {
      function HomeResolver(service) {
        _classCallCheck(this, HomeResolver);

        this.service = service;
      }

      _createClass(HomeResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var countris = this.service.getCountries();
          var regions = this.service.getRegions();
          var education = this.service.getEduLevals();
          var employment = this.service.getEmpStatus();
          var marital = this.service.getMaritalStatus();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([countris, regions, education, employment, marital]);
        }
      }]);

      return HomeResolver;
    }();

    HomeResolver.ctorParameters = function () {
      return [{
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]
      }];
    };

    HomeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], HomeResolver);
    /***/
  },

  /***/
  "./src/app/components/pages/home-eighteen/password.validator.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/pages/home-eighteen/password.validator.ts ***!
    \**********************************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppComponentsPagesHomeEighteenPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/components/services/home.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/services/home.service.ts ***!
    \*****************************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppComponentsServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/global */
    "./src/app/global.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HomeService =
    /*#__PURE__*/
    function () {
      function HomeService(http, global) {
        _classCallCheck(this, HomeService);

        this.http = http;
        this.global = global;
      }

      _createClass(HomeService, [{
        key: "register",
        value: function register(data) {
          return this.http.post(this.global._BaseUri + '/panelist/register', data);
        }
      }, {
        key: "login",
        value: function login(data) {
          return this.http.post(this.global._BaseUri + '/login/api', data);
        }
      }, {
        key: "contactUs",
        value: function contactUs(data) {
          return this.http.post(this.global._BaseUri + '/send/message', data);
        }
      }, {
        key: "getRegions",
        value: function getRegions() {
          return this.http.get(this.global._BaseUri + "/country_regions").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.http.get(this.global._BaseUri + "/countries").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        }
      }, {
        key: "getEmpStatus",
        value: function getEmpStatus() {
          return this.http.get(this.global._BaseUri + "/employment_status").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        }
      }, {
        key: "getEduLevals",
        value: function getEduLevals() {
          return this.http.get(this.global._BaseUri + "/education_levels").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        }
      }, {
        key: "getMaritalStatus",
        value: function getMaritalStatus() {
          return this.http.get(this.global._BaseUri + "/marital_status").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_global__WEBPACK_IMPORTED_MODULE_3__["Globals"]
      }];
    };

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeService);
    /***/
  },

  /***/
  "./src/app/global.ts":
  /*!***************************!*\
    !*** ./src/app/global.ts ***!
    \***************************/

  /*! exports provided: Globals */

  /***/
  function srcAppGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Globals = function Globals() {
      _classCallCheck(this, Globals);

      this._BaseUri = 'http://dev.reinitresearch.com/api';
    };

    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Globals);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! E:\Angular Projects\earesponse\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map