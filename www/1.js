(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "Q8AI":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-alert.entry.js ***!
  \**************************************************************/
/*! exports provided: ion_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert", function() { return Alert; });
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "E/Mt");
/* harmony import */ var _button_active_d4bd4f74_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-active-d4bd4f74.js */ "Zcj0");
/* harmony import */ var _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlays-e9ccff30.js */ "SOSK");
/* harmony import */ var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-9e3fe806.js */ "39oe");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "74mu");
/* harmony import */ var _animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animation-096c6391.js */ "meiF");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "y08P");
/* harmony import */ var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */ "B4Jq");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");
















/**
 * iOS Alert Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: '0.01',
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: '1',
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Alert Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).keyframes([{
    offset: 0,
    opacity: '0.01',
    transform: 'scale(0.9)'
  }, {
    offset: 1,
    opacity: '1',
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')).fromTo('opacity', 0.99, 0);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};

var alertIosCss = ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-0.55px;margin-inline-end:-0.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #eb445a)}";
var alertMdCss = ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:266px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:266px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}";

var Alert = /*#__PURE__*/function () {
  function Alert(hostRef) {
    var _this = this;

    Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Alert);

    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionAlertDidPresent", 7);
    this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionAlertWillPresent", 7);
    this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionAlertWillDismiss", 7);
    this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, "ionAlertDidDismiss", 7);
    this.processedInputs = [];
    this.processedButtons = [];
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * Array of buttons to be added to the alert.
     */

    this.buttons = [];
    /**
     * Array of input to show in the alert.
     */

    this.inputs = [];
    /**
     * If `true`, the alert will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = true;
    /**
     * If `true`, the alert will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * If `true`, the alert will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      _this.dismiss(undefined, _overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["B"]);
    };

    this.dispatchCancelHandler = function (ev) {
      var role = ev.detail.role;

      if (Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["i"])(role)) {
        var cancelButton = _this.processedButtons.find(function (b) {
          return b.role === 'cancel';
        });

        _this.callButtonHandler(cancelButton);
      }
    };
  }

  Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Alert, [{
    key: "onKeydown",
    value: function onKeydown(ev) {
      var inputTypes = new Set(this.processedInputs.map(function (i) {
        return i.type;
      })); // The only inputs we want to navigate between using arrow keys are the radios
      // ignore the keydown event if it is not on a radio button

      if (!inputTypes.has('radio') || ev.target && !this.el.contains(ev.target) || ev.target.classList.contains('alert-button')) {
        return;
      } // Get all radios inside of the radio group and then
      // filter out disabled radios since we need to skip those


      var query = this.el.querySelectorAll('.alert-radio');
      var radios = Array.from(query).filter(function (radio) {
        return !radio.disabled;
      }); // The focused radio is the one that shares the same id as
      // the event target

      var index = radios.findIndex(function (radio) {
        return radio.id === ev.target.id;
      }); // We need to know what the next radio element should
      // be in order to change the focus

      var nextEl; // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio

      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        nextEl = index === radios.length - 1 ? radios[0] : radios[index + 1];
      } // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio


      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        nextEl = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }

      if (nextEl && radios.includes(nextEl)) {
        var nextProcessed = this.processedInputs.find(function (input) {
          return input.id === (nextEl === null || nextEl === void 0 ? void 0 : nextEl.id);
        });

        if (nextProcessed) {
          this.rbClick(nextProcessed);
          nextEl.focus();
        }
      }
    }
  }, {
    key: "buttonsChanged",
    value: function buttonsChanged() {
      var buttons = this.buttons;
      this.processedButtons = buttons.map(function (btn) {
        return typeof btn === 'string' ? {
          text: btn,
          role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined
        } : btn;
      });
    }
  }, {
    key: "inputsChanged",
    value: function inputsChanged() {
      var _this2 = this;

      var inputs = this.inputs; // Get the first input that is not disabled and the checked one
      // If an enabled checked input exists, set it to be the focusable input
      // otherwise we default to focus the first input
      // This will only be used when the input is type radio

      var first = inputs.find(function (input) {
        return !input.disabled;
      });
      var checked = inputs.find(function (input) {
        return input.checked && !input.disabled;
      });
      var focusable = checked || first; // An alert can be created with several different inputs. Radios,
      // checkboxes and inputs are all accepted, but they cannot be mixed.

      var inputTypes = new Set(inputs.map(function (i) {
        return i.type;
      }));

      if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
        console.warn("Alert cannot mix input types: ".concat(Array.from(inputTypes.values()).join('/'), ". Please see alert docs for more info."));
      }

      this.inputType = inputTypes.values().next().value;
      this.processedInputs = inputs.map(function (i, index) {
        return {
          type: i.type || 'text',
          name: i.name || "".concat(index),
          placeholder: i.placeholder || '',
          value: i.value,
          label: i.label,
          checked: !!i.checked,
          disabled: !!i.disabled,
          id: i.id || "alert-input-".concat(_this2.overlayIndex, "-").concat(index),
          handler: i.handler,
          min: i.min,
          max: i.max,
          cssClass: i.cssClass || '',
          attributes: i.attributes || {},
          tabindex: i.type === 'radio' && i !== focusable ? -1 : 0
        };
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["e"])(this.el);
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.inputsChanged();
      this.buttonsChanged();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      /**
       * Do not create gesture if:
       * 1. A gesture already exists
       * 2. App is running in MD mode
       * 3. A wrapper ref does not exist
       */
      if (this.gesture || Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this) === 'md' || !this.wrapperEl) {
        return;
      }

      this.gesture = Object(_button_active_d4bd4f74_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.wrapperEl, function (refEl) {
        return refEl.classList.contains('alert-button');
      });
      this.gesture.enable(true);
    }
    /**
     * Present the alert overlay after it has been created.
     */

  }, {
    key: "present",
    value: function present() {
      return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the alert overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["f"])(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the alert did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["g"])(this.el, 'ionAlertDidDismiss');
    }
    /**
     * Returns a promise that resolves when the alert will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["g"])(this.el, 'ionAlertWillDismiss');
    }
  }, {
    key: "rbClick",
    value: function rbClick(selectedInput) {
      var _iterator = Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.processedInputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          input.checked = input === selectedInput;
          input.tabindex = input === selectedInput ? 0 : -1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.activeId = selectedInput.id;
      Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["s"])(selectedInput.handler, selectedInput);
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["j"])(this);
    }
  }, {
    key: "cbClick",
    value: function cbClick(selectedInput) {
      selectedInput.checked = !selectedInput.checked;
      Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["s"])(selectedInput.handler, selectedInput);
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["j"])(this);
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(button) {
      var role = button.role;
      var values = this.getValues();

      if (Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["i"])(role)) {
        return this.dismiss({
          values: values
        }, role);
      }

      var returnData = this.callButtonHandler(button, values);

      if (returnData !== false) {
        return this.dismiss(Object.assign({
          values: values
        }, returnData), button.role);
      }

      return Promise.resolve(false);
    }
  }, {
    key: "callButtonHandler",
    value: function callButtonHandler(button, data) {
      if (button && button.handler) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        var returnData = Object(_overlays_e9ccff30_js__WEBPACK_IMPORTED_MODULE_7__["s"])(button.handler, data);

        if (returnData === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }

        if (typeof returnData === 'object') {
          return returnData;
        }
      }

      return {};
    }
  }, {
    key: "getValues",
    value: function getValues() {
      if (this.processedInputs.length === 0) {
        // this is an alert without any options/inputs at all
        return undefined;
      }

      if (this.inputType === 'radio') {
        // this is an alert with radio buttons (single value select)
        // return the one value which is checked, otherwise undefined
        var checkedInput = this.processedInputs.find(function (i) {
          return !!i.checked;
        });
        return checkedInput ? checkedInput.value : undefined;
      }

      if (this.inputType === 'checkbox') {
        // this is an alert with checkboxes (multiple value select)
        // return an array of all the checked values
        return this.processedInputs.filter(function (i) {
          return i.checked;
        }).map(function (i) {
          return i.value;
        });
      } // this is an alert with text inputs
      // return an object of all the values with the input name as the key


      var values = {};
      this.processedInputs.forEach(function (i) {
        values[i.name] = i.value || '';
      });
      return values;
    }
  }, {
    key: "renderAlertInputs",
    value: function renderAlertInputs() {
      switch (this.inputType) {
        case 'checkbox':
          return this.renderCheckbox();

        case 'radio':
          return this.renderRadio();

        default:
          return this.renderInput();
      }
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {
      var _this3 = this;

      var inputs = this.processedInputs;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);

      if (inputs.length === 0) {
        return null;
      }

      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "alert-checkbox-group"
      }, inputs.map(function (i) {
        return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("button", {
          type: "button",
          onClick: function onClick() {
            return _this3.cbClick(i);
          },
          "aria-checked": "".concat(i.checked),
          id: i.id,
          disabled: i.disabled,
          tabIndex: i.tabindex,
          role: "checkbox",
          class: Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(i.cssClass)), {
            'alert-tappable': true,
            'alert-checkbox': true,
            'alert-checkbox-button': true,
            'ion-focusable': true,
            'alert-checkbox-button-disabled': i.disabled || false
          })
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-button-inner"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-checkbox-icon"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-checkbox-inner"
        })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-checkbox-label"
        }, i.label)), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-ripple-effect", null));
      }));
    }
  }, {
    key: "renderRadio",
    value: function renderRadio() {
      var _this4 = this;

      var inputs = this.processedInputs;

      if (inputs.length === 0) {
        return null;
      }

      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "alert-radio-group",
        role: "radiogroup",
        "aria-activedescendant": this.activeId
      }, inputs.map(function (i) {
        return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("button", {
          type: "button",
          onClick: function onClick() {
            return _this4.rbClick(i);
          },
          "aria-checked": "".concat(i.checked),
          disabled: i.disabled,
          id: i.id,
          tabIndex: i.tabindex,
          class: Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(i.cssClass)), {
            'alert-radio-button': true,
            'alert-tappable': true,
            'alert-radio': true,
            'ion-focusable': true,
            'alert-radio-button-disabled': i.disabled || false
          }),
          role: "radio"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-button-inner"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-radio-icon"
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-radio-inner"
        })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
          class: "alert-radio-label"
        }, i.label)));
      }));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var inputs = this.processedInputs;

      if (inputs.length === 0) {
        return null;
      }

      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "alert-input-group"
      }, inputs.map(function (i) {
        var _a, _b, _c, _d;

        if (i.type === 'textarea') {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
            class: "alert-input-wrapper"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("textarea", Object.assign({
            placeholder: i.placeholder,
            value: i.value,
            id: i.id,
            tabIndex: i.tabindex
          }, i.attributes, {
            disabled: (_b = (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : i.disabled,
            class: inputClass(i),
            onInput: function onInput(e) {
              var _a;

              i.value = e.target.value;

              if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
                i.attributes.onInput(e);
              }
            }
          })));
        } else {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
            class: "alert-input-wrapper"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("input", Object.assign({
            placeholder: i.placeholder,
            type: i.type,
            min: i.min,
            max: i.max,
            value: i.value,
            id: i.id,
            tabIndex: i.tabindex
          }, i.attributes, {
            disabled: (_d = (_c = i.attributes) === null || _c === void 0 ? void 0 : _c.disabled) !== null && _d !== void 0 ? _d : i.disabled,
            class: inputClass(i),
            onInput: function onInput(e) {
              var _a;

              i.value = e.target.value;

              if ((_a = i.attributes) === null || _a === void 0 ? void 0 : _a.onInput) {
                i.attributes.onInput(e);
              }
            }
          })));
        }
      }));
    }
  }, {
    key: "renderAlertButtons",
    value: function renderAlertButtons() {
      var _this5 = this;

      var buttons = this.processedButtons;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
      var alertButtonGroupClass = {
        'alert-button-group': true,
        'alert-button-group-vertical': buttons.length > 2
      };
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: alertButtonGroupClass
      }, buttons.map(function (button) {
        return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("button", {
          type: "button",
          class: buttonClass(button),
          tabIndex: 0,
          onClick: function onClick() {
            return _this5.buttonClick(button);
          }
        }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("span", {
          class: "alert-button-inner"
        }, button.text), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-ripple-effect", null));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign,
          _this6 = this;

      var overlayIndex = this.overlayIndex,
          header = this.header,
          subHeader = this.subHeader,
          htmlAttributes = this.htmlAttributes;
      var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_5__["b"])(this);
      var hdrId = "alert-".concat(overlayIndex, "-hdr");
      var subHdrId = "alert-".concat(overlayIndex, "-sub-hdr");
      var msgId = "alert-".concat(overlayIndex, "-msg");
      var role = this.inputs.length > 0 || this.buttons.length > 0 ? 'alertdialog' : 'alert';
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["H"], Object.assign({
        role: role,
        "aria-modal": "true",
        tabindex: "-1"
      }, htmlAttributes, {
        style: {
          zIndex: "".concat(20000 + overlayIndex)
        },
        class: Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(this.cssClass)), (_Object$assign = {}, Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'alert-translucent', this.translucent), _Object$assign)),
        onIonAlertWillDismiss: this.dispatchCancelHandler,
        onIonBackdropTap: this.onBackdropTap
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-backdrop", {
        tappable: this.backdropDismiss
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        tabindex: "0"
      }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "alert-wrapper ion-overlay-wrapper",
        ref: function ref(el) {
          return _this6.wrapperEl = el;
        }
      }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "alert-head"
      }, header && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("h2", {
        id: hdrId,
        class: "alert-title"
      }, header), subHeader && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("h2", {
        id: subHdrId,
        class: "alert-sub-title"
      }, subHeader)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        id: msgId,
        class: "alert-message",
        innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this.message)
      }), this.renderAlertInputs(), this.renderAlertButtons()), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        tabindex: "0"
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_4__["i"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "buttons": ["buttonsChanged"],
        "inputs": ["inputsChanged"]
      };
    }
  }]);

  return Alert;
}();

var inputClass = function inputClass(input) {
  var _a, _b, _c;

  return Object.assign(Object.assign({
    'alert-input': true,
    'alert-input-disabled': ((_b = (_a = input.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : input.disabled) || false
  }, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(input.cssClass)), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(input.attributes ? (_c = input.attributes.class) === null || _c === void 0 ? void 0 : _c.toString() : ''));
};

var buttonClass = function buttonClass(button) {
  return Object.assign(Object(_Users_nicolasduret_Desktop_CODE_EPSI_Gostyle_last_GoStyle_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'alert-button': true,
    'ion-focusable': true,
    'ion-activatable': true
  }, "alert-button-role-".concat(button.role), button.role !== undefined), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_9__["g"])(button.cssClass));
};

Alert.style = {
  ios: alertIosCss,
  md: alertMdCss
};


/***/ })

}]);
//# sourceMappingURL=1.js.map