<template>
  <div id="app">
    <user-list
      v-for="items in itemsList"
      :key="items.id"
      :tittle="items.tittle"
      :usercardList="items.itemsList"
    />
  </div>
</template>

<script>
import UserList from "./components/userList/UserList.vue";


export default {
  name: "App",
  components: {
    UserList,
  },
  data() {
    return {
      itemsList: [
        {
          id: 1,
          tittle: "List 1",
          itemsList: [
            {
              id: 1,
              userphoto:
                "https://image.flaticon.com/icons/png/512/1509/1509606.png",
              userName: "Joanna Vue",
            },
            {
              id: 2,
              userphoto:
                "https://threewill.com/wp-content/uploads/kirk-liemohn-full-cropped.jpg",
              userName: "Don Black",
            },
            {
              id: 3,
              userphoto:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nr9pGY3TnYIKa2ypx75EB9lPL70WJAJpvw&usqp=CAU",
              userName: "David John",
            },
            {
              id: 4,
              userphoto: "http://smvportal.in/img/student.png",
              userName: "student",
            },
            {
              id: 5,
              userphoto:
                "https://image.flaticon.com/icons/png/512/354/354637.png",
              userName: "Dina Dove",
            },
          ],
        },
        {
          id: 2,
          tittle: "List 2",
          itemsList: [
            {
              id: 1,
              userphoto:
                "https://image.flaticon.com/icons/png/512/1509/1509606.png",
              userName: "Joanna Vue",
            },
            {
              id: 2,
              userphoto:
                "https://threewill.com/wp-content/uploads/kirk-liemohn-full-cropped.jpg",
              userName: "Don Black",
            },
            {
              id: 3,
              userphoto:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nr9pGY3TnYIKa2ypx75EB9lPL70WJAJpvw&usqp=CAU",
              userName: "David John",
            },
            {
              id: 4,
              userphoto: "http://smvportal.in/img/student.png",
              userName: "student",
            },
            {
              id: 5,
              userphoto:
                "https://image.flaticon.com/icons/png/512/354/354637.png",
              userName: "Dina Dove",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
