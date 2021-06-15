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
        v-if="filteredUser === userStatus.AUTHORIZED"
        :src="imgSrc"
        alt="Smile"
      />
      <span
        v-else-if="filteredUser === userStatus.NOT_AUTHORIZED_IVAN"
        :class="getClass()"
        >Invalid Username</span
      >
      <span v-else :class="getClass()">Invalid Username or Password</span>
    </div>
  </div>
</template>

<script>
import { userStatus } from "./settings.js";
export default {
  name: "LogSmile",
  props: {
    imgSrc: {
      type: String,
      default:
        "https://365psd.com/images/istock/previews/2121/21212345-big-smile-emoticon.jpg",
    },
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
      userStatus,
    };
  },
  methods: {
    user() {
      if (
        this.userDataArr.some(
          (val) => val.log === this.userLogin && val.pass === this.userPassword
        )
      ) {
        this.filteredUser = userStatus.AUTHORIZED;
      } else if (this.userLogin === "Ivan") {
        this.filteredUser = userStatus.NOT_AUTHORIZED_IVAN;
      } else {
        this.filteredUser = userStatus.NOT_AUTHORIZED;
      }
    },
    getClass() {
      if (this.userLogin === "Ivan") {
        return (this.userStatus = "blue");
      } else {
        return (this.userStatus = "red");
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
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
