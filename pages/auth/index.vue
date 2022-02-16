<template>
   <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 col-md-offset-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin ? 'Sign in' : "Sign up"}}
</h1>
        <p class="text-xs-center">
          <a href="#"></a>
          <nuxt-link v-if="isLogin" to="/register" >Need an account?</nuxt-link>
          <nuxt-link v-else to="/login" >Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <template v-for="(messages) in errors">
            <li v-for="(message, index) in messages" :key="index">{{message}}</li>
          </template>
        </ul>

        <form @submit.prevent="onSubmit"> 
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" type="text" v-model="user.username" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="user.email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin ? 'Sign in' : "Sign up"}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login, register } from '../../api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
   name: 'Auth',
   middleware: 'notAuthenticated',
  components: {},
   data() {
	   return {
       user: {
         username: '',
         email: '',
         password: '',
       },
       errors: {}
     }
   },
   computed: {
     isLogin () {
       return this.$route.name === 'login'
     }
   },
   methods: {
     async onSubmit() {
       try{
          const { data } = this.isLogin ? await login({
            user: this.user
          }) : await register({
            user: this.user
          })
          console.log('data', data);
          this.$store.commit('setUser', data.user)
          
          // 数据持久化
          Cookie.set('user', JSON.stringify(data.user))
          // 保存用户登录状态
          this.$router.push('/')
       } catch(err) {
         console.dir(err);
         this.errors = err.response.data.errors;
       }
       
     }
   }
}
</script>

<style lang='scss' scoped>
</style>
