<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" ref="loginForm" label-position="left">
      <div class="title-container">
        <h3 class="title">中文</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <icon class="user-icon" name="user"></icon>
        </span>
        <el-input name="username" type="text" autoComplete="on" placeholder="随便说点"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon class="password-icon" name="password"></icon>
        </span>
        <el-input name="password" type="text" autocomplete="on" placeholder="密码"></el-input>
        <span class="show-pwd">
          <icon class="eye-icon" name="eye"></icon>
        </span>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;">登陆</el-button>
      <div class="tips">
        <span>admin: admin</span>
        <span>password: pass</span>
      </div>
      <div class="tips">
        <span style="margin-right:18px;">jayz: editor</span>
        <span>pass: pass</span>
      </div>
      <el-button class="thirdparty-button" type="primary">第三方登陆</el-button>
    </el-form>
  </div>
</template>

<script>
// import {isValidUsername} from '@/utils/validate'
// import langSelect from '@/base/LangSelect/langSelect'
export default {
}
</script>

<style scoped>

</style>
