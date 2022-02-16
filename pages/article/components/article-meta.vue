<template>
   <div class="post-meta">
        <nuxt-link :to="{
			name: 'profile',
			params: {
				username: article.author.username
			}
		}"><img :src="article.author.image" />
		</nuxt-link>
        <div class="info">
			<nuxt-link 
			class="author"
			:to="{
			name: 'profile',
			params: {
				username: article.author.username
			}
		}">
		{{ article.author.username }}
		</nuxt-link>
        <span class="date">{{ article.createdAt | date('YYYY-MM-DD hh:mm:ss') }}</span>
        </div>
        <button 
		  class="btn btn-sm btn-outline-secondary"
		  :class="{
			  active: article.author.following
		  }"
		  >
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow {{ article.author.username }} <span class="counter">({{ article.author.followedBy.length }})</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary"
		 :class="{
			  active: article.favorited
		  }"
		>
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">({{article.favoritesCount}})</span>
        </button>
      </div>
</template>

<script>
export default {
   name: 'ArticleMeta',
  components: {},
   data() {
	   return {}
   },
   props: {
	   article: {
		   type: Object,
		   require: true
	   }
   }
}
</script>

<style lang='scss' scoped>
</style>
