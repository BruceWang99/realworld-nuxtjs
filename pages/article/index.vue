<template>
   <div class="post-page">

  <div class="banner">
    <div class="container">

      <h1>{{ article.title }}</h1>
      <article-meta :article="article"/>

    </div>
  </div>

  <div class="container page">

    <div class="row post-content">
      <div class="col-md-12" v-html="article.body"></div>
    </div>

    <hr />

    <div class="post-actions">
      <article-meta :article="article"/>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <article-comments :article="article"/>
      </div>
    </div>

  </div>

</div>
</template>

<script>
import { getArticle } from '../../api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta.vue'
import ArticleComments from './components/article-comments.vue'


export default {
  name: 'Article',
  components: {
    ArticleMeta,
    ArticleComments
  },
   data() {
	   return {}
   },
   head () {
     return {
       title: `${this.article.title} - realWorld`,
       meta: [
         {
           hid: 'description', // 唯一标示
           name: 'description',
           content: this.article.description
         }
       ]
     }
   },
   async asyncData({ params }) {
     const { data } = await getArticle(params.slug)
     const { article } = data
     const md = new MarkdownIt()
     article.body = md.render(article.body)

     return {
       article
     }
   }

}
</script>

<style lang='scss' scoped>
</style>
