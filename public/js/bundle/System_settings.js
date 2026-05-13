(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      setting: {
        client_id: "",
        warehouse_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: ""
      },
      pos_settings: {
        note_customer: "",
        show_note: "",
        show_barcode: "",
        show_discount: "",
        show_phone: "",
        show_email: "",
        show_address: "",
        show_customer: ""
      },
      gateway: {
        stripe_key: "",
        stripe_secret: "",
        deleted: false
      },
      sms: {
        gateway: 'Twilio',
        TWILIO_SID: '',
        TWILIO_TOKEN: '',
        TWILIO_FROM: ''
      },
      server: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["refreshUserPermissions"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    //------------- Submit Validation Setting
    Submit_Setting: function Submit_Setting() {
      var _this = this;
      this.$refs.form_setting.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Settings();
        }
      });
    },
    //------------- Submit Validation Pos Setting
    Submit_Pos_Settings: function Submit_Pos_Settings() {
      var _this2 = this;
      this.$refs.Submit_Pos_Settings.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Pos_Settings();
        }
      });
    },
    //------------- Submit Validation SMTP
    Submit_SMTP: function Submit_SMTP() {
      var _this3 = this;
      this.$refs.form_smtp.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else {
          _this3.Update_Smtp();
        }
      });
    },
    //------------- Submit Validation Payment
    Submit_Payment: function Submit_Payment() {
      var _this4 = this;
      this.$refs.form_payment.validate().then(function (success) {
        if (!success) {
          _this4.makeToast("danger", _this4.$t("Please_fill_the_form_correctly"), _this4.$t("Failed"));
        } else {
          _this4.Update_Payment();
        }
      });
    },
    //------------- Submit Validation SMS
    Submit_sms: function Submit_sms() {
      var _this5 = this;
      this.$refs.form_sms.validate().then(function (success) {
        if (!success) {
          _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
        } else {
          _this5.Update_SMS();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this6$$refs$L, valid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this6.$refs.Logo.validate(e);
            case 1:
              _yield$_this6$$refs$L = _context.v;
              valid = _yield$_this6$$refs$L.valid;
              if (valid) {
                _this6.setting.logo = e.target.files[0];
              } else {
                _this6.setting.logo = "";
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this7 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var self = this;
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("_method", "put");
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");
        _this7.makeToast("success", _this7.$t("Successfully_Updated"), _this7.$t("Success"));
        _this7.refreshUserPermissions();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this7.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      });
    },
    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings: function Update_Pos_Settings() {
      var _this8 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.put("pos_settings/" + this.pos_settings.id, {
        note_customer: this.pos_settings.note_customer,
        show_note: this.pos_settings.show_note,
        show_barcode: this.pos_settings.show_barcode,
        show_discount: this.pos_settings.show_discount,
        show_phone: this.pos_settings.show_phone,
        show_email: this.pos_settings.show_email,
        show_address: this.pos_settings.show_address,
        show_customer: this.pos_settings.show_customer
      }).then(function (response) {
        Fire.$emit("Event_Pos_Settings");
        _this8.makeToast("success", _this8.$t("Successfully_Updated"), _this8.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
      });
    },
    //---------------------------------- Update SMTP ----------------\\
    Update_Smtp: function Update_Smtp() {
      var _this9 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.put("SMTP/" + this.server.id, {
        host: this.server.host,
        port: this.server.port,
        username: this.server.username,
        password: this.server.password,
        encryption: this.server.encryption
      }).then(function (response) {
        Fire.$emit("Event_Smtp");
        _this9.makeToast("success", _this9.$t("Successfully_Updated"), _this9.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
      });
    },
    //---------------------------------- Update Payment Gateway ----------------\\
    Update_Payment: function Update_Payment() {
      var _this0 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment_gateway", {
        stripe_key: this.gateway.stripe_key,
        stripe_secret: this.gateway.stripe_secret,
        deleted: this.gateway.deleted
      }).then(function (response) {
        Fire.$emit("Event_payment");
        _this0.makeToast("success", _this0.$t("Successfully_Updated"), _this0.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this0.makeToast("danger", _this0.$t("InvalidData"), _this0.$t("Failed"));
      });
    },
    //---------------------------------- Update sms ----------------\\
    Update_SMS: function Update_SMS() {
      var _this1 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("sms_config", {
        TWILIO_SID: this.sms.TWILIO_SID,
        TWILIO_TOKEN: this.sms.TWILIO_TOKEN,
        TWILIO_FROM: this.sms.TWILIO_FROM
      }).then(function (response) {
        Fire.$emit("Event_sms");
        _this1.makeToast("success", _this1.$t("Successfully_Updated"), _this1.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this1.makeToast("danger", _this1.$t("InvalidData"), _this1.$t("Failed"));
      });
    },
    //---------------------------------- get_sms_config ----------------\\
    get_sms_config: function get_sms_config() {
      var _this10 = this;
      axios.get("get_sms_config").then(function (response) {
        _this10.sms = response.data.sms;
      })["catch"](function (error) {});
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this11 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Clear_Cache").then(function (response) {
        _this11.makeToast("success", _this11.$t("Cache_cleared_successfully"), _this11.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this11.makeToast("danger", _this11.$t("Failed_to_clear_cache"), _this11.$t("Failed"));
      });
    },
    //---------------------------------- GET Payment_Gateway ----------------\\
    Get_Payment_Gateway: function Get_Payment_Gateway() {
      var _this12 = this;
      axios.get("Get_payment_gateway").then(function (response) {
        _this12.gateway = response.data.gateway;
      })["catch"](function (error) {});
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this13 = this;
      axios.get("getSettings").then(function (response) {
        _this13.setting = response.data.settings;
        _this13.currencies = response.data.currencies;
        _this13.clients = response.data.clients;
        _this13.warehouses = response.data.warehouses;
        _this13.Get_SMTP();
        _this13.get_pos_Settings();
        _this13.Get_Payment_Gateway();
        _this13.get_sms_config();
        _this13.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this13.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------- GET SMTP ----------------\\ 
    Get_SMTP: function Get_SMTP() {
      var _this14 = this;
      axios.get("getSMTP").then(function (response) {
        _this14.server = response.data.server;
      })["catch"](function (error) {});
    },
    //---------------------------------- Get_pos_Settings ----------------\\ 
    get_pos_Settings: function get_pos_Settings() {
      var _this15 = this;
      axios.get("get_pos_Settings").then(function (response) {
        _this15.pos_settings = response.data.pos_settings;
      })["catch"](function (error) {});
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this16 = this;
    this.Get_Settings();
    Fire.$on("Event_Smtp", function () {
      _this16.Get_SMTP();
    });
    Fire.$on("Event_payment", function () {
      _this16.Get_Payment_Gateway();
    });
    Fire.$on("Event_Setting", function () {
      _this16.Get_Settings();
    });
    Fire.$on("Event_Pos_Settings", function () {
      _this16.get_pos_Settings();
    });
    Fire.$on("Event_sms", function () {
      _this16.get_sms_config();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4 ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('SystemSettings'),"folder":_vm.$t('Settings')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"form_setting"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Setting.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('SystemSettings')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('DefaultCurrency')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Currency'),"options":_vm.currencies.map(function (currencies) { return ({label: currencies.name, value: currencies.id}); })},model:{value:(_vm.setting.currency_id),callback:function ($$v) {_vm.$set(_vm.setting, "currency_id", $$v)},expression:"setting.currency_id"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Email","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('DefaultEmail')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Email-feedback","label":"Email","placeholder":_vm.$t('DefaultEmail')},model:{value:(_vm.setting.email),callback:function ($$v) {_vm.$set(_vm.setting, "email", $$v)},expression:"setting.email"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,2739386684)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{ref:"Logo",attrs:{"name":"Logo","rules":"mimes:image/*|size:200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var validate = ref.validate;
var valid = ref.valid;
var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('ChangeLogo')}},[_c('input',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"label":"Choose Logo","type":"file"},on:{"change":_vm.onFileSelected}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Logo-feedback"}},[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,3189141354)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Company Name","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('CompanyName')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Company-feedback","label":"Company Name","placeholder":_vm.$t('CompanyName')},model:{value:(_vm.setting.CompanyName),callback:function ($$v) {_vm.$set(_vm.setting, "CompanyName", $$v)},expression:"setting.CompanyName"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Company-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,2474740188)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Company Phone","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('CompanyPhone')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Phone-feedback","label":"Company Phone","placeholder":_vm.$t('CompanyPhone')},model:{value:(_vm.setting.CompanyPhone),callback:function ($$v) {_vm.$set(_vm.setting, "CompanyPhone", $$v)},expression:"setting.CompanyPhone"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Phone-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1732497948)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"developed by","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('developed_by')}},[_c('b-form-input',{staticClass:"form-control",attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"developed_by-feedback"},model:{value:(_vm.setting.developed_by),callback:function ($$v) {_vm.$set(_vm.setting, "developed_by", $$v)},expression:"setting.developed_by"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"developed_by-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,442954484)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"footer","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('footer')}},[_c('b-form-input',{staticClass:"form-control",attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"footer-feedback"},model:{value:(_vm.setting.footer),callback:function ($$v) {_vm.$set(_vm.setting, "footer", $$v)},expression:"setting.footer"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3442615380)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"DefaultLanguage","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var valid = ref.valid;
var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('DefaultLanguage')}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('DefaultLanguage'),"options":[
                                {label: 'English', value: 'en'},
                                {label: 'French', value: 'fr'},
                                {label: 'Arabic', value: 'ar'},
                                {label: 'Turkish', value: 'tur'},
                                {label: 'Simplified Chinese', value: 'sm_ch'},
                                {label: 'Thaï', value: 'thai'},
                                {label: 'Hindi', value: 'hn'},
                                {label: 'German', value: 'de'},
                                {label: 'Spanish', value: 'es'},
                                {label: 'Italien', value: 'it'},
                                {label: 'Indonesian', value: 'Ind'},
                                {label: 'Traditional Chinese', value: 'tr_ch'},
                                {label: 'Russian', value: 'ru'},
                                {label: 'Vietnamese', value: 'vn'} ]},model:{value:(_vm.setting.default_language),callback:function ($$v) {_vm.$set(_vm.setting, "default_language", $$v)},expression:"setting.default_language"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,3231571699)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('DefaultCustomer')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Customer'),"options":_vm.clients.map(function (clients) { return ({label: clients.name, value: clients.id}); })},model:{value:(_vm.setting.client_id),callback:function ($$v) {_vm.$set(_vm.setting, "client_id", $$v)},expression:"setting.client_id"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('DefaultWarehouse')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Warehouse'),"options":_vm.warehouses.map(function (warehouses) { return ({label: warehouses.name, value: warehouses.id}); })},model:{value:(_vm.setting.warehouse_id),callback:function ($$v) {_vm.$set(_vm.setting, "warehouse_id", $$v)},expression:"setting.warehouse_id"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Adress","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Adress')}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.setting.CompanyAdress),expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Adress-feedback","placeholder":_vm.$t('Afewwords')},domProps:{"value":(_vm.setting.CompanyAdress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.setting, "CompanyAdress", $event.target.value)}}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Adress-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3471601747)})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"Submit_Pos_Settings"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Pos_Settings.apply(null, arguments)}}},[_c('b-row',{staticClass:"mt-5"},[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('Pos_Settings')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"note","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Note_to_customer')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"note-feedback","label":"Note to customer","placeholder":_vm.$t('Note_to_customer')},model:{value:(_vm.pos_settings.note_customer),callback:function ($$v) {_vm.$set(_vm.pos_settings, "note_customer", $$v)},expression:"pos_settings.note_customer"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"note-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3151180856)})],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Phone'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_phone),expression:"pos_settings.show_phone"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_phone)?_vm._i(_vm.pos_settings.show_phone,null)>-1:(_vm.pos_settings.show_phone)},on:{"change":function($event){var $$a=_vm.pos_settings.show_phone,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_phone", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_phone", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_phone", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Address'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_address),expression:"pos_settings.show_address"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_address)?_vm._i(_vm.pos_settings.show_address,null)>-1:(_vm.pos_settings.show_address)},on:{"change":function($event){var $$a=_vm.pos_settings.show_address,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_address", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_address", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_address", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Email'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_email),expression:"pos_settings.show_email"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_email)?_vm._i(_vm.pos_settings.show_email,null)>-1:(_vm.pos_settings.show_email)},on:{"change":function($event){var $$a=_vm.pos_settings.show_email,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_email", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_email", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_email", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Customer'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_customer),expression:"pos_settings.show_customer"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_customer)?_vm._i(_vm.pos_settings.show_customer,null)>-1:(_vm.pos_settings.show_customer)},on:{"change":function($event){var $$a=_vm.pos_settings.show_customer,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_customer", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_customer", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_customer", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Tax_and_Discount'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_discount),expression:"pos_settings.show_discount"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_discount)?_vm._i(_vm.pos_settings.show_discount,null)>-1:(_vm.pos_settings.show_discount)},on:{"change":function($event){var $$a=_vm.pos_settings.show_discount,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_discount", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_discount", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_discount", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_barcode'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_barcode),expression:"pos_settings.show_barcode"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_barcode)?_vm._i(_vm.pos_settings.show_barcode,null)>-1:(_vm.pos_settings.show_barcode)},on:{"change":function($event){var $$a=_vm.pos_settings.show_barcode,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_barcode", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_barcode", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_barcode", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"4"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Show_Note_to_customer'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pos_settings.show_note),expression:"pos_settings.show_note"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.pos_settings.show_note)?_vm._i(_vm.pos_settings.show_note,null)>-1:(_vm.pos_settings.show_note)},on:{"change":function($event){var $$a=_vm.pos_settings.show_note,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.pos_settings, "show_note", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.pos_settings, "show_note", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.pos_settings, "show_note", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"form_payment"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Payment.apply(null, arguments)}}},[_c('b-row',{staticClass:"mt-5"},[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('Payment_Gateway')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":"STRIPE_KEY"}},[_c('b-form-input',{attrs:{"type":"password","placeholder":_vm.$t('LeaveBlank')},model:{value:(_vm.gateway.stripe_key),callback:function ($$v) {_vm.$set(_vm.gateway, "stripe_key", $$v)},expression:"gateway.stripe_key"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":"STRIPE_SECRET"}},[_c('b-form-input',{attrs:{"type":"password","placeholder":_vm.$t('LeaveBlank')},model:{value:(_vm.gateway.stripe_secret),callback:function ($$v) {_vm.$set(_vm.gateway, "stripe_secret", $$v)},expression:"gateway.stripe_secret"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3 mb-3",attrs:{"md":"6"}},[_c('label',{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                       "+_vm._s(_vm.$t('Remove_Stripe_Key_Secret'))+"\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gateway.deleted),expression:"gateway.deleted"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.gateway.deleted)?_vm._i(_vm.gateway.deleted,null)>-1:(_vm.gateway.deleted)},on:{"change":function($event){var $$a=_vm.gateway.deleted,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.gateway, "deleted", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.gateway, "deleted", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.gateway, "deleted", $$c)}}}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"form_sms"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_sms.apply(null, arguments)}}},[_c('b-row',{staticClass:"mt-5"},[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('SMS_Configuration')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"md":"6"}},[_c('validation-provider',{attrs:{"name":"Gateway"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Gateway')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Gateway'),"options":[
                                {label: 'Twilio', value: 'Twilio'} ]},model:{value:(_vm.sms.gateway),callback:function ($$v) {_vm.$set(_vm.sms, "gateway", $$v)},expression:"sms.gateway"}})],1)],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"TWILIO_SID","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":"TWILIO_SID"}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_SID-feedback","label":"TWILIO_SID"},model:{value:(_vm.sms.TWILIO_SID),callback:function ($$v) {_vm.$set(_vm.sms, "TWILIO_SID", $$v)},expression:"sms.TWILIO_SID"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"TWILIO_SID-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3763386067)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":"TWILIO_TOKEN"}},[_c('b-form-input',{attrs:{"label":"TWILIO_TOKEN","placeholder":_vm.$t('LeaveBlank')},model:{value:(_vm.sms.TWILIO_TOKEN),callback:function ($$v) {_vm.$set(_vm.sms, "TWILIO_TOKEN", $$v)},expression:"sms.TWILIO_TOKEN"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"TWILIO_FROM","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":"TWILIO_FROM"}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_FROM-feedback","label":"TWILIO_FROM"},model:{value:(_vm.sms.TWILIO_FROM),callback:function ($$v) {_vm.$set(_vm.sms, "TWILIO_FROM", $$v)},expression:"sms.TWILIO_FROM"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"TWILIO_FROM-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3199732955)})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"form_smtp"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_SMTP.apply(null, arguments)}}},[_c('b-row',{staticClass:"mt-5"},[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('SMTPConfiguration')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"HOST","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('HOST')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"HOST-feedback","label":"HOST","placeholder":_vm.$t('HOST')},model:{value:(_vm.server.host),callback:function ($$v) {_vm.$set(_vm.server, "host", $$v)},expression:"server.host"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"HOST-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,593553647)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"PORT","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('PORT')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"PORT-feedback","label":"PORT","placeholder":_vm.$t('PORT')},model:{value:(_vm.server.port),callback:function ($$v) {_vm.$set(_vm.server, "port", $$v)},expression:"server.port"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"PORT-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1686597967)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Username","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('username')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Username-feedback","label":"Username","placeholder":_vm.$t('username')},model:{value:(_vm.server.username),callback:function ($$v) {_vm.$set(_vm.server, "username", $$v)},expression:"server.username"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Username-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1793296271)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Password","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('password')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Password-feedback","label":"Password","placeholder":_vm.$t('password')},model:{value:(_vm.server.password),callback:function ($$v) {_vm.$set(_vm.server, "password", $$v)},expression:"server.password"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Password-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,4152382255)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"encryption","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('encryption')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"encryption-feedback","label":"encryption","placeholder":_vm.$t('encryption')},model:{value:(_vm.server.encryption),callback:function ($$v) {_vm.$set(_vm.server, "encryption", $$v)},expression:"server.encryption"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"encryption-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3692260559)})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Clear_Cache.apply(null, arguments)}}},[_c('b-row',{staticClass:"mt-5"},[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',{attrs:{"no-body":"","header":_vm.$t('Clear_Cache')}},[_c('b-card-body',[_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary"},on:{"click":function($event){return _vm.Clear_Cache()}}},[_vm._v(_vm._s(_vm.$t('Clear_Cache')))])],1)],1)],1)],1)],1)],1)],1)],1):_vm._e()],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=7bd1aea4 */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./system_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4 ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./system_settings.vue?vue&type=template&id=7bd1aea4 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);