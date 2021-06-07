<template>
  <div>
      <div>
          <h1>{{tittle}}</h1>
      </div>
      
      <user-card-1 v-for="card in usercardList" :key="card.id" 
      :userphoto="card.userphoto"
      :userName="card.userName"
      :editLink="card.editlink"
      :deleteLink="card.deleteLink"
      />
  </div>
</template>

<script>

import UserCard1 from '../usercard/UserCard1.vue';

export default {
    name: "UserList",
    components: {
        UserCard1
              
    },

    props:{
        tittle: {
            type: String,
            default: "List"
        },
        usercardList: {
            type: Array,
            default: ()=>[]
        }


    }

    

}
</script>

<style>

</style>