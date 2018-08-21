<template>
  <div class="hello">
    <p>Email: <input type="text" v-model="email"/><p/>
    <p>Password: <input type="text" v-model="password"/></p>
    <p>Firstname: <input type="text" v-model="firstname"/></p>
    <p>Lastname: <input type="text" v-model="lastname"/></p>
    <p>Phone: <input type="text" v-model="phoneNumber"/></p>
    <button @click="register">Register</button>
    <button @click="viewUsers">View Users</button>
  </div>
</template>

<script>
import * as RealTimeDatabase from '@/firebase/RealTimeDatabase'

export default {
  name: 'Register',
  data () {
    return {
      email: 'test@test.com',
      password: 'werwer',
      firstname: 'asfdasf',
      lastname: 'asfwaf',
      phoneNumber: '3242224324'
    }
  },
  methods: {
    register () {
      RealTimeDatabase.toggleSignUp(this.email, this.password, this.firstname, this.lastname, this.phoneNumber)
    },
    viewUsers () {
      this.$router.push({name: 'Members'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
