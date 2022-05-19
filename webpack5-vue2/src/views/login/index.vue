loginPage.vue :
<template>
  <div class="login">
    <div class="login-form">
      <h1>用户登录</h1>
      <p>
        <label>用户名：</label>
        <input>
      </p>
      <p>
        <label>密码：</label>
        <input>
      </p>
      <button @click="login">登录</button>
      <img :src="bgUrl" class="bg-img" width="100"/>
    </div>
  </div>
</template>

<script>
import bg from "@/assets/imgs/bg.png";
export default {
  name: "Login",
  data() {
    return {
      bgUrl: bg
    }
  },
  methods: {
    login() {
      this.$router.push({
        name: "Index"
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;

  .bg-img {
    height: 100%;
    width: 100%;
  }

  .login-form {
    position: absolute;
    top: 25%;
    left: 35%;
    width: 400px;
    height: 250px;
    border: 1px solid #ffffff;
    opacity: 1;
    background: #ffffff;
    border-radius: 10px;
  }
}
</style>