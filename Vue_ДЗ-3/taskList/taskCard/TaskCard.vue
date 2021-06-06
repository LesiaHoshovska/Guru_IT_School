<template>
    <div>
        <div class="taskName">
            {{taskName}}
        </div>
        <div class="dataContainer">
            <div>
            <img :src="personImg" alt="UserImg">
        </div>
        <div>
            {{days}}
        </div>
        <div>
            <button><img :src="btn1" alt=""></button>
        </div>
        <div>
            <button><img :src="btn2" alt=""></button>
        </div>

        </div>
        
        

    </div>
</template>

<script>
    export default {
        name: "Taskcard",
        props: {
            taskName: {
                type: String,
                default:"Here is your task"
            },
            personImg:{
                type: String,
                default: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
            },
            days: {
                type: String,
                default: '1 day(s)'
            },
            btn1: {
                type: String,
                default: "http://s1.iconbird.com/ico/0912/ToolbarIcons/w256h2561346685452ArrowRight.png"
            },
            btn2: {
                type: String,
                default: "http://s1.iconbird.com/ico/0912/ToolbarIcons/w256h2561346685452ArrowLeft.png"
            }
        },
    }
</script>

<style lang="css">
.dataContainer{
    display: flex;
}
img{
    height: 50px;
    width: 50px;
}
</style>