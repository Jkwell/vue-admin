<template>
  <div class="menu-wrapper">
    <router-link>
      <el-menu-item index="">
        <svg-icon></svg-icon>
        <span></span>
      </el-menu-item>
    </router-link>
    <el-submenu index="">
      <template>
        <svg-icon></svg-icon>
        <span></span>
      </template>
      <template>
        <router-link >
          <el-menu-item index="">
            <svg-icon></svg-icon>
            <span></span>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>