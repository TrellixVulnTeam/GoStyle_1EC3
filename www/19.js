(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "kyFE":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js ***!
  \***************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "bC4P");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "y08P");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
/* harmony import */ var _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-0d58a5bf.js */ "r7QR");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");














var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
var iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
var mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
var iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
var mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
var focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';

var Menu = /*#__PURE__*/function () {
  function Menu(hostRef) {
    var _this = this;

    Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Menu);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.ionWillOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionWillOpen", 7);
    this.ionWillClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionWillClose", 7);
    this.ionDidOpen = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionDidOpen", 7);
    this.ionDidClose = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionDidClose", 7);
    this.ionMenuChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_8__["G"].createBlocker({
      disableScroll: true
    });
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};

    this.handleFocus = function (ev) {
      return _this.trapKeyboardFocus(ev, document);
    };

    this.isPaneVisible = false;
    this.isEndSide = false;
    /**
     * If `true`, the menu is disabled.
     */

    this.disabled = false;
    /**
     * Which side of the view the menu should be placed.
     */

    this.side = 'start';
    /**
     * If `true`, swiping the menu is enabled.
     */

    this.swipeGesture = true;
    /**
     * The edge threshold for dragging the menu open.
     * If a drag/swipe happens over this value, the menu is not triggered.
     */

    this.maxEdgeStart = 50;
  }

  Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, [{
    key: "typeChanged",
    value: function typeChanged(type, oldType) {
      var contentEl = this.contentEl;

      if (contentEl) {
        if (oldType !== undefined) {
          contentEl.classList.remove("menu-content-".concat(oldType));
        }

        contentEl.classList.add("menu-content-".concat(type));
        contentEl.removeAttribute('style');
      }

      if (this.menuInnerEl) {
        // Remove effects of previous animations
        this.menuInnerEl.removeAttribute('style');
      }

      this.animation = undefined;
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      this.updateState();
      this.ionMenuChange.emit({
        disabled: this.disabled,
        open: this._isOpen
      });
    }
  }, {
    key: "sideChanged",
    value: function sideChanged() {
      this.isEndSide = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this.side);
    }
  }, {
    key: "swipeGestureChanged",
    value: function swipeGestureChanged() {
      this.updateState();
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        var el, parent, content;
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.type === undefined) {
                  this.type = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["c"].get('menuType', 'overlay');
                }

                el = this.el;
                parent = el.parentNode;

                if (this.contentId === undefined) {
                  console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"main-content\"></ion-menu>\n  <div id=\"main-content\">...</div>\n");
                }

                content = this.contentId !== undefined ? document.getElementById(this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                if (!(!content || !content.tagName)) {
                  _context.next = 8;
                  break;
                }

                // requires content element
                console.error('Menu: must have a "content" element to listen for drag events on.');
                return _context.abrupt("return");

              case 8:
                this.contentEl = content; // add menu's content classes

                content.classList.add('menu-content');
                this.typeChanged(this.type, undefined);
                this.sideChanged(); // register this menu with the app's menu controller

                _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._register(this);

                _context.next = 15;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */ "KF81"));

              case 15:
                this.gesture = _context.sent.createGesture({
                  el: document,
                  gestureName: 'menu-swipe',
                  gesturePriority: 30,
                  threshold: 10,
                  blurOnStart: true,
                  canStart: function canStart(ev) {
                    return _this2.canStart(ev);
                  },
                  onWillStart: function onWillStart() {
                    return _this2.onWillStart();
                  },
                  onStart: function onStart() {
                    return _this2.onStart();
                  },
                  onMove: function onMove(ev) {
                    return _this2.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this2.onEnd(ev);
                  }
                });
                this.updateState();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.inheritedAttributes = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["i"])(this.el, ['aria-label']);
    }
  }, {
    key: "componentDidLoad",
    value: function () {
      var _componentDidLoad = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.ionMenuChange.emit({
                  disabled: this.disabled,
                  open: this._isOpen
                });
                this.updateState();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidLoad() {
        return _componentDidLoad.apply(this, arguments);
      }

      return componentDidLoad;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.blocker.destroy();

      _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._unregister(this);

      if (this.animation) {
        this.animation.destroy();
      }

      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }

      this.animation = undefined;
      this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    }
  }, {
    key: "onSplitPaneChanged",
    value: function onSplitPaneChanged(ev) {
      this.isPaneVisible = ev.detail.isPane(this.el);
      this.updateState();
    }
  }, {
    key: "onBackdropClick",
    value: function onBackdropClick(ev) {
      if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
        var shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

        if (shouldClose) {
          ev.preventDefault();
          ev.stopPropagation();
          this.close();
        }
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(ev) {
      if (ev.key === 'Escape') {
        this.close();
      }
    }
    /**
     * Returns `true` is the menu is open.
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return Promise.resolve(this._isOpen);
    }
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return Promise.resolve(this._isActive());
    }
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */

  }, {
    key: "open",
    value: function open() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.setOpen(true, animated);
    }
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */

  }, {
    key: "close",
    value: function close() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.setOpen(false, animated);
    }
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.setOpen(!this._isOpen, animated);
    }
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */

  }, {
    key: "setOpen",
    value: function setOpen(shouldOpen) {
      var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._setOpen(this, shouldOpen, animated);
    }
  }, {
    key: "focusFirstDescendant",
    value: function focusFirstDescendant() {
      var el = this.el;
      var firstInput = el.querySelector(focusableQueryString);

      if (firstInput) {
        firstInput.focus();
      } else {
        el.focus();
      }
    }
  }, {
    key: "focusLastDescendant",
    value: function focusLastDescendant() {
      var el = this.el;
      var inputs = Array.from(el.querySelectorAll(focusableQueryString));
      var lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;

      if (lastInput) {
        lastInput.focus();
      } else {
        el.focus();
      }
    }
  }, {
    key: "trapKeyboardFocus",
    value: function trapKeyboardFocus(ev, doc) {
      var target = ev.target;

      if (!target) {
        return;
      }
      /**
       * If the target is inside the menu contents, let the browser
       * focus as normal and keep a log of the last focused element.
       */


      if (this.el.contains(target)) {
        this.lastFocus = target;
      } else {
        /**
         * Otherwise, we are about to have focus go out of the menu.
         * Wrap the focus to either the first or last element.
         */

        /**
         * Once we call `focusFirstDescendant`, another focus event
         * will fire, which will cause `lastFocus` to be updated
         * before we can run the code after that. We cache the value
         * here to avoid that.
         */
        this.focusFirstDescendant();
        /**
         * If the cached last focused element is the same as the now-
         * active element, that means the user was on the first element
         * already and pressed Shift + Tab, so we need to wrap to the
         * last descendant.
         */

        if (this.lastFocus === doc.activeElement) {
          this.focusLastDescendant();
        }
      }
    }
  }, {
    key: "_setOpen",
    value: function () {
      var _setOpen2 = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(shouldOpen) {
        var animated,
            _args3 = arguments;
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                animated = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;

                if (!(!this._isActive() || this.isAnimating || shouldOpen === this._isOpen)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", false);

              case 3:
                this.beforeAnimation(shouldOpen);
                _context3.next = 6;
                return this.loadAnimation();

              case 6:
                _context3.next = 8;
                return this.startAnimation(shouldOpen, animated);

              case 8:
                this.afterAnimation(shouldOpen);
                return _context3.abrupt("return", true);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _setOpen(_x) {
        return _setOpen2.apply(this, arguments);
      }

      return _setOpen;
    }()
  }, {
    key: "loadAnimation",
    value: function () {
      var _loadAnimation = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var width;
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Menu swipe animation takes the menu's inner width as parameter,
                // If `offsetWidth` changes, we need to create a new animation.
                width = this.menuInnerEl.offsetWidth;

                if (!(width === this.width && this.animation !== undefined)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                this.width = width; // Destroy existing animation

                if (this.animation) {
                  this.animation.destroy();
                  this.animation = undefined;
                } // Create new animation


                _context4.next = 7;
                return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._createAnimation(this.type, this);

              case 7:
                this.animation = _context4.sent;

                if (!_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["c"].getBoolean('animated', true)) {
                  this.animation.duration(0);
                }

                this.animation.fill('both');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadAnimation() {
        return _loadAnimation.apply(this, arguments);
      }

      return loadAnimation;
    }()
  }, {
    key: "startAnimation",
    value: function () {
      var _startAnimation = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(shouldOpen, animated) {
        var isReversed, mode, easing, easingReverse, ani;
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isReversed = !shouldOpen;
                mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
                easing = mode === 'ios' ? iosEasing : mdEasing;
                easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
                ani = this.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? easingReverse : easing).onFinish(function () {
                  if (ani.getDirection() === 'reverse') {
                    ani.direction('normal');
                  }
                });

                if (!animated) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 8;
                return ani.play();

              case 8:
                _context5.next = 11;
                break;

              case 10:
                ani.play({
                  sync: true
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function startAnimation(_x2, _x3) {
        return _startAnimation.apply(this, arguments);
      }

      return startAnimation;
    }()
  }, {
    key: "_isActive",
    value: function _isActive() {
      return !this.disabled && !this.isPaneVisible;
    }
  }, {
    key: "canSwipe",
    value: function canSwipe() {
      return this.swipeGesture && !this.isAnimating && this._isActive();
    }
  }, {
    key: "canStart",
    value: function canStart(detail) {
      // Do not allow swipe gesture if a modal is open
      var isModalPresented = !!document.querySelector('ion-modal.show-modal');

      if (isModalPresented || !this.canSwipe()) {
        return false;
      }

      if (this._isOpen) {
        return true; // TODO error
      } else if (_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._getOpenSync()) {
        return false;
      }

      return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
    }
  }, {
    key: "onWillStart",
    value: function onWillStart() {
      this.beforeAnimation(!this._isOpen);
      return this.loadAnimation();
    }
  }, {
    key: "onStart",
    value: function onStart() {
      if (!this.isAnimating || !this.animation) {
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(false, 'isAnimating has to be true');
        return;
      } // the cloned animation should not use an easing curve during seek


      this.animation.progressStart(true, this._isOpen ? 1 : 0);
    }
  }, {
    key: "onMove",
    value: function onMove(detail) {
      if (!this.isAnimating || !this.animation) {
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(false, 'isAnimating has to be true');
        return;
      }

      var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
      var stepValue = delta / this.width;
      this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
    }
  }, {
    key: "onEnd",
    value: function onEnd(detail) {
      var _this3 = this;

      if (!this.isAnimating || !this.animation) {
        Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(false, 'isAnimating has to be true');
        return;
      }

      var isOpen = this._isOpen;
      var isEndSide = this.isEndSide;
      var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
      var width = this.width;
      var stepValue = delta / width;
      var velocity = detail.velocityX;
      var z = width / 2.0;
      var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
      var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
      var shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
      var shouldOpen = !isOpen && shouldComplete;

      if (isOpen && !shouldComplete) {
        shouldOpen = true;
      }

      this.lastOnEnd = detail.currentTime; // Account for rounding errors in JS

      var newStepValue = shouldComplete ? 0.001 : -0.001;
      /**
       * TODO: stepValue can sometimes return a negative
       * value, but you can't have a negative time value
       * for the cubic bezier curve (at least with web animations)
       * Not sure if the negative step value is an error or not
       */

      var adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
      /**
       * Animation will be reversed here, so need to
       * reverse the easing curve as well
       *
       * Additionally, we need to account for the time relative
       * to the new easing curve, as `stepValue` is going to be given
       * in terms of a linear curve.
       */

      newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [0.4, 0], [0.6, 1], [1, 1], Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["j"])(0, adjustedStepValue, 0.9999))[0] || 0;
      var playTo = this._isOpen ? !shouldComplete : shouldComplete;
      this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(function () {
        return _this3.afterAnimation(shouldOpen);
      }, {
        oneTimeCallback: true
      }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
    }
  }, {
    key: "beforeAnimation",
    value: function beforeAnimation(shouldOpen) {
      Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
      // this css class doesn't actually kick off any animations

      this.el.classList.add(SHOW_MENU);
      /**
       * We add a tabindex here so that focus trapping
       * still works even if the menu does not have
       * any focusable elements slotted inside. The
       * focus trapping utility will fallback to focusing
       * the menu so focus does not leave when the menu
       * is open.
       */

      this.el.setAttribute('tabindex', '0');

      if (this.backdropEl) {
        this.backdropEl.classList.add(SHOW_BACKDROP);
      }

      this.blocker.block();
      this.isAnimating = true;

      if (shouldOpen) {
        this.ionWillOpen.emit();
      } else {
        this.ionWillClose.emit();
      }
    }
  }, {
    key: "afterAnimation",
    value: function afterAnimation(isOpen) {
      Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
      // only add listeners/css if it's enabled and isOpen
      // and only remove listeners/css if it's not open
      // emit opened/closed events

      this._isOpen = isOpen;
      this.isAnimating = false;

      if (!this._isOpen) {
        this.blocker.unblock();
      }

      if (isOpen) {
        // add css class and hide content behind menu from screen readers
        if (this.contentEl) {
          this.contentEl.classList.add(MENU_CONTENT_OPEN);
          /**
           * When the menu is open and overlaying the main
           * content, the main content should not be announced
           * by the screenreader as the menu is the main
           * focus. This is useful with screenreaders that have
           * "read from top" gestures that read the entire
           * page from top to bottom when activated.
           */

          this.contentEl.setAttribute('aria-hidden', 'true');
        } // emit open event


        this.ionDidOpen.emit(); // focus menu content for screen readers

        if (this.menuInnerEl) {
          this.focusFirstDescendant();
        } // setup focus trapping


        document.addEventListener('focus', this.handleFocus, true);
      } else {
        // remove css classes and unhide content from screen readers
        this.el.classList.remove(SHOW_MENU);
        /**
         * Remove tabindex from the menu component
         * so that is cannot be tabbed to.
         */

        this.el.removeAttribute('tabindex');

        if (this.contentEl) {
          this.contentEl.classList.remove(MENU_CONTENT_OPEN);
          /**
           * Remove aria-hidden so screen readers
           * can announce the main content again
           * now that the menu is not the main focus.
           */

          this.contentEl.removeAttribute('aria-hidden');
        }

        if (this.backdropEl) {
          this.backdropEl.classList.remove(SHOW_BACKDROP);
        }

        if (this.animation) {
          this.animation.stop();
        } // emit close event


        this.ionDidClose.emit(); // undo focus trapping so multiple menus don't collide

        document.removeEventListener('focus', this.handleFocus, true);
      }
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var isActive = this._isActive();

      if (this.gesture) {
        this.gesture.enable(isActive && this.swipeGesture);
      } // Close menu immediately


      if (!isActive && this._isOpen) {
        // close if this menu is open, and should not be enabled
        this.forceClosing();
      }

      if (!this.disabled) {
        _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"]._setActiveMenu(this);
      }

      Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(!this.isAnimating, 'can not be animating');
    }
  }, {
    key: "forceClosing",
    value: function forceClosing() {
      Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["l"])(this._isOpen, 'menu cannot be closed');
      this.isAnimating = true;
      var ani = this.animation.direction('reverse');
      ani.play({
        sync: true
      });
      this.afterAnimation(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _class,
          _this4 = this;

      var isEndSide = this.isEndSide,
          type = this.type,
          disabled = this.disabled,
          isPaneVisible = this.isPaneVisible,
          inheritedAttributes = this.inheritedAttributes;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        role: "navigation",
        "aria-label": inheritedAttributes['aria-label'] || 'menu',
        class: (_class = {}, Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "menu-type-".concat(type), true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'menu-enabled', !disabled), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'menu-side-end', isEndSide), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'menu-side-start', !isEndSide), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'menu-pane-visible', isPaneVisible), _class)
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "menu-inner",
        part: "container",
        ref: function ref(el) {
          return _this4.menuInnerEl = el;
        }
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-backdrop", {
        ref: function ref(el) {
          return _this4.backdropEl = el;
        },
        class: "menu-backdrop",
        tappable: false,
        stopPropagation: false,
        part: "backdrop"
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "type": ["typeChanged"],
        "disabled": ["disabledChanged"],
        "side": ["sideChanged"],
        "swipeGesture": ["swipeGestureChanged"]
      };
    }
  }]);

  return Menu;
}();

