<template>
   <div>
      <!-- 顶部 -->
      <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="" href="index.html"></a> -->
        <nuxt-link class="navbar-brand" to="/">bruce's sky</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link 
              class="nav-link" 
              
              to="/">Home</nuxt-link>
              <!-- exact 精准匹配  -->
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">Settings</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="'/profile/'+ user.username">
                <img class="user-pic" :src="user.image">
                {{user.username}}
              </nuxt-link>
            </li> 
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
          </template>
          
        </ul>
      </div>
    </nav>
	<!-- 子路由 -->
	<nuxt-child />
	<!-- 底部 -->
	<footer>
    <div class="container">
      <a href="/" class="logo-font">bruce's sky</a>
      <span class="attribution">
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
      </span>
    </div>
  </footer>

   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   name: 'LayoutIndex',
  components: {},
   data() {
	   return {}
   },
   computed: {
     ...mapState(['user'])
   }
}
</script>

<style lang='scss' scoped>
</style>
