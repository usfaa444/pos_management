(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Users"
  },
  data: function data() {
    return {
      editmode: false,
      isLoading: true,
      SubmitProcessing: false,
      email_exist: "",
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      Filter_Name: "",
      Filter_Email: "",
      Filter_status: "",
      Filter_Phone: "",
      permissions: {},
      users: [],
      roles: [],
      data: new FormData(),
      user: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        NewPassword: null,
        email: "",
        phone: "",
        statut: "",
        role_id: "",
        avatar: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("Firstname"),
        field: "firstname",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("lastname"),
        field: "lastname",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("username"),
        field: "username",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        sortable: false,
        tdClass: "text-center",
        thClass: "text-center"
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
    //------------- Submit Validation Create & Edit User
    Submit_User: function Submit_User() {
      var _this = this;
      this.$refs.Create_User.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_User();
          } else {
            _this.Update_User();
          }
        }
      });
    },
    //------ update Params Table
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
        this.Get_Users(currentPage);
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
        this.Get_Users(1);
      }
    },
    //------ Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Users(this.serverParams.page);
    },
    //------ Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Users(this.serverParams.page);
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref3) {
      var dirty = _ref3.dirty,
        validated = _ref3.validated,
        _ref3$valid = _ref3.valid,
        valid = _ref3$valid === void 0 ? null : _ref3$valid;
      return dirty || validated ? valid : null;
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Name = "";
      this.Filter_status = "";
      this.Filter_Phone = "";
      this.Filter_Email = "";
      this.Get_Users(this.serverParams.page);
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Checked Status User
    isChecked: function isChecked(user) {
      var _this2 = this;
      axios.put("users/Activated/" + user.id, {
        statut: user.statut,
        id: user.id
      }).then(function (response) {
        if (response.data.success) {
          if (user.statut) {
            user.statut = 1;
            _this2.makeToast("success", _this2.$t("ActivateUser"), _this2.$t("Success"));
          } else {
            user.statut = 0;
            _this2.makeToast("success", _this2.$t("DisActivateUser"), _this2.$t("Success"));
          }
        } else {
          user.statut = 1;
          _this2.makeToast("warning", _this2.$t("Delete.Therewassomethingwronge"), _this2.$t("Warning"));
        }
      })["catch"](function (error) {
        user.statut = 1;
        _this2.makeToast("warning", _this2.$t("Delete.Therewassomethingwronge"), _this2.$t("Warning"));
      });
    },
    //--------------------------- Users PDF ---------------------------\\
    Users_PDF: function Users_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "First Name",
        dataKey: "firstname"
      }, {
        title: "Last Name",
        dataKey: "lastname"
      }, {
        title: "Username",
        dataKey: "username"
      }, {
        title: "Email",
        dataKey: "email"
      }, {
        title: "Phone",
        dataKey: "phone"
      }];
      pdf.autoTable(columns, self.users);
      pdf.text("User List", 40, 25);
      pdf.save("User_List.pdf");
    },
    //------------------------ Users Excel ---------------------------\\
    Users_Excel: function Users_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("users/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Users.xlsx");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    // Simply replaces null values with strings=''
    setToStrings: function setToStrings() {
      if (this.Filter_status === null) {
        this.Filter_status = "";
      }
    },
    //----------------------------------- Get All Users  ---------------------------\\
    Get_Users: function Get_Users(page) {
      var _this3 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.setToStrings();
      axios.get("users?page=" + page + "&name=" + this.Filter_Name + "&statut=" + this.Filter_status + "&phone=" + this.Filter_Phone + "&email=" + this.Filter_Email + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this3.users = response.data.users;
        _this3.roles = response.data.roles;
        _this3.totalRows = response.data.totalRows;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this3.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //------------------------------ Show Modal (Create User) -------------------------------\\
    New_User: function New_User() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_User");
    },
    //------------------------------ Show Modal (Update User) -------------------------------\\
    Edit_User: function Edit_User(user) {
      this.Get_Users(this.serverParams.page);
      this.reset_Form();
      this.user = user;
      this.user.NewPassword = null;
      this.editmode = true;
      this.$bvModal.show("New_User");
    },
    //------------------------------ Event Upload Avatar -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this4$$refs$A, valid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this4.$refs.Avatar.validate(e);
            case 1:
              _yield$_this4$$refs$A = _context.v;
              valid = _yield$_this4$$refs$A.valid;
              if (valid) {
                _this4.user.avatar = e.target.files[0];
              } else {
                _this4.user.avatar = "";
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    //------------------------ Create User ---------------------------\\
    Create_User: function Create_User() {
      var _this5 = this;
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("password", self.user.password);
      self.data.append("phone", self.user.phone);
      self.data.append("role", self.user.role_id);
      self.data.append("avatar", self.user.avatar);
      axios.post("users", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_User");
        _this5.makeToast("success", _this5.$t("Create.TitleUser"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;
        if (error.errors.email.length > 0) {
          self.email_exist = error.errors.email[0];
        }
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //----------------------- Update User ---------------------------\\
    Update_User: function Update_User() {
      var _this6 = this;
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("NewPassword", self.user.NewPassword);
      self.data.append("phone", self.user.phone);
      self.data.append("role", self.user.role_id);
      self.data.append("statut", self.user.statut);
      self.data.append("avatar", self.user.avatar);
      self.data.append("_method", "put");
      axios.post("users/" + this.user.id, self.data).then(function (response) {
        _this6.makeToast("success", _this6.$t("Update.TitleUser"), _this6.$t("Success"));
        Fire.$emit("Event_User");
        self.SubmitProcessing = false;
      })["catch"](function (error) {
        if (error.errors.email.length > 0) {
          self.email_exist = error.errors.email[0];
        }
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
        self.SubmitProcessing = false;
      });
    },
    //----------------------------- Reset Form ---------------------------\\
    reset_Form: function reset_Form() {
      this.user = {
        id: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        NewPassword: null,
        email: "",
        phone: "",
        statut: "",
        role_id: "",
        avatar: ""
      };
      this.email_exist = "";
    },
    //--------------------------------- Remove User ---------------------------\\
    Remove_User: function Remove_User(id) {
      var _this7 = this;
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
          axios["delete"]("users/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.UserDeleted"), "success");
            Fire.$emit("Delete_User");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), "this User already linked with other operation", "warning");
          });
        }
      });
    }
  },
  // END METHODS

  //----------------------------- Created function-------------------
  created: function created() {
    var _this8 = this;
    this.Get_Users(1);
    Fire.$on("Event_User", function () {
      setTimeout(function () {
        _this8.Get_Users(_this8.serverParams.page);
        _this8.$bvModal.hide("New_User");
      }, 500);
    });
    Fire.$on("Delete_User", function () {
      setTimeout(function () {
        _this8.Get_Users(_this8.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5 ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('UserManagement'),"folder":_vm.$t('Users')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_c('div',[_c('vue-good-table',{attrs:{"mode":"remote","columns":_vm.columns,"totalRows":_vm.totalRows,"rows":_vm.users,"search-options":{
      enabled: true,
      placeholder: _vm.$t('Search_this_table'),  
    },"pagination-options":{
      enabled: true,
      mode: 'records',
      nextLabel: 'next',
      prevLabel: 'prev',
    },"styleClass":"table-hover tableOne vgt-table"},on:{"on-page-change":_vm.onPageChange,"on-per-page-change":_vm.onPerPageChange,"on-sort-change":_vm.onSortChange,"on-search":_vm.onSearch},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'actions')?_c('span',[(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('users_edit'))?_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],attrs:{"title":"Edit"},on:{"click":function($event){return _vm.Edit_User(props.row)}}},[_c('i',{staticClass:"i-Edit text-25 text-success"})]):_vm._e()]):(props.column.field == 'statut')?_c('div',[_c('label',{staticClass:"switch switch-primary mr-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(props.row.statut),expression:"props.row.statut"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(props.row.statut)?_vm._i(props.row.statut,null)>-1:(props.row.statut)},on:{"change":[function($event){var $$a=props.row.statut,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(props.row, "statut", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(props.row, "statut", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(props.row, "statut", $$c)}},function($event){return _vm.isChecked(props.row)}]}}),_vm._v(" "),_c('span',{staticClass:"slider"})])]):_vm._e()]}}])},[_c('div',{staticClass:"mt-2 mb-3",attrs:{"slot":"table-actions"},slot:"table-actions"},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":true}}],attrs:{"variant":"outline-info m-1","size":"sm"}},[_c('i',{staticClass:"i-Filter-2"}),_vm._v("\n          "+_vm._s(_vm.$t("Filter"))+"\n        ")]),_vm._v(" "),_c('b-button',{attrs:{"size":"sm","variant":"outline-success m-1"},on:{"click":function($event){return _vm.Users_PDF()}}},[_c('i',{staticClass:"i-File-Copy"}),_vm._v(" PDF\n        ")]),_vm._v(" "),_c('b-button',{attrs:{"size":"sm","variant":"outline-danger m-1"},on:{"click":function($event){return _vm.Users_Excel()}}},[_c('i',{staticClass:"i-File-Excel"}),_vm._v(" EXCEL\n        ")]),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('users_add'))?_c('b-button',{attrs:{"size":"sm","variant":"btn btn-primary btn-icon m-1"},on:{"click":function($event){return _vm.New_User()}}},[_c('i',{staticClass:"i-Add"}),_vm._v("\n          "+_vm._s(_vm.$t('Add'))+"\n        ")]):_vm._e()],1)])],1),_vm._v(" "),_c('b-sidebar',{attrs:{"id":"sidebar-right","title":_vm.$t('Filter'),"bg-variant":"white","right":"","shadow":""}},[_c('div',{staticClass:"px-3 py-2"},[_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('username')}},[_c('b-form-input',{attrs:{"label":"Code","placeholder":_vm.$t('username')},model:{value:(_vm.Filter_Name),callback:function ($$v) {_vm.Filter_Name=$$v},expression:"Filter_Name"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Phone')}},[_c('b-form-input',{attrs:{"label":"Phone","placeholder":_vm.$t('SearchByPhone')},model:{value:(_vm.Filter_Phone),callback:function ($$v) {_vm.Filter_Phone=$$v},expression:"Filter_Phone"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Email')}},[_c('b-form-input',{attrs:{"label":"Email","placeholder":_vm.$t('SearchByEmail')},model:{value:(_vm.Filter_Email),callback:function ($$v) {_vm.Filter_Email=$$v},expression:"Filter_Email"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Status')}},[_c('v-select',{attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Status'),"options":[
                         {label: 'Actif', value: '1'},
                         {label: 'Inactif', value: '0'}
                      ]},model:{value:(_vm.Filter_status),callback:function ($$v) {_vm.Filter_status=$$v},expression:"Filter_status"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-button',{attrs:{"variant":"primary m-1","size":"sm","block":""},on:{"click":function($event){return _vm.Get_Users(_vm.serverParams.page)}}},[_c('i',{staticClass:"i-Filter-2"}),_vm._v("\n            "+_vm._s(_vm.$t("Filter"))+"\n          ")])],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-button',{attrs:{"variant":"danger m-1","size":"sm","block":""},on:{"click":function($event){return _vm.Reset_Filter()}}},[_c('i',{staticClass:"i-Power-2"}),_vm._v("\n            "+_vm._s(_vm.$t("Reset"))+"\n          ")])],1)],1)],1)]),_vm._v(" "),_c('validation-observer',{ref:"Create_User"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"New_User","title":_vm.editmode?_vm.$t('Edit'):_vm.$t('Add')}},[_c('b-form',{attrs:{"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.Submit_User.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Firstname","rules":{ required: true , min:3 , max:30}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Firstname')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Firstname-feedback","label":"Firstname"},model:{value:(_vm.user.firstname),callback:function ($$v) {_vm.$set(_vm.user, "firstname", $$v)},expression:"user.firstname"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Firstname-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"lastname","rules":{ required: true , min:3 , max:30}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('lastname')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"lastname-feedback","label":"lastname"},model:{value:(_vm.user.lastname),callback:function ($$v) {_vm.$set(_vm.user, "lastname", $$v)},expression:"user.lastname"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"lastname-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"username","rules":{ required: true , min:3 , max:30}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('username')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"username-feedback","label":"username"},model:{value:(_vm.user.username),callback:function ($$v) {_vm.$set(_vm.user, "username", $$v)},expression:"user.username"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"username-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Phone","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Phone')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Phone-feedback","label":"Phone"},model:{value:(_vm.user.phone),callback:function ($$v) {_vm.$set(_vm.user, "phone", $$v)},expression:"user.phone"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Phone-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Email","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Email')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Email-feedback","label":"Email"},model:{value:(_vm.user.email),callback:function ($$v) {_vm.$set(_vm.user, "email", $$v)},expression:"user.email"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))]),_vm._v(" "),(_vm.email_exist !='')?_c('b-alert',{staticClass:"error mt-1",attrs:{"show":"","variant":"danger"}},[_vm._v(_vm._s(_vm.email_exist))]):_vm._e()],1)]}}])})],1),_vm._v(" "),(!_vm.editmode)?_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"password","rules":{ required: true , min:6 , max:14}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('password')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"password-feedback","label":"password","type":"password"},model:{value:(_vm.user.password),callback:function ($$v) {_vm.$set(_vm.user, "password", $$v)},expression:"user.password"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"password-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,2321465681)})],1):_vm._e(),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"role","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                      var valid = ref.valid;
                      var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('RoleName')}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('PleaseSelect'),"options":_vm.roles.map(function (roles) { return ({label: roles.name, value: roles.id}); })},model:{value:(_vm.user.role_id),callback:function ($$v) {_vm.$set(_vm.user, "role_id", $$v)},expression:"user.role_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}])})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{ref:"Avatar",attrs:{"name":"Avatar","rules":"mimes:image/*|size:200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                      var validate = ref.validate;
                      var valid = ref.valid;
                      var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('UserImage')}},[_c('input',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"label":"Choose Avatar","type":"file"},on:{"change":_vm.onFileSelected}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Avatar-feedback"}},[_vm._v(_vm._s(errors[0]))])],1)}}])})],1),_vm._v(" "),(_vm.editmode)?_c('b-col',{attrs:{"md":"6"}},[_c('validation-provider',{attrs:{"name":"New password","rules":{min:6 , max:14}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Newpassword')}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Nawpassword-feedback","placeholder":_vm.$t('LeaveBlank'),"label":"New password"},model:{value:(_vm.user.NewPassword),callback:function ($$v) {_vm.$set(_vm.user, "NewPassword", $$v)},expression:"user.NewPassword"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Nawpassword-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1010016937)})],1):_vm._e(),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"md":"12"}},[_c('b-button',{attrs:{"variant":"primary","type":"submit","disabled":_vm.SubmitProcessing}},[_vm._v(_vm._s(_vm.$t('submit')))]),_vm._v(" "),(_vm.SubmitProcessing)?_vm._m(0):_vm._e()],1)],1)],1)],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/pages/people/users.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/app/pages/people/users.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=7e1871e5 */ "./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5");
/* harmony import */ var _users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__["render"],
  _users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/people/users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/users.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=template&id=7e1871e5 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/users.vue?vue&type=template&id=7e1871e5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_7e1871e5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);