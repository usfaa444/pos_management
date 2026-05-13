(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index_sales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_easy_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-easy-print */ "./node_modules/vue-easy-print/src/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vueEasyPrint: vue_easy_print__WEBPACK_IMPORTED_MODULE_4__["default"],
    barcode: vue_barcode__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  metaInfo: {
    title: "Sales"
  },
  data: function data() {
    return {
      stripe_key: '',
      stripe: {},
      cardElement: {},
      pos_settings: {},
      paymentProcessing: false,
      isLoading: true,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      search: "",
      totalRows: "",
      barcodeFormat: "CODE128",
      showDropdown: false,
      EditPaiementMode: false,
      Filter_Client: "",
      Filter_Ref: "",
      Filter_date: "",
      Filter_status: "",
      Filter_Payment: "",
      Filter_warehouse: "",
      customers: [],
      warehouses: [],
      sales: [],
      sale_due: '',
      due: 0,
      invoice_pos: {
        sale: {
          Ref: "",
          client_name: "",
          discount: "",
          taxe: "",
          tax_rate: "",
          shipping: "",
          GrandTotal: "",
          paid_amount: ''
        },
        details: [],
        setting: {
          logo: "",
          CompanyName: "",
          CompanyAdress: "",
          email: "",
          CompanyPhone: ""
        }
      },
      payments: [],
      payment: {},
      Sale_id: "",
      limit: "10",
      sale: {},
      email: {
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Sale_Ref: ""
      },
      emailPayment: {
        id: "",
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Ref: ""
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$root.$on("bv::dropdown::show", function (bvEvent) {
      _this.showDropdown = true;
    });
    this.$root.$on("bv::dropdown::hide", function (bvEvent) {
      _this.showDropdown = false;
    });
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions", "currentUser"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Due"),
        field: "due",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  methods: {
    loadStripe_payment: function loadStripe_payment() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var elements;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__["loadStripe"])("".concat(_this2.stripe_key));
            case 1:
              _this2.stripe = _context.v;
              elements = _this2.stripe.elements();
              _this2.cardElement = elements.create("card", {
                classes: {
                  base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                }
              });
              _this2.cardElement.mount("#card-element");
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    //---------------------- Event Select Payment Method ------------------------------\\
    Selected_PaymentMethod: function Selected_PaymentMethod(value) {
      var _this3 = this;
      if (value == "credit card") {
        setTimeout(function () {
          _this3.loadStripe_payment();
        }, 500);
      }
    },
    //------------------------------ Print -------------------------\\
    print_it: function print_it() {
      var divContents = document.getElementById("invoice-POS").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/css/pos_print.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Sales(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Sales(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this4 = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this4.selectedIds.push(row.id);
      });
    },
    //---- Event Sort change
    onSortChange: function onSortChange(params) {
      var field = "";
      if (params[0].field == "client_name") {
        field = "client_id";
      } else if (params[0].field == "warehouse_name") {
        field = "warehouse_id";
      } else {
        field = params[0].field;
      }
      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Get_Sales(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Sales(this.serverParams.page);
    },
    //---------- keyup paid Amount
    Verified_paidAmount: function Verified_paidAmount() {
      if (isNaN(this.payment.montant)) {
        this.payment.montant = 0;
      } else if (this.payment.montant > this.payment.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.payment.montant = 0;
      } else if (this.payment.montant > this.due) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.payment.montant = 0;
      }
    },
    //---------- keyup Received Amount
    Verified_Received_Amount: function Verified_Received_Amount() {
      if (isNaN(this.payment.received_amount)) {
        this.payment.received_amount = 0;
      }
    },
    //------ Validate Form Submit_Payment
    Submit_Payment: function Submit_Payment() {
      var _this5 = this;
      this.$refs.Add_payment.validate().then(function (success) {
        if (!success) {
          return;
        } else if (_this5.payment.montant > _this5.payment.received_amount) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Received_amount"), _this5.$t("Warning"));
          _this5.payment.received_amount = 0;
        } else if (_this5.payment.montant > _this5.due) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Grand_Total"), _this5.$t("Warning"));
          _this5.payment.montant = 0;
        } else if (!_this5.EditPaiementMode) {
          _this5.Create_Payment();
        } else {
          _this5.Update_Payment();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
        validated = _ref4.validated,
        _ref4$valid = _ref4.valid,
        valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Client = "";
      this.Filter_status = "";
      this.Filter_Payment = "";
      this.Filter_Ref = "";
      this.Filter_date = "";
      this.Filter_warehouse = "", this.Get_Sales(this.serverParams.page);
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    //----------------------------------- Sales PDF ------------------------------\\
    Sales_PDF: function Sales_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "Ref",
        dataKey: "Ref"
      }, {
        title: "Client",
        dataKey: "client_name"
      }, {
        title: "Status",
        dataKey: "statut"
      }, {
        title: "Total",
        dataKey: "GrandTotal"
      }, {
        title: "Paid",
        dataKey: "paid_amount"
      }, {
        title: "Due",
        dataKey: "due"
      }, {
        title: "Status Payment",
        dataKey: "payment_status"
      }];
      pdf.autoTable(columns, self.sales);
      pdf.text("Sale List", 40, 25);
      pdf.save("Sale_List.pdf");
    },
    //-------------------------------- Invoice POS ------------------------------\\
    Invoice_POS: function Invoice_POS(id) {
      var _this6 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Sales/Print_Invoice/" + id).then(function (response) {
        _this6.invoice_pos = response.data;
        _this6.payments = response.data.payments;
        _this6.pos_settings = response.data.pos_settings;
        setTimeout(function () {
          // Complete the animation of the  progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
          _this6.$bvModal.show("Show_invoice");
        }, 500);
        setTimeout(function () {
          return _this6.print_it();
        }, 1000);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //-------------------------------- Sales Excel ------------------------------\\
    Sales_Excel: function Sales_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("sales/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Sales.xlsx");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //-----------------------------  Invoice PDF ------------------------------\\
    Invoice_PDF: function Invoice_PDF(sale, id) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Sale_PDF/" + id, {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Sale-" + sale.Ref + ".pdf");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //------------------------ Payments Sale PDF ------------------------------\\
    Payment_Sale_PDF: function Payment_Sale_PDF(payment, id) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("payment_Sale_PDF/" + id, {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Payment-" + payment.Ref + ".pdf");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.Filter_Client === null) {
        this.Filter_Client = "";
      } else if (this.Filter_warehouse === null) {
        this.Filter_warehouse = "";
      } else if (this.Filter_status === null) {
        this.Filter_status = "";
      } else if (this.Filter_Payment === null) {
        this.Filter_Payment = "";
      }
    },
    //----------------------------------------- Get all Sales ------------------------------\\
    Get_Sales: function Get_Sales(page) {
      var _this7 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.setToStrings();
      axios.get("sales?page=" + page + "&Ref=" + this.Filter_Ref + "&date=" + this.Filter_date + "&client_id=" + this.Filter_Client + "&statut=" + this.Filter_status + "&warehouse_id=" + this.Filter_warehouse + "&payment_statut=" + this.Filter_Payment + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this7.sales = response.data.sales;
        _this7.customers = response.data.customers;
        _this7.warehouses = response.data.warehouses;
        _this7.totalRows = response.data.totalRows;
        _this7.stripe_key = response.data.stripe_key;
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this7.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this7.isLoading = false;
        }, 500);
      });
    },
    //---------SMS notification
    Payment_Sale_SMS: function Payment_Sale_SMS(payment) {
      var _this8 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment/sale/send/sms", {
        id: payment.id
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this8.makeToast("success", _this8.$t("Send_SMS"), _this8.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this8.makeToast("danger", _this8.$t("sms_config_invalid"), _this8.$t("Failed"));
      });
    },
    //--------------------------------------------- Send Payment to Email -------------------------------\\
    EmailPayment: function EmailPayment(payment, sale) {
      this.emailPayment.id = payment.id;
      this.emailPayment.to = sale.client_email;
      this.emailPayment.Ref = payment.Ref;
      this.emailPayment.client_name = sale.client_name;
      this.Send_Email_Payment();
    },
    Send_Email_Payment: function Send_Email_Payment() {
      var _this9 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment/sale/send/email", {
        id: this.emailPayment.id,
        to: this.emailPayment.to,
        client_name: this.emailPayment.client_name,
        Ref: this.emailPayment.Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this9.makeToast("success", _this9.$t("Send.TitleEmail"), _this9.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this9.makeToast("danger", _this9.$t("SMTPIncorrect"), _this9.$t("Failed"));
      });
    },
    //--------------------------------- Send Sale in Email ------------------------------\\
    Sale_Email: function Sale_Email(sale) {
      this.email.to = sale.client_email;
      this.email.Sale_Ref = sale.Ref;
      this.email.client_name = sale.client_name;
      this.Send_Email(sale.id);
    },
    Send_Email: function Send_Email(id) {
      var _this0 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("sales/send/email", {
        id: id,
        to: this.email.to,
        client_name: this.email.client_name,
        Ref: this.email.Sale_Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this0.makeToast("success", _this0.$t("Send.TitleEmail"), _this0.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
        _this0.makeToast("danger", _this0.$t("SMTPIncorrect"), _this0.$t("Failed"));
      });
    },
    Number_Order_Payment: function Number_Order_Payment() {
      var _this1 = this;
      axios.get("payment/sale/Number/Order").then(function (_ref5) {
        var data = _ref5.data;
        return _this1.payment.Ref = data;
      });
    },
    //----------------------------------- New Payment Sale ------------------------------\\
    New_Payment: function New_Payment(sale) {
      var _this10 = this;
      if (sale.payment_status == "paid") {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: this.$t("PaymentComplete")
        });
      } else {
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
        this.reset_form_payment();
        this.EditPaiementMode = false;
        this.sale = sale;
        this.payment.date = new Date().toISOString().slice(0, 10);
        this.Number_Order_Payment();
        this.payment.montant = sale.due;
        this.payment.Reglement = 'Cash';
        this.payment.received_amount = sale.due;
        this.due = parseFloat(sale.due);
        setTimeout(function () {
          // Complete the animation of the  progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
          _this10.$bvModal.show("Add_Payment");
        }, 500);
      }
    },
    //------------------------------------Edit Payment ------------------------------\\
    Edit_Payment: function Edit_Payment(payment) {
      var _this11 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.reset_form_payment();
      this.EditPaiementMode = true;
      this.payment.id = payment.id;
      this.payment.Ref = payment.Ref;
      this.payment.Reglement = payment.Reglement;
      this.payment.date = payment.date;
      this.payment.change = payment.change;
      this.payment.montant = payment.montant;
      this.payment.received_amount = parseFloat(payment.montant + payment.change).toFixed(2);
      this.payment.notes = payment.notes;
      this.due = parseFloat(this.sale_due) + payment.montant;
      setTimeout(function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this11.$bvModal.show("Add_Payment");
      }, 1000);
      if (payment.Reglement == "credit card") {
        setTimeout(function () {
          _this11.loadStripe_payment();
        }, 500);
      }
    },
    //-------------------------------Show All Payment with Sale ---------------------\\
    Show_Payments: function Show_Payments(id, sale) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.reset_form_payment();
      this.Sale_id = id;
      this.sale = sale;
      this.Get_Payments(id);
    },
    //----------------------------------Process Payment (Mode Create) ------------------------------\\
    processPayment_Create: function processPayment_Create() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$_this12$stripe, token, error;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this12.stripe.createToken(_this12.cardElement);
            case 1:
              _yield$_this12$stripe = _context2.v;
              token = _yield$_this12$stripe.token;
              error = _yield$_this12$stripe.error;
              if (error) {
                _this12.paymentProcessing = false;
                nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
                _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
              } else {
                axios.post("payment/sale", {
                  sale_id: _this12.sale.id,
                  client_email: _this12.sale.client_email,
                  client_id: _this12.sale.client_id,
                  date: _this12.payment.date,
                  montant: parseFloat(_this12.payment.montant).toFixed(2),
                  received_amount: parseFloat(_this12.payment.received_amount).toFixed(2),
                  change: parseFloat(_this12.payment.received_amount - _this12.payment.montant).toFixed(2),
                  Reglement: _this12.payment.Reglement,
                  notes: _this12.payment.notes,
                  token: token.id
                }).then(function (response) {
                  _this12.paymentProcessing = false;
                  Fire.$emit("Create_Facture_sale");
                  _this12.makeToast("success", _this12.$t("Create.TitlePayment"), _this12.$t("Success"));
                })["catch"](function (error) {
                  _this12.paymentProcessing = false;
                  // Complete the animation of the  progress bar.
                  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
                  _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
                });
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //----------------------------------Process Payment (Mode Edit) ------------------------------\\
    processPayment_Update: function processPayment_Update() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this13$stripe, token, error;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this13.stripe.createToken(_this13.cardElement);
            case 1:
              _yield$_this13$stripe = _context3.v;
              token = _yield$_this13$stripe.token;
              error = _yield$_this13$stripe.error;
              if (error) {
                _this13.paymentProcessing = false;
                nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
                _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
              } else {
                axios.put("payment/sale/" + _this13.payment.id, {
                  sale_id: _this13.sale.id,
                  client_email: _this13.sale.client_email,
                  client_id: _this13.sale.client_id,
                  date: _this13.payment.date,
                  montant: parseFloat(_this13.payment.montant).toFixed(2),
                  received_amount: parseFloat(_this13.payment.received_amount).toFixed(2),
                  change: parseFloat(_this13.payment.received_amount - _this13.payment.montant).toFixed(2),
                  Reglement: _this13.payment.Reglement,
                  notes: _this13.payment.notes,
                  token: token.id
                }).then(function (response) {
                  _this13.paymentProcessing = false;
                  Fire.$emit("Update_Facture_sale");
                  _this13.makeToast("success", _this13.$t("Update.TitlePayment"), _this13.$t("Success"));
                })["catch"](function (error) {
                  _this13.paymentProcessing = false;
                  // Complete the animation of the  progress bar.
                  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
                  _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
                });
              }
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    //----------------------------------Create Payment sale ------------------------------\\
    Create_Payment: function Create_Payment() {
      var _this14 = this;
      this.paymentProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      if (this.payment.Reglement == 'credit card') {
        if (this.stripe_key != '') {
          this.processPayment_Create();
        } else {
          this.makeToast("danger", this.$t("credit_card_account_not_available"), this.$t("Failed"));
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
          this.paymentProcessing = false;
        }
      } else {
        axios.post("payment/sale", {
          sale_id: this.sale.id,
          date: this.payment.date,
          montant: parseFloat(this.payment.montant).toFixed(2),
          received_amount: parseFloat(this.payment.received_amount).toFixed(2),
          change: parseFloat(this.payment.received_amount - this.payment.montant).toFixed(2),
          Reglement: this.payment.Reglement,
          notes: this.payment.notes
        }).then(function (response) {
          _this14.paymentProcessing = false;
          Fire.$emit("Create_Facture_sale");
          _this14.makeToast("success", _this14.$t("Create.TitlePayment"), _this14.$t("Success"));
        })["catch"](function (error) {
          _this14.paymentProcessing = false;
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        });
      }
    },
    //---------------------------------------- Update Payment ------------------------------\\
    Update_Payment: function Update_Payment() {
      var _this15 = this;
      this.paymentProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      if (this.payment.Reglement == 'credit card') {
        if (this.stripe_key != '') {
          this.processPayment_Update();
        } else {
          this.makeToast("danger", this.$t("credit_card_account_not_available"), this.$t("Failed"));
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
          this.paymentProcessing = false;
        }
      } else {
        axios.put("payment/sale/" + this.payment.id, {
          sale_id: this.sale.id,
          date: this.payment.date,
          montant: parseFloat(this.payment.montant).toFixed(2),
          received_amount: parseFloat(this.payment.received_amount).toFixed(2),
          change: parseFloat(this.payment.received_amount - this.payment.montant).toFixed(2),
          Reglement: this.payment.Reglement,
          notes: this.payment.notes
        }).then(function (response) {
          _this15.paymentProcessing = false;
          Fire.$emit("Update_Facture_sale");
          _this15.makeToast("success", _this15.$t("Update.TitlePayment"), _this15.$t("Success"));
        })["catch"](function (error) {
          _this15.paymentProcessing = false;
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        });
      }
    },
    //----------------------------------------- Remove Payment ------------------------------\\
    Remove_Payment: function Remove_Payment(id) {
      var _this16 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios["delete"]("payment/sale/" + id).then(function () {
            _this16.$swal(_this16.$t("Delete.Deleted"), _this16.$t("Delete.PaymentDeleted"), "success");
            Fire.$emit("Delete_Facture_sale");
          })["catch"](function () {
            // Complete the animation of the  progress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);
            _this16.$swal(_this16.$t("Delete.Failed"), _this16.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //----------------------------------------- Get Payments  -------------------------------\\
    Get_Payments: function Get_Payments(id) {
      var _this17 = this;
      axios.get("sales/payments/" + id).then(function (response) {
        _this17.payments = response.data.payments;
        _this17.sale_due = response.data.due;
        setTimeout(function () {
          // Complete the animation of the  progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
          _this17.$bvModal.show("Show_payment");
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //------------------------------------------ Reset Form Payment ------------------------------\\
    reset_form_payment: function reset_form_payment() {
      this.due = 0;
      this.payment = {
        id: "",
        Sale_id: "",
        date: "",
        Ref: "",
        montant: "",
        received_amount: "",
        Reglement: "",
        notes: ""
      };
    },
    //------------------------------------------ Remove Sale ------------------------------\\
    Remove_Sale: function Remove_Sale(id) {
      var _this18 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios["delete"]("sales/" + id).then(function () {
            _this18.$swal(_this18.$t("Delete.Deleted"), _this18.$t("Delete.SaleDeleted"), "success");
            Fire.$emit("Delete_sale");
          })["catch"](function () {
            // Complete the animation of the  progress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);
            _this18.$swal(_this18.$t("Delete.Failed"), _this18.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete sales by selection
    delete_by_selected: function delete_by_selected() {
      var _this19 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios.post("sales/delete/by_selection", {
            selectedIds: _this19.selectedIds
          }).then(function () {
            _this19.$swal(_this19.$t("Delete.Deleted"), _this19.$t("Delete.SaleDeleted"), "success");
            Fire.$emit("Delete_sale");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);
            _this19.$swal(_this19.$t("Delete.Failed"), _this19.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //----------------------------- Created function-------------------\\
  created: function created() {
    var _this20 = this;
    this.Get_Sales(1);
    Fire.$on("Create_Facture_sale", function () {
      setTimeout(function () {
        _this20.Get_Sales(_this20.serverParams.page);
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this20.$bvModal.hide("Add_Payment");
      }, 500);
    });
    Fire.$on("Update_Facture_sale", function () {
      setTimeout(function () {
        _this20.Get_Payments(_this20.Sale_id);
        _this20.Get_Sales(_this20.serverParams.page);
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this20.$bvModal.hide("Add_Payment");
      }, 500);
    });
    Fire.$on("Delete_Facture_sale", function () {
      setTimeout(function () {
        _this20.Get_Payments(_this20.Sale_id);
        _this20.Get_Sales(_this20.serverParams.page);
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
    Fire.$on("Delete_sale", function () {
      setTimeout(function () {
        _this20.Get_Sales(_this20.serverParams.page);
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.total{\n  font-weight: bold;\n  font-size: 14px;\n  /* text-transform: uppercase;\n  height: 50px; */\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('ListSales'),"folder":_vm.$t('Sales')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_c('div',[_c('vue-good-table',{attrs:{"mode":"remote","columns":_vm.columns,"totalRows":_vm.totalRows,"rows":_vm.sales,"search-options":{
      placeholder: _vm.$t('Search_this_table'),
      enabled: true,
    },"select-options":{ 
        enabled: true ,
        clearSelectionText: '',
      },"pagination-options":{
      enabled: true,
      mode: 'records',
      nextLabel: 'next',
      prevLabel: 'prev',
    },"styleClass":_vm.showDropdown?'tableOne table-hover vgt-table full-height':'tableOne table-hover vgt-table non-height'},on:{"on-page-change":_vm.onPageChange,"on-per-page-change":_vm.onPerPageChange,"on-sort-change":_vm.onSortChange,"on-search":_vm.onSearch,"on-selected-rows-change":_vm.selectionChanged},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'actions')?_c('span',[_c('div',[_c('b-dropdown',{attrs:{"id":"dropdown-right","variant":"link","text":"right align","toggle-class":"text-decoration-none","size":"lg","right":"","no-caret":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('span',{staticClass:"_dot _r_block-dot bg-dark"}),_vm._v(" "),_c('span',{staticClass:"_dot _r_block-dot bg-dark"}),_vm._v(" "),_c('span',{staticClass:"_dot _r_block-dot bg-dark"})]},proxy:true}],null,true)},[_vm._v(" "),_c('b-navbar-nav',[_c('b-dropdown-item',{attrs:{"title":"Show","to":'/app/sales/detail/'+props.row.id}},[_c('i',{staticClass:"nav-icon i-Eye font-weight-bold mr-2"}),_vm._v("\n                  "+_vm._s(_vm.$t('SaleDetail'))+"\n                ")])],1),_vm._v(" "),(_vm.currentUserPermissions.includes('Sales_edit'))?_c('b-dropdown-item',{attrs:{"title":"Edit","to":'/app/sales/edit/'+props.row.id}},[_c('i',{staticClass:"nav-icon i-Pen-2 font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('EditSale'))+"\n              ")]):_vm._e(),_vm._v(" "),(_vm.currentUserPermissions.includes('payment_sales_view'))?_c('b-dropdown-item',{on:{"click":function($event){return _vm.Show_Payments(props.row.id , props.row)}}},[_c('i',{staticClass:"nav-icon i-Money-Bag font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('ShowPayment'))+"\n              ")]):_vm._e(),_vm._v(" "),(_vm.currentUserPermissions.includes('payment_sales_add'))?_c('b-dropdown-item',{on:{"click":function($event){return _vm.New_Payment(props.row)}}},[_c('i',{staticClass:"nav-icon i-Add font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('AddPayment'))+"\n              ")]):_vm._e(),_vm._v(" "),_c('b-dropdown-item',{attrs:{"title":"Invoice"},on:{"click":function($event){return _vm.Invoice_POS(props.row.id)}}},[_c('i',{staticClass:"nav-icon i-File-TXT font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('Invoice_POS'))+"\n              ")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"title":"PDF"},on:{"click":function($event){return _vm.Invoice_PDF(props.row , props.row.id)}}},[_c('i',{staticClass:"nav-icon i-File-TXT font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('DownloadPdf'))+"\n              ")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"title":"Email"},on:{"click":function($event){return _vm.Sale_Email(props.row , props.row.id)}}},[_c('i',{staticClass:"nav-icon i-Envelope-2 font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('EmailSale'))+"\n              ")]),_vm._v(" "),(_vm.currentUserPermissions.includes('Sales_delete'))?_c('b-dropdown-item',{attrs:{"title":"Delete"},on:{"click":function($event){return _vm.Remove_Sale(props.row.id)}}},[_c('i',{staticClass:"nav-icon i-Close-Window font-weight-bold mr-2"}),_vm._v("\n                "+_vm._s(_vm.$t('DeleteSale'))+"\n              ")]):_vm._e()],1)],1)]):(props.column.field == 'statut')?_c('div',[(props.row.statut == 'completed')?_c('span',{staticClass:"badge badge-outline-success"},[_vm._v(_vm._s(_vm.$t('complete')))]):(props.row.statut == 'pending')?_c('span',{staticClass:"badge badge-outline-info"},[_vm._v(_vm._s(_vm.$t('Pending')))]):_c('span',{staticClass:"badge badge-outline-warning"},[_vm._v(_vm._s(_vm.$t('Ordered')))])]):(props.column.field == 'payment_status')?_c('div',[(props.row.payment_status == 'paid')?_c('span',{staticClass:"badge badge-outline-success"},[_vm._v(_vm._s(_vm.$t('Paid')))]):(props.row.payment_status == 'partial')?_c('span',{staticClass:"badge badge-outline-primary"},[_vm._v(_vm._s(_vm.$t('partial')))]):_c('span',{staticClass:"badge badge-outline-warning"},[_vm._v(_vm._s(_vm.$t('Unpaid')))])]):_vm._e()]}}])},[_c('div',{attrs:{"slot":"selected-row-actions"},slot:"selected-row-actions"},[_c('button',{staticClass:"btn btn-danger btn-sm",on:{"click":function($event){return _vm.delete_by_selected()}}},[_vm._v(_vm._s(_vm.$t('Del')))])]),_vm._v(" "),_c('div',{staticClass:"mt-2 mb-3",attrs:{"slot":"table-actions"},slot:"table-actions"},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":true}}],attrs:{"variant":"outline-info ripple m-1","size":"sm"}},[_c('i',{staticClass:"i-Filter-2"}),_vm._v("\n          "+_vm._s(_vm.$t("Filter"))+"\n        ")]),_vm._v(" "),_c('b-button',{attrs:{"size":"sm","variant":"outline-success ripple m-1"},on:{"click":function($event){return _vm.Sales_PDF()}}},[_c('i',{staticClass:"i-File-Copy"}),_vm._v(" PDF\n        ")]),_vm._v(" "),_c('b-button',{attrs:{"size":"sm","variant":"outline-danger ripple m-1"},on:{"click":function($event){return _vm.Sales_Excel()}}},[_c('i',{staticClass:"i-File-Excel"}),_vm._v(" EXCEL\n        ")]),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('Sales_add'))?_c('router-link',{staticClass:"btn-sm btn btn-primary ripple btn-icon m-1",attrs:{"to":"/app/sales/store"}},[_c('span',{staticClass:"ul-btn__icon"},[_c('i',{staticClass:"i-Add"})]),_vm._v(" "),_c('span',{staticClass:"ul-btn__text ml-1"},[_vm._v(_vm._s(_vm.$t('Add')))])]):_vm._e()],1)])],1),_vm._v(" "),_c('b-sidebar',{attrs:{"id":"sidebar-right","title":_vm.$t('Filter'),"bg-variant":"white","right":"","shadow":""}},[_c('div',{staticClass:"px-3 py-2"},[_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('date')}},[_c('b-form-input',{attrs:{"type":"date"},model:{value:(_vm.Filter_date),callback:function ($$v) {_vm.Filter_date=$$v},expression:"Filter_date"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Reference')}},[_c('b-form-input',{attrs:{"label":"Reference","placeholder":_vm.$t('Reference')},model:{value:(_vm.Filter_Ref),callback:function ($$v) {_vm.Filter_Ref=$$v},expression:"Filter_Ref"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Customer')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Customer'),"options":_vm.customers.map(function (customers) { return ({label: customers.name, value: customers.id}); })},model:{value:(_vm.Filter_Client),callback:function ($$v) {_vm.Filter_Client=$$v},expression:"Filter_Client"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('warehouse')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Warehouse'),"options":_vm.warehouses.map(function (warehouses) { return ({label: warehouses.name, value: warehouses.id}); })},model:{value:(_vm.Filter_warehouse),callback:function ($$v) {_vm.Filter_warehouse=$$v},expression:"Filter_warehouse"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Status')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Status'),"options":[
                      {label: 'completed', value: 'completed'},
                      {label: 'Pending', value: 'pending'},
                      {label: 'Ordered', value: 'ordered'} ]},model:{value:(_vm.Filter_status),callback:function ($$v) {_vm.Filter_status=$$v},expression:"Filter_status"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('PaymentStatus')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Status'),"options":[
                      {label: 'Paid', value: 'paid'},
                      {label: 'partial', value: 'partial'},
                      {label: 'UnPaid', value: 'unpaid'} ]},model:{value:(_vm.Filter_Payment),callback:function ($$v) {_vm.Filter_Payment=$$v},expression:"Filter_Payment"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-button',{attrs:{"variant":"primary btn-block ripple m-1","size":"sm"},on:{"click":function($event){return _vm.Get_Sales(_vm.serverParams.page)}}},[_c('i',{staticClass:"i-Filter-2"}),_vm._v("\n            "+_vm._s(_vm.$t("Filter"))+"\n          ")])],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-button',{attrs:{"variant":"danger ripple btn-block m-1","size":"sm"},on:{"click":function($event){return _vm.Reset_Filter()}}},[_c('i',{staticClass:"i-Power-2"}),_vm._v("\n            "+_vm._s(_vm.$t("Reset"))+"\n          ")])],1)],1)],1)]),_vm._v(" "),_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"Show_payment","title":_vm.$t('ShowPayment')}},[_c('b-row',[_c('b-col',{staticClass:"mt-3",attrs:{"lg":"12","md":"12","sm":"12"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-hover table-bordered table-md"},[_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('date')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('Reference')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('Amount')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('PayeBy')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('Action')))])])]),_vm._v(" "),_c('tbody',[(_vm.payments.length <= 0)?_c('tr',[_c('td',{attrs:{"colspan":"5"}},[_vm._v(_vm._s(_vm.$t('NodataAvailable')))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.payments),function(payment){return _c('tr',[_c('td',[_vm._v(_vm._s(payment.date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(payment.Ref))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(payment.montant,2)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(payment.Reglement))]),_vm._v(" "),_c('td',[_c('div',{staticClass:"btn-group",attrs:{"role":"group","aria-label":"Basic example"}},[_c('span',{staticClass:"btn btn-icon btn-info btn-sm",attrs:{"title":"Print"},on:{"click":function($event){return _vm.Payment_Sale_PDF(payment,payment.id)}}},[_c('i',{staticClass:"i-Billing"})]),_vm._v(" "),(_vm.currentUserPermissions.includes('payment_sales_edit'))?_c('span',{staticClass:"btn btn-icon btn-success btn-sm",attrs:{"title":"Edit"},on:{"click":function($event){return _vm.Edit_Payment(payment)}}},[_c('i',{staticClass:"i-Pen-2"})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"btn btn-icon btn-primary btn-sm",attrs:{"title":"Email"},on:{"click":function($event){return _vm.EmailPayment(payment , _vm.sale)}}},[_c('i',{staticClass:"i-Envelope"})]),_vm._v(" "),_c('span',{staticClass:"btn btn-icon btn-secondary btn-sm",attrs:{"title":"SMS"},on:{"click":function($event){return _vm.Payment_Sale_SMS(payment)}}},[_c('i',{staticClass:"i-Speach-Bubble"})]),_vm._v(" "),(_vm.currentUserPermissions.includes('payment_sales_delete'))?_c('span',{staticClass:"btn btn-icon btn-danger btn-sm",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.Remove_Payment(payment.id)}}},[_c('i',{staticClass:"i-Close"})]):_vm._e()])])])})],2)])])])],1)],1),_vm._v(" "),_c('validation-observer',{ref:"Add_payment"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"Add_Payment","title":_vm.EditPaiementMode?_vm.$t('EditPayment'):_vm.$t('AddPayment')}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Payment.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"date","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('date')}},[_c('b-form-input',{attrs:{"label":"date","state":_vm.getValidationState(validationContext),"aria-describedby":"date-feedback","type":"date"},model:{value:(_vm.payment.date),callback:function ($$v) {_vm.$set(_vm.payment, "date", $$v)},expression:"payment.date"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"date-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Reference')}},[_c('b-form-input',{attrs:{"disabled":"disabled","label":"Reference","placeholder":_vm.$t('Reference')},model:{value:(_vm.payment.Ref),callback:function ($$v) {_vm.$set(_vm.payment, "Ref", $$v)},expression:"payment.Ref"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Received Amount","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Received_Amount')}},[_c('b-form-input',{attrs:{"label":"Received_Amount","placeholder":_vm.$t('Received_Amount'),"state":_vm.getValidationState(validationContext),"aria-describedby":"Received_Amount-feedback"},on:{"keyup":function($event){return _vm.Verified_Received_Amount(_vm.payment.received_amount)}},model:{value:(_vm.payment.received_amount),callback:function ($$v) {_vm.$set(_vm.payment, "received_amount", _vm._n($$v))},expression:"payment.received_amount"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Received_Amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Amount","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Paying_Amount')}},[_c('b-form-input',{attrs:{"label":"Amount","placeholder":_vm.$t('Paying_Amount'),"state":_vm.getValidationState(validationContext),"aria-describedby":"Amount-feedback"},on:{"keyup":function($event){return _vm.Verified_paidAmount(_vm.payment.montant)}},model:{value:(_vm.payment.montant),callback:function ($$v) {_vm.$set(_vm.payment, "montant", _vm._n($$v))},expression:"payment.montant"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('label',[_vm._v(_vm._s(_vm.$t('Change'))+" :")]),_vm._v(" "),_c('p',{staticClass:"change_amount"},[_vm._v(_vm._s(parseFloat(_vm.payment.received_amount - _vm.payment.montant).toFixed(2)))])]),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Payment choice","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                    var valid = ref.valid;
                    var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('Paymentchoice')}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"disabled":_vm.EditPaiementMode && _vm.payment.Reglement == 'credit card',"reduce":function (label) { return label.value; },"placeholder":_vm.$t('PleaseSelect'),"options":[
                        {label: 'Cash', value: 'Cash'},
                        {label: 'credit card', value: 'credit card'},
                        {label: 'cheque', value: 'cheque'},
                        {label: 'Western Union', value: 'Western Union'},
                        {label: 'bank transfer', value: 'bank transfer'},
                        {label: 'other', value: 'other'} ]},on:{"input":_vm.Selected_PaymentMethod},model:{value:(_vm.payment.Reglement),callback:function ($$v) {_vm.$set(_vm.payment, "Reglement", $$v)},expression:"payment.Reglement"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}])})],1),_vm._v(" "),(_vm.payment.Reglement == 'credit card')?_c('b-col',{attrs:{"md":"12"}},[_c('form',{attrs:{"id":"payment-form"}},[_c('label',{staticClass:"leading-7 text-sm text-gray-600",attrs:{"for":"card-element"}},[_vm._v(_vm._s(_vm.$t('Credit_Card_Info')))]),_vm._v(" "),_c('div',{attrs:{"id":"card-element"}}),_vm._v(" "),_c('div',{staticClass:"is-invalid",attrs:{"id":"card-errors","role":"alert"}})])]):_vm._e(),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Note')}},[_c('b-form-textarea',{attrs:{"id":"textarea","rows":"3","max-rows":"6"},model:{value:(_vm.payment.notes),callback:function ($$v) {_vm.$set(_vm.payment, "notes", $$v)},expression:"payment.notes"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"md":"12"}},[_c('b-button',{attrs:{"variant":"primary","type":"submit","disabled":_vm.paymentProcessing}},[_vm._v(_vm._s(_vm.$t('submit')))]),_vm._v(" "),(_vm.paymentProcessing)?_vm._m(0):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('b-modal',{attrs:{"hide-footer":"","size":"sm","scrollable":"","id":"Show_invoice","title":_vm.$t('Invoice_POS')}},[_c('div',{attrs:{"id":"invoice-POS"}},[_c('div',{staticStyle:{"max-width":"400px","margin":"0px auto"}},[_c('div',{staticClass:"info"},[_c('h2',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyName))]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(_vm.$t('date'))+" : "+_vm._s(_vm.invoice_pos.sale.date)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_address),expression:"pos_settings.show_address"}]},[_vm._v(_vm._s(_vm.$t('Adress'))+" : "+_vm._s(_vm.invoice_pos.setting.CompanyAdress)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_email),expression:"pos_settings.show_email"}]},[_vm._v(_vm._s(_vm.$t('Email'))+" : "+_vm._s(_vm.invoice_pos.setting.email)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_phone),expression:"pos_settings.show_phone"}]},[_vm._v(_vm._s(_vm.$t('Phone'))+" : "+_vm._s(_vm.invoice_pos.setting.CompanyPhone)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_customer),expression:"pos_settings.show_customer"}]},[_vm._v(_vm._s(_vm.$t('Customer'))+" : "+_vm._s(_vm.invoice_pos.sale.client_name)+" "),_c('br')])])]),_vm._v(" "),_c('table',[_c('tbody',[_vm._l((_vm.invoice_pos.details),function(detail_invoice){return _c('tr',[_c('td',{attrs:{"colspan":"3"}},[_c('span',[_vm._v(_vm._s(detail_invoice.name)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.formatNumber(detail_invoice.quantity,2))+" "+_vm._s(detail_invoice.unit_sale)+" x "+_vm._s(_vm.formatNumber(detail_invoice.total/detail_invoice.quantity,2)))])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right","vertical-align":"bottom"}},[_vm._v(_vm._s(_vm.formatNumber(detail_invoice.total,2)))])])}),_vm._v(" "),_c('tr',{staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('OrderTax')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.taxe ,2))+" ("+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.tax_rate,2))+" %)")])]),_vm._v(" "),_c('tr',{staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Discount')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.discount ,2)))])]),_vm._v(" "),_c('tr',{staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Total')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.GrandTotal ,2)))])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount < _vm.invoice_pos.sale.GrandTotal),expression:"invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal"}]},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Paid')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.paid_amount ,2)))])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount < _vm.invoice_pos.sale.GrandTotal),expression:"invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal"}]},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Due')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(parseFloat(_vm.invoice_pos.sale.GrandTotal - _vm.invoice_pos.sale.paid_amount).toFixed(2)))])])],2)]),_vm._v(" "),_c('table',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount > 0),expression:"invoice_pos.sale.paid_amount > 0"}],staticClass:"change mt-3",staticStyle:{"font-size":"10px"}},[_c('thead',[_c('tr',{staticStyle:{"background":"#eee"}},[_c('th',{staticStyle:{"text-align":"left"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.$t('PayeBy'))+":")]),_vm._v(" "),_c('th',{staticStyle:{"text-align":"center"},attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.$t('Amount'))+":")]),_vm._v(" "),_c('th',{staticStyle:{"text-align":"right"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.$t('Change'))+":")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.payments),function(payment_pos){return _c('tr',[_c('td',{staticStyle:{"text-align":"left"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(payment_pos.Reglement))]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"center"},attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.formatNumber(payment_pos.montant ,2)))]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.formatNumber(payment_pos.change ,2)))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"ml-2",attrs:{"id":"legalcopy"}},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_note),expression:"pos_settings.show_note"}],staticClass:"legal"},[_c('strong',[_vm._v(_vm._s(_vm.pos_settings.note_customer))])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_barcode),expression:"pos_settings.show_barcode"}],attrs:{"id":"bar"}},[_c('barcode',{staticClass:"barcode",attrs:{"format":_vm.barcodeFormat,"value":_vm.invoice_pos.sale.Ref,"textmargin":"0","fontoptions":"bold","fontSize":"15","height":"25","width":"1"}})],1)])])]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary",on:{"click":function($event){return _vm.print_it()}}},[_c('i',{staticClass:"i-Billing"}),_vm._v("\n      "+_vm._s(_vm.$t('print'))+"\n    ")])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/pages/sales/index_sale.vue":
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/index_sale.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_sale.vue?vue&type=template&id=4ba6f458 */ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458");
/* harmony import */ var _index_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_sale.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css */ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/sales/index_sale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=style&index=0&id=4ba6f458&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_style_index_0_id_4ba6f458_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale.vue?vue&type=template&id=4ba6f458 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/index_sale.vue?vue&type=template&id=4ba6f458");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_vue_vue_type_template_id_4ba6f458__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);