/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.6_9320fdaae1389a3c61476c3921ea0af5/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/package/LookBoard/index.vue?vue&type=template&id=05509cb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container')}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Container.vue?vue&type=template&id=8cc0058a&
var Containervue_type_template_id_8cc0058a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[_c('transition',[_c('container-wrapper',[_c(_vm.view,{tag:"component"})],1)],1)],1)}
var Containervue_type_template_id_8cc0058a_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarList.vue?vue&type=template&id=59e8105d&
var SidebarListvue_type_template_id_59e8105d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("我是list")])}
var SidebarListvue_type_template_id_59e8105d_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarList.vue?vue&type=script&lang=js&
/* harmony default export */ var SidebarListvue_type_script_lang_js_ = ({});
;// CONCATENATED MODULE: ./src/components/SidebarList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarListvue_type_script_lang_js_ = (SidebarListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/SidebarList.vue





/* normalize component */
;
var component = normalizeComponent(
  components_SidebarListvue_type_script_lang_js_,
  SidebarListvue_type_template_id_59e8105d_render,
  SidebarListvue_type_template_id_59e8105d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarList = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarDetail.vue?vue&type=template&id=60f08506&
var SidebarDetailvue_type_template_id_60f08506_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("我是detail")])}
var SidebarDetailvue_type_template_id_60f08506_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarDetail.vue?vue&type=script&lang=js&
/* harmony default export */ var SidebarDetailvue_type_script_lang_js_ = ({});
;// CONCATENATED MODULE: ./src/components/SidebarDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarDetailvue_type_script_lang_js_ = (SidebarDetailvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/SidebarDetail.vue





/* normalize component */
;
var SidebarDetail_component = normalizeComponent(
  components_SidebarDetailvue_type_script_lang_js_,
  SidebarDetailvue_type_template_id_60f08506_render,
  SidebarDetailvue_type_template_id_60f08506_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarDetail = (SidebarDetail_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarWebShow.vue?vue&type=template&id=14527122&
var SidebarWebShowvue_type_template_id_14527122_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("我是iframe")])}
var SidebarWebShowvue_type_template_id_14527122_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SidebarWebShow.vue?vue&type=script&lang=js&
/* harmony default export */ var SidebarWebShowvue_type_script_lang_js_ = ({});
;// CONCATENATED MODULE: ./src/components/SidebarWebShow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarWebShowvue_type_script_lang_js_ = (SidebarWebShowvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/SidebarWebShow.vue





/* normalize component */
;
var SidebarWebShow_component = normalizeComponent(
  components_SidebarWebShowvue_type_script_lang_js_,
  SidebarWebShowvue_type_template_id_14527122_render,
  SidebarWebShowvue_type_template_id_14527122_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarWebShow = (SidebarWebShow_component.exports);
;// CONCATENATED MODULE: ./src/share/constants.js
/**
 * 组件名称
 */
const COMPONENTS_NAME = {
  // 列表组件
  BLACKBOARD_LIST: "list",
  //详情组件
  BLACKBOARD_DETAIL: "detail",
  // iframe组件
  BLACKBOARD_WEB_SHOW: "webShow"
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/containerWrapper.vue?vue&type=template&id=00b28c96&
var containerWrappervue_type_template_id_00b28c96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrapper"}},[_c('div',{staticClass:"wrapper-header"},[_vm._v("我是头")]),_vm._t("default")],2)}
var containerWrappervue_type_template_id_00b28c96_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/containerWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var containerWrappervue_type_script_lang_js_ = ({
  data() {
    return {};
  }

});
;// CONCATENATED MODULE: ./src/views/containerWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_containerWrappervue_type_script_lang_js_ = (containerWrappervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.73.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.14+webpack@5.73.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/containerWrapper.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/containerWrapper.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/views/containerWrapper.vue



;


/* normalize component */

var containerWrapper_component = normalizeComponent(
  views_containerWrappervue_type_script_lang_js_,
  containerWrappervue_type_template_id_00b28c96_render,
  containerWrappervue_type_template_id_00b28c96_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var containerWrapper = (containerWrapper_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Container.vue?vue&type=script&lang=js&





/* harmony default export */ var Containervue_type_script_lang_js_ = ({
  name: "App",
  components: {
    List: SidebarList,
    Detail: SidebarDetail,
    WebShow: SidebarWebShow,
    ContainerWrapper: containerWrapper
  },

  data() {
    return {
      componentShow: COMPONENTS_NAME.BLACKBOARD_LIST
    };
  },

  computed: {
    view() {
      let resolve; // 解析的组件

      switch (this.componentShow) {
        case COMPONENTS_NAME.BLACKBOARD_LIST:
          resolve = SidebarList;
          break;

        case COMPONENTS_NAME.BLACKBOARD_DETAIL:
          resolve = SidebarDetail;
          break;

        case COMPONENTS_NAME.BLACKBOARD_IFRAME:
          resolve = SidebarWebShow;
          break;
      }

      return resolve;
    }

  }
});
;// CONCATENATED MODULE: ./src/views/Container.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Containervue_type_script_lang_js_ = (Containervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.73.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.14+webpack@5.73.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Container.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Container.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/views/Container.vue



;


/* normalize component */

var Container_component = normalizeComponent(
  views_Containervue_type_script_lang_js_,
  Containervue_type_template_id_8cc0058a_render,
  Containervue_type_template_id_8cc0058a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Container = (Container_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/package/LookBoard/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var LookBoardvue_type_script_lang_js_ = ({
  components: {
    Container: Container
  }
});
;// CONCATENATED MODULE: ./src/package/LookBoard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_LookBoardvue_type_script_lang_js_ = (LookBoardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/package/LookBoard/index.vue





/* normalize component */
;
var LookBoard_component = normalizeComponent(
  package_LookBoardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LookBoard = (LookBoard_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/package/LookMore/index.vue?vue&type=template&id=43898b74&
var LookMorevue_type_template_id_43898b74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container')}
var LookMorevue_type_template_id_43898b74_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.73.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.5_993ce5acb94884ef30374affded05051/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_ab15bcbf8816cbcd0e864e6a0b26819d/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/package/LookMore/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var LookMorevue_type_script_lang_js_ = ({
  components: {
    Container: Container
  }
});
;// CONCATENATED MODULE: ./src/package/LookMore/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_LookMorevue_type_script_lang_js_ = (LookMorevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/package/LookMore/index.vue





/* normalize component */
;
var LookMore_component = normalizeComponent(
  package_LookMorevue_type_script_lang_js_,
  LookMorevue_type_template_id_43898b74_render,
  LookMorevue_type_template_id_43898b74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LookMore = (LookMore_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js


const components = [LookBoard, LookMore]; // 批量注册组件

const install = function (Vue) {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};

/* harmony default export */ var src_package = (install);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.6_9320fdaae1389a3c61476c3921ea0af5/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=look-more.common.js.map