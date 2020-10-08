<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear() //清除token
      this.$router.push('/login') //跳转页面
    },
  },
}
</script>

<style>
</style>