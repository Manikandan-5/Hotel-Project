<template>
    <div class="signupstyle">
    <img  class="img-fluid" src="https://img.freepik.com/free-vector/login-concept
    -illustration_114360-739.jpg" />
    <h4 class="text-primary">Log-in-Page</h4>
   
<div class="input-group mb-3">
  <span class="input-group-text">Email</span>
  <input type="text" v-model="email"class="form-control" >
</div>
<div class="input-group mb-3">
  <span class="input-group-text">Password</span>
  <input type="text"v-model="password" class="form-control" >
</div>
<button class="btn bg-info  p-3"
><a href="/" class="text-red">Login</a></button>&nbsp;&nbsp;
<router-link to="/Signup">Sign-up</router-link>
  </div>
</template>


<script>
export default{
    name:"Login"
}

</script>

