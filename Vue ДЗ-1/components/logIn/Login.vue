<template>
    <div>
        <label>
            Login:
            <input type="text" v-model="log">
        </label> <br>
        <label>
            Password:
            <input type="text" v-model="pass">
        </label><br>
        <button @click="validateLog">Go</button>
    </div>
</template>


<script>
export default {
    name: "Login",
    data() {
        return {
           log : '',
           pass: ""
        }
    },
    methods: {
        validateLog() {
            let logArr = [{log: "password", pass: "p@ssw0rd"}, {log: "11545", pass: "564"}, {log: "nianai", pass: "68547"}]
            for (let i = 0; i < logArr.length; i++) {
                if (this.log===logArr[i].log && this.pass===logArr[i].pass) {
                    return "Welcome"     
                }else{
                alert("invalid pass or log")
            }
                
            }
        }
    },
}
</script>