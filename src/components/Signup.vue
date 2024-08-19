<template>
  <div class="signupstyle">
    <img  class="img-fluid" src="../assets/signup.webp" />
    <h4 class="text-primary">Sign Up Page</h4>
    <div class="input-group mb-3">
  <span class="input-group-text">Name</span>
  <input type="text" v-model="name" class="form-control">
</div>
<div class="input-group mb-3">
  <span class="input-group-text">Email</span>
  <input type="text" v-model="email"class="form-control" >
</div>
<div class="input-group mb-3">
  <span class="input-group-text">Password</span>
  <input type="text"v-model="password" class="form-control" >
</div>
<button class="btn bg-info  p-3"
v-on:click="signup"
><a href="/" class="text-red">Sign-up</a></button>&nbsp;&nbsp;
<router-link to="/Login">Login</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data(){
    return {
        name:"",
        email:"",
        password:"",
    }
  },
  methods:{
   async signup()
    {
        console.log("signuip",this.name,this.email,this.password)
        let res=await axios.post("http://localhost:3000/users",{
            name:this.name,
            email:this.email,
            password:this.password,
        })
        console.log(res);
        if(res.status==201)
        {
            localStorage.setItem("user-info",JSON.stringify(res.data))
        }
    }
  },
  mounted()
  {
    let user=localStorage.getItem("user-info");
    if(user)
  {
    this.$router.push({name:"Home"})
  }
  }
}
</script>

