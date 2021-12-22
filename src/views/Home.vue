// Home.vue
<template>
  <div class="home">
    <header class="home-header wrap">
      <router-link tag="i" to="./category"
        ><i class="nbicon nbmenu2"></i>
      </router-link>
      <div class="header-search">
        <span class="app-name">新蜂商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list"
          >山河无恙，人间皆安</router-link
        >
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin"
        >登录</router-link
      >
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>
  </div>
</template>

<script>
import { getLocal } from '@/common/js/utils'
export default {
  name: "Home",
  data() {
    return {
      isLogin: false,
    }
  },
  mounted() {
    const token = getLocal("token")
    if (token) {
      this.isLogin=true
    }
  }
};
</script>
<style lang="less" scoped>
</style>