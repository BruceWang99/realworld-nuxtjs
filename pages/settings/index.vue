<template>
   <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 col-md-offset-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="onSubmit">
          <fieldset class="form-group">
            <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
<!--             <input type="file" id="file"> -->
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username">
          </fieldset>
          <fieldset class="form-group">
            <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="user.email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            Update Settings
          </button>
        </form>
      </div>

    </div>
  </div>
</div>

</template>

<script>
import { updateUser } from '../../api/user'
import { mapState } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'Settings',
  middleware: 'authenticated',
  components: {},
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState({userInfo: 'user'})
  },
  mounted() {
    this.user = { ...this.userInfo }
  },
  methods: {
    async onSubmit() {
       try{
          const data = await updateUser({
            user: this.user
          }) 
          this.$store.commit('setUser', data.user)
          // 数据持久化
          Cookie.set('user', JSON.stringify(data.user))
          // 保存用户登录状态
          this.$router.go(-1)
       } catch(err) {
         console.dir(err);
        //  this.errors = err.response.data.errors;
       }
       
     }
  }
}
</script>

<style lang='scss' scoped>
</style>
