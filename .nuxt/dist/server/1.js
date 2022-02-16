exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取公共文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY`
    // }

  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=7a02f3f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-page"},[_vm._ssrNode("<div class=\"banner\" data-v-7a02f3f2>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-7a02f3f2>","</div>",[_vm._ssrNode("<h1 data-v-7a02f3f2>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-7a02f3f2>","</div>",[_vm._ssrNode("<div class=\"row post-content\" data-v-7a02f3f2><div class=\"col-md-12\" data-v-7a02f3f2>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-7a02f3f2> "),_vm._ssrNode("<div class=\"post-actions\" data-v-7a02f3f2>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-7a02f3f2>","</div>",[_vm._ssrNode("<div class=\"col-md-8 col-md-offset-2\" data-v-7a02f3f2>","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=7a02f3f2&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(25);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(24);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=07993582&scoped=true&
var article_metavue_type_template_id_07993582_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post-meta"},[_c('nuxt-link',{attrs:{"to":{
			name: 'profile',
			params: {
				username: _vm.article.author.username
			}
		}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-07993582>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
			name: 'profile',
			params: {
				username: _vm.article.author.username
			}
		}}},[_vm._v("\n\t\t"+_vm._s(_vm.article.author.username)+"\n\t\t")]),_vm._ssrNode(" <span class=\"date\" data-v-07993582>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'YYYY-MM-DD hh:mm:ss')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
			  active: _vm.article.author.following
		  }))+" data-v-07993582><i class=\"ion-plus-round\" data-v-07993582></i>"+_vm._ssrEscape("\n           \n          Follow "+_vm._s(_vm.article.author.username)+" ")+"<span class=\"counter\" data-v-07993582>"+_vm._ssrEscape("("+_vm._s(_vm.article.author.followedBy.length)+")")+"</span></button>\n          \n        <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
			  active: _vm.article.favorited
		  }))+" data-v-07993582><i class=\"ion-heart\" data-v-07993582></i>\n           \n          Favorite Post <span class=\"counter\" data-v-07993582>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_07993582_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=07993582&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  components: {},

  data() {
    return {};
  },

  props: {
    article: {
      type: Object,
      require: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_07993582_scoped_true_render,
  article_metavue_type_template_id_07993582_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "07993582",
  "055950c8"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=ebf6dcfc&scoped=true&
var article_commentsvue_type_template_id_ebf6dcfc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-ebf6dcfc>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-ebf6dcfc><p class=\"card-text\" data-v-ebf6dcfc>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-ebf6dcfc>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
			name: 'profile',
			params: {
				username: comment.author.username
			}
		}}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n\t\t \n\t\t"),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
			name: 'profile',
			params: {
				username: comment.author.username
			}
		}}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-ebf6dcfc>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMMM-YY-DD hh:mm:ss')))+"</span>")],2)],2)}),_vm._ssrNode(" <form class=\"card comment-form\" data-v-ebf6dcfc><div class=\"card-block\" data-v-ebf6dcfc><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-ebf6dcfc></textarea></div> <div class=\"card-footer\" data-v-ebf6dcfc><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-ebf6dcfc> <button class=\"btn btn-sm btn-primary\" data-v-ebf6dcfc>\n\t\t\tPost Comment\n\t\t</button></div></form>")],2)}
var article_commentsvue_type_template_id_ebf6dcfc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=ebf6dcfc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'ArticleComments',
  components: {},

  data() {
    return {
      comments: []
    };
  },

  props: {
    article: {
      type: Object,
      require: true
    }
  },

  async mounted() {
    const {
      data
    } = await Object(api_article["e" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_ebf6dcfc_scoped_true_render,
  article_commentsvue_type_template_id_ebf6dcfc_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "ebf6dcfc",
  "d4898892"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'Article',
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  data() {
    return {};
  },

  head() {
    return {
      title: `${this.article.title} - realWorld`,
      meta: [{
        hid: 'description',
        // 唯一标示
        name: 'description',
        content: this.article.description
      }]
    };
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["c" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "7a02f3f2",
  "6c2c8d05"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map