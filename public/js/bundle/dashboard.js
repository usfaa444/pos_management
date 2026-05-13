(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-echarts/components/ECharts.vue */ "./node_modules/vue-echarts/components/ECharts.vue");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/lib/chart/line */ "./node_modules/echarts/lib/chart/line.js");
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/echarts/lib/component/tooltip.js");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/component/legend */ "./node_modules/echarts/lib/component/legend.js");
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6__);
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




// import ECharts modules manually to reduce bundle size





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "v-chart": vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard"
  },
  data: function data() {
    return {
      sales: [],
      stock_alerts: [],
      report_today: {
        revenue: 0,
        today_purchases: 0,
        return_sales: 0,
        profit: 0
      },
      products: [],
      CurrentMonth: "",
      loading: true,
      echartSales: {},
      echartProduct: {},
      echartCustomer: {},
      echartPayment: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])), {}, {
    columns_sales: function columns_sales() {
      return [{
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Due"),
        field: "due",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
        sortable: false,
        tdClass: "text-left gull-border-none",
        thClass: "text-left"
      }];
    },
    columns_stock: function columns_stock() {
      return [{
        label: this.$t("ProductCode"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("ProductName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Quantity"),
        field: "quantity",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("AlertQuantity"),
        field: "stock_alert",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    columns_products: function columns_products() {
      return [{
        label: this.$t("ProductName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Quantity"),
        field: "quantity",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "total",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  }),
  methods: {
    //---------------------------------- Report Dashboard With Echart
    report_with_echart: function report_with_echart() {
      var _this = this;
      axios.get("chart/report_with_echart").then(function (response) {
        var responseData = response.data;
        _this.report_today = response.data.report_dashboard.original.report;
        _this.stock_alerts = response.data.report_dashboard.original.stock_alert;
        _this.products = response.data.report_dashboard.original.products;
        _this.sales = response.data.report_dashboard.original.last_sales;
        var dark_heading = "#c2c6dc";
        _this.echartCustomer = {
          color: ["#6D28D9", "#8B5CF6", "#A78BFA", "#C4B5FD", "#7C3AED"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          formatter: function formatter(params) {
            return "".concat(params.name, ": (").concat(params.data.value, " sales) (").concat(params.percent, "%)");
          },
          series: [{
            name: "Top Customers",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.customers.original,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
        _this.echartPayment = {
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["Payment sent", "Payment received"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: responseData.payments.original.days
          },
          yAxis: {
            type: "value"
          },
          series: [{
            name: "Payment sent",
            type: "line",
            data: responseData.payments.original.payment_sent
          }, {
            name: "Payment received",
            type: "line",
            data: responseData.payments.original.payment_received
          }]
        };
        _this.echartProduct = {
          color: ["#6D28D9", "#8B5CF6", "#A78BFA", "#C4B5FD", "#7C3AED"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          formatter: function formatter(params) {
            return "".concat(params.name, ": (").concat(params.percent, "%)");
          },
          series: [{
            name: "Top Selling Products",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.product_report.original,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
        _this.echartSales = {
          legend: {
            borderRadius: 0,
            orient: "horizontal",
            x: "right",
            data: ["Sales", "Purchases"]
          },
          grid: {
            left: "8px",
            right: "8px",
            bottom: "0",
            containLabel: true
          },
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          xAxis: [{
            type: "category",
            data: responseData.sales.original.days,
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: dark_heading,
              interval: 0,
              rotate: 30
            },
            axisLine: {
              show: true,
              color: dark_heading,
              lineStyle: {
                color: dark_heading
              }
            }
          }],
          yAxis: [{
            type: "value",
            axisLabel: {
              color: dark_heading
              // formatter: "${value}"
            },
            axisLine: {
              show: false,
              color: dark_heading,
              lineStyle: {
                color: dark_heading
              }
            },
            min: 0,
            splitLine: {
              show: true,
              interval: "auto"
            }
          }],
          series: [{
            name: "Sales",
            data: responseData.sales.original.data,
            label: {
              show: false,
              color: "#8B5CF6"
            },
            type: "bar",
            color: "#A78BFA",
            smooth: true,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: -2,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }, {
            name: "Purchases",
            data: responseData.purchases.original.data,
            label: {
              show: false,
              color: "#0168c1"
            },
            type: "bar",
            barGap: 0,
            color: "#DDD6FE",
            smooth: true,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: -2,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }]
        };
        _this.loading = false;
      })["catch"](function (response) {});
    },
    //------------------------------Get Month -------------------------\\
    GetMonth: function GetMonth() {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var now = new Date();
      this.CurrentMonth = months[now.getMonth()];
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this2.report_with_echart();
          case 1:
            _this2.GetMonth();
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('b-row',[_c('b-col',{attrs:{"lg":"3","md":"6","sm":"12"}},[_c('b-card',{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[_c('i',{staticClass:"i-Dollar"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"text-muted mt-2 mb-0"},[_vm._v(_vm._s(_vm.$t('Revenue')))]),_vm._v(" "),_c('p',{staticClass:"text-primary text-24 line-height-1 mb-2"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber((_vm.report_today.revenue?_vm.report_today.revenue:0),2)))])])])],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"3","md":"6","sm":"12"}},[_c('b-card',{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[_c('i',{staticClass:"i-Add-Cart"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"text-muted mt-2 mb-0"},[_vm._v(_vm._s(_vm.$t('Purchases')))]),_vm._v(" "),_c('p',{staticClass:"text-primary text-24 line-height-1 mb-2"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber((_vm.report_today.today_purchases?_vm.report_today.today_purchases:0),2)))])])])],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"3","md":"6","sm":"12"}},[_c('b-card',{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[_c('i',{staticClass:"i-Right-4"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"text-muted mt-2 mb-0"},[_vm._v(_vm._s(_vm.$t('SalesReturn')))]),_vm._v(" "),_c('p',{staticClass:"text-primary text-24 line-height-1 mb-2"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber((_vm.report_today.return_sales?_vm.report_today.return_sales:0),2)))])])])],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"3","md":"6","sm":"12"}},[_c('b-card',{staticClass:"card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"},[_c('i',{staticClass:"i-Money-Bag"}),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{staticClass:"text-muted mt-2 mb-0"},[_vm._v(_vm._s(_vm.$t('Profit')))]),_vm._v(" "),_c('p',{staticClass:"text-primary text-24 line-height-1 mb-2"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber((_vm.report_today.profit?_vm.report_today.profit:0),2)))])])])],1)],1),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"lg":"8","md":"12","sm":"12"}},[_c('b-card',{staticClass:"mb-30"},[_c('h4',{staticClass:"card-title m-0"},[_vm._v(_vm._s(_vm.$t('This_Week_Sales_Purchases')))]),_vm._v(" "),_c('div',{staticClass:"chart-wrapper"},[(_vm.loading)?_vm._m(0):_vm._e(),_vm._v(" "),(!_vm.loading)?_c('v-chart',{attrs:{"options":_vm.echartSales,"autoresize":true}}):_vm._e()],1)])],1),_vm._v(" "),_c('b-col',{attrs:{"col":"","lg":"4","md":"12","sm":"12"}},[_c('b-card',{staticClass:"mb-30"},[_c('h4',{staticClass:"card-title m-0"},[_vm._v(_vm._s(_vm.$t('Top_Selling_Products'))+" ("+_vm._s(new Date().getFullYear())+")")]),_vm._v(" "),_c('div',{staticClass:"chart-wrapper"},[(_vm.loading)?_vm._m(1):_vm._e(),_vm._v(" "),(!_vm.loading)?_c('v-chart',{attrs:{"options":_vm.echartProduct,"autoresize":true}}):_vm._e()],1)])],1)],1),_vm._v(" "),_c('b-row',[_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"card mb-30"},[_c('div',{staticClass:"card-body p-2"},[_c('h5',{staticClass:"card-title border-bottom p-3 mb-2"},[_vm._v(_vm._s(_vm.$t('StockAlert')))]),_vm._v(" "),_c('vue-good-table',{attrs:{"columns":_vm.columns_stock,"styleClass":"order-table vgt-table mb-3","row-style-class":"text-left","rows":_vm.stock_alerts},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'stock_alert')?_c('div',[_c('span',{staticClass:"badge badge-outline-danger"},[_vm._v(_vm._s(props.row.stock_alert))])]):_vm._e()]}}])})],1)])]),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"card mb-30"},[_c('div',{staticClass:"card-body p-3"},[_c('h5',{staticClass:"card-title border-bottom p-3 mb-2"},[_vm._v(_vm._s(_vm.$t('Top_Selling_Products'))+" ("+_vm._s(_vm.CurrentMonth)+")")]),_vm._v(" "),_c('vue-good-table',{attrs:{"columns":_vm.columns_products,"styleClass":"order-table vgt-table","row-style-class":"text-left","rows":_vm.products},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'quantity')?_c('div',[_c('span',[_vm._v(_vm._s(_vm.formatNumber(props.row.quantity ,2))+" "+_vm._s(props.row.unit_product))])]):(props.column.field == 'total')?_c('div',[_c('span',[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(props.row.total ,2)))])]):_vm._e()]}}])})],1)])])]),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"lg":"8","md":"12","sm":"12"}},[_c('b-card',{staticClass:"mb-30"},[_c('h4',{staticClass:"card-title m-0"},[_vm._v(_vm._s(_vm.$t('Payment_Sent_Received')))]),_vm._v(" "),_c('div',{staticClass:"chart-wrapper"},[_c('v-chart',{attrs:{"options":_vm.echartPayment,"autoresize":true}})],1)])],1),_vm._v(" "),_c('b-col',{attrs:{"col":"","lg":"4","md":"12","sm":"12"}},[_c('b-card',{staticClass:"mb-30"},[_c('h4',{staticClass:"card-title m-0"},[_vm._v(_vm._s(_vm.$t('TopCustomers'))+" ("+_vm._s(_vm.CurrentMonth)+")")]),_vm._v(" "),_c('div',{staticClass:"chart-wrapper"},[_c('v-chart',{attrs:{"options":_vm.echartCustomer,"autoresize":true}})],1)])],1)],1),_vm._v(" "),_c('b-row',[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"card mb-30"},[_c('div',{staticClass:"card-body p-0"},[_c('h5',{staticClass:"card-title border-bottom p-3 mb-2"},[_vm._v(_vm._s(_vm.$t('Recent_Sales')))]),_vm._v(" "),(!_vm.loading)?_c('vue-good-table',{attrs:{"columns":_vm.columns_sales,"styleClass":"order-table vgt-table","row-style-class":"text-left","rows":_vm.sales},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'statut')?_c('div',[(props.row.statut == 'completed')?_c('span',{staticClass:"badge badge-outline-success"},[_vm._v(_vm._s(_vm.$t('complete')))]):(props.row.statut == 'pending')?_c('span',{staticClass:"badge badge-outline-info"},[_vm._v(_vm._s(_vm.$t('Pending')))]):_c('span',{staticClass:"badge badge-outline-warning"},[_vm._v(_vm._s(_vm.$t('Ordered')))])]):(props.column.field == 'payment_status')?_c('div',[(props.row.payment_status == 'paid')?_c('span',{staticClass:"badge badge-outline-success"},[_vm._v(_vm._s(_vm.$t('Paid')))]):(props.row.payment_status == 'partial')?_c('span',{staticClass:"badge badge-outline-primary"},[_vm._v(_vm._s(_vm.$t('partial')))]):_c('span',{staticClass:"badge badge-outline-warning"},[_vm._v(_vm._s(_vm.$t('Unpaid')))])]):_vm._e()]}}],null,false,2617766521)}):_vm._e()],1)])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p text-right"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p text-right"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=5fd1f857 */ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js */ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboard/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857":
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857 ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=5fd1f857 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);