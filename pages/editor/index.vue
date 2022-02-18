<template>
   <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 col-md-offset-1 col-xs-12">
        <div>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Post Title" v-model="article.title">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="What's this article about?" v-model="article.description">
          </fieldset>
          <fieldset class="form-group">
            <textarea class="form-control" rows="8" placeholder="Write your post (in markdown)" v-model="article.body"></textarea>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control" type="text" placeholder="Enter tags" v-model="tag" @keydown.enter="writeTag">
            <div class="tag-list">
              <span class="label label-pill label-default" v-for="tag in this.article.tagList" :key="tag"><i class="ion-close-round"></i> {{tag}}</span>
            </div>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right" @click="onSubmit">
            Create Post
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { createArticle } from '../../api/article'

export default {
  name: 'Editor',
  middleware: 'authenticated',
  components: {},
   data() {
	   return {
       tag: '',
       article: {title:"",description:"",body:"",tagList:[]}
     }
   },
   methods:{
     writeTag() {
       this.article.tagList.push(this.tag)
       this.tag = ''
     },
     async onSubmit () {
        const data = await createArticle({
          article: this.article
        })
        this.$router.push(`article/${data.data.article.slug}`)
     }
   }
}
</script>

<style lang='scss' scoped>
</style>
