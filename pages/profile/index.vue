<template>
   <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{profile.username}}</h4>
          <p>
            {{profile.bio}}
          </p>
          <nuxt-link :to="{ name: 'settings' }">
               <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-gear-a"></i>
                &nbsp;
                Edit Profile Settings
              </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-md-10 col-md-offset-1">
        <div class="posts-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" @click="articleType = 0">
              <a class="nav-link" 
              :class="{
                active: articleType === 0
              }"
              href="javascript:;">My Posts</a>
            </li>
            <li class="nav-item" @click="articleType = 1">
              <a class="nav-link"
              :class="{
                active: articleType === 1
              }"
               href="javascript:;">Favorited Posts</a>
            </li>
          </ul>
        </div>
        <div v-show="articleType === 0">
          <div class="post-preview" v-for="article in myArticles" :key="article.slug">
            <div class="post-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">
                {{article.author.username}}
                </nuxt-link>
                 <span class="date">{{article.author.createdAt | date('YYYY-MM-DD hh:mm:ss')}}</span>
              </div>
              <!-- <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button> -->
            </div>
            <nuxt-link class="preview-link" :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>
        <div v-show="articleType === 1">
           <div class="post-preview" v-for="article in favoritedArticles" :key="article.slug">
            <div class="post-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">
                {{article.author.username}}
                </nuxt-link>
                 <span class="date">{{article.author.createdAt | date('YYYY-MM-DD hh:mm:ss')}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
import { getUserProfile } from '../../api/user'
import { getArticles } from '../../api/article'
import { mapState } from 'vuex'

async function handleArticles(type, username) {
  const page = 1
  const limit =  5
  let params = {
    limit: limit,
    offset: (page - 1)  * limit,
  }
  if(type === 0) {
    params.author = username
  } else {
    params.favorited = username
  }
  const {data} = await getArticles(params)
  
  // if(type === 0) {
  //   this.myArticles = data.articles
  // } else {
  //   this.favoritedArticles = data.articles
  // }
  return data.articles
}

export default {
  name: 'UserProfile',
  middleware: 'authenticated',
  components: {},
   data() {
	   return {
       articleType: 0
     }
   },
   mounted() {

   },
   async asyncData({params}){     
      const [profileData, myArticles,favoritedArticles ] = await Promise.all([getUserProfile(params.username), handleArticles(0, params.username), handleArticles(1, params.username)])
      const profile = profileData.data.profile
     return {
       profile,
       myArticles,
       favoritedArticles
     }
   },
   methods:{
   }
}
</script>

<style lang='scss' scoped>
</style>