var computeDelta = function computeDelta(deltaX, isOpen, isEndSide) {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};

var checkEdgeSide = function checkEdgeSide(win, posX, isEndSide, maxEdgeStart) {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};

var SHOW_MENU = 'show-menu';
var SHOW_BACKDROP = 'show-backdrop';
var MENU_CONTENT_OPEN = 'menu-content-open';
Menu.style = {
  ios: menuIosCss,
  md: menuMdCss
}; // Given a menu, return whether or not the menu toggle should be visible

var updateVisibility = /*#__PURE__*/function () {
  var _ref = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(menu) {
    var menuEl;
    return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"].get(menu);

          case 2:
            menuEl = _context6.sent;
            _context6.t0 = menuEl;

            if (!_context6.t0) {
              _context6.next = 8;
              break;
            }

            _context6.next = 7;
            return menuEl.isActive();

          case 7:
            _context6.t0 = _context6.sent;

          case 8:
            return _context6.abrupt("return", !!_context6.t0);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateVisibility(_x4) {
    return _ref.apply(this, arguments);
  };
}();

var menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
var menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";

var MenuButton = /*#__PURE__*/function () {
  function MenuButton(hostRef) {
    var _this5 = this;

    Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuButton);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inheritedAttributes = {};
    this.visible = false;
    /**
     * If `true`, the user cannot interact with the menu button.
     */

    this.disabled = false;
    /**
     * Automatically hides the menu button when the corresponding menu is not active
     */

    this.autoHide = true;
    /**
     * The type of the button.
     */

    this.type = 'button';
    this.onClick = /*#__PURE__*/Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"].toggle(_this5.menu));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
  }

  Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuButton, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.inheritedAttributes = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_9__["i"])(this.el, ['aria-label']);
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      this.visibilityChanged();
    }
  }, {
    key: "visibilityChanged",
    value: function () {
      var _visibilityChanged = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return updateVisibility(this.menu);

              case 2:
                this.visible = _context8.sent;

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function visibilityChanged() {
        return _visibilityChanged.apply(this, arguments);
      }

      return visibilityChanged;
    }()
  }, {
    key: "render",
    value: function render() {
      var _createColorClasses;

      var color = this.color,
          disabled = this.disabled,
          inheritedAttributes = this.inheritedAttributes;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var menuIcon = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["c"].get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');
      var hidden = this.autoHide && !this.visible;
      var attrs = {
        type: this.type
      };
      var ariaLabel = inheritedAttributes['aria-label'] || 'menu';
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        "aria-disabled": disabled ? 'true' : null,
        "aria-hidden": hidden ? 'true' : null,
        class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_11__["c"])(color, (_createColorClasses = {}, Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, mode, true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'button', true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'menu-button-hidden', hidden), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'menu-button-disabled', disabled), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'in-toolbar', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_11__["h"])('ion-toolbar', this.el)), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'in-toolbar-color', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_11__["h"])('ion-toolbar[color]', this.el)), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'ion-activatable', true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createColorClasses, 'ion-focusable', true), _createColorClasses))
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", Object.assign({}, attrs, {
        disabled: disabled,
        class: "button-native",
        part: "native",
        "aria-label": ariaLabel
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("span", {
        class: "button-inner"
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
        part: "icon",
        icon: menuIcon,
        mode: mode,
        lazy: false,
        "aria-hidden": "true"
      }))), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-ripple-effect", {
        type: "unbounded"
      })));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this);
    }
  }]);

  return MenuButton;
}();

MenuButton.style = {
  ios: menuButtonIosCss,
  md: menuButtonMdCss
};
var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

var MenuToggle = /*#__PURE__*/function () {
  function MenuToggle(hostRef) {
    var _this6 = this;

    Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MenuToggle);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */

    this.autoHide = true;

    this.onClick = function () {
      return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_10__["m"].toggle(_this6.menu);
    };
  }

  Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuToggle, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.visibilityChanged();
    }
  }, {
    key: "visibilityChanged",
    value: function () {
      var _visibilityChanged2 = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
        return _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return updateVisibility(this.menu);

              case 2:
                this.visible = _context9.sent;

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function visibilityChanged() {
        return _visibilityChanged2.apply(this, arguments);
      }

      return visibilityChanged;
    }()
  }, {
    key: "render",
    value: function render() {
      var _class2;

      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var hidden = this.autoHide && !this.visible;
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        "aria-hidden": hidden ? 'true' : null,
        class: (_class2 = {}, Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class2, mode, true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class2, 'menu-toggle-hidden', hidden), _class2)
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null));
    }
  }]);

  return MenuToggle;
}();

MenuToggle.style = menuToggleCss;


/***/ })

}]);
//# sourceMappingURL=19.js.map