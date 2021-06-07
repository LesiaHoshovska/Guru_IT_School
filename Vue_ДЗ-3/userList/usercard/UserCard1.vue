<template>

  <div class="container">
    <div class="usernames-container">
      <div>
      <img :src="userphoto" alt="user" class="userPhoto"/>
      </div>
      <div>
        <p>{{ userName }}</p>
      </div>
    </div>
    <div >
      <button><img :src="editLink" alt="edit" class="editBtn"/></button>
      <button><img :src="deleteLink" alt="delete" class="editBtn" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard1",
  props: {
    userphoto: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
    },
    userName: {
      type: String,
      default: "Unknown user",
    },
    editLink: {
      type: String,
      default: "https://img.icons8.com/cotton/2x/edit.png",
    },
    deleteLink: {
      type: String,
      default: "https://img.icons8.com/cotton/2x/delete-sign--v2.png",
    },
  },
};
</script>

<style>
.container { 
  height: 25px;
  width: 200px;
}
.editBtn {
  height: 20px;
  width: 20px;
}
.userPhoto{
    height: 20px;
  width: 20px;
}
.usernames-container{
    display: inline-block;
}
</style>
