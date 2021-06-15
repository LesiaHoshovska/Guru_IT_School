<template>
  <div>
    <label>
      Login
      <input type="text" v-model="userLogin" />
    </label>
    <br />
    <label>
      Password
      <input type="text" v-model="userPassword" />
    </label>
    <br />

    <button @click="user">Go</button>
    <br />
    <div v-if="filteredUser">
      <img
      v-if="filteredUser===userStatus.AUTHORIZED"
      src="https://365psd.com/images/istock/previews/2121/21212345-big-smile-emoticon.jpg"
      alt="Smile"
    />
    <span v-else-if="filteredUser===userStatus.NOT_AUTHORIZED_IVAN">Invalid Username</span>
    <span v-else>Invalid Username or Password</span>

    </div>
    
  </div>
</template>

<script>
import { userStatus  } from "./settings.js";
export default {
  name: 'LogSmile',
  props: {
    userDataArr: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      userLogin: null,
      userPassword: null,
      filteredUser: null,
      userStatus
    };
  },
  methods: {
    user() {
      if (this.userDataArr
          .some(val => 
            val.log === this.userLogin && val.pass === this.userPassword
      )) {
         this.filteredUser=userStatus.AUTHORIZED
      } else if(this.userLogin==='Ivan') {
          this.filteredUser=userStatus.NOT_AUTHORIZED_IVAN
      }else{
         this.filteredUser=userStatus.NOT_AUTHORIZED
      }
    },
  },
};
</script>

<style lang="css" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
