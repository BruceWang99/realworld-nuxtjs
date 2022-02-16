exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=template&id=84cdc97c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-84cdc97c>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-84cdc97c>","</div>",[_vm._ssrNode("<div class=\"col-md-6 col-md-offset-3 col-xs-12\" data-v-84cdc97c>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-84cdc97c>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : "Sign up")+"\n")+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-84cdc97c>","</p>",[_vm._ssrNode("<a href=\"#\" data-v-84cdc97c></a> "),(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],2),_vm._ssrNode(" <ul class=\"error-messages\" data-v-84cdc97c>"+(_vm._ssrList((_vm.errors),function(messages){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-84cdc97c>"+_vm._ssrEscape(_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-84cdc97c>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-84cdc97c><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-84cdc97c></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-84cdc97c><input type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-84cdc97c></fieldset> <fieldset class=\"form-group\" data-v-84cdc97c><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-84cdc97c></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-84cdc97c>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=template&id=84cdc97c&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/user.js
 // 用户登录

const login = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var authvue_type_script_lang_js_ = ({
  name: 'Auth',
  middleware: 'notAuthenticated',
  components: {},

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        console.log('data', data);
        this.$store.commit('setUser', data.user); // 数据持久化

        Cookie.set('user', JSON.stringify(data.user)); // 保存用户登录状态

        this.$router.push('/');
      } catch (err) {
        console.dir(err);
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_authvue_type_script_lang_js_ = (authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "84cdc97c",
  "fbe19a62"
  
)

/* harmony default export */ var auth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map