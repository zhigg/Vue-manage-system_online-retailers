<template>
  <div class="login">
    <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px" status-icon>
      <img src="../assets/MM.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 导入axios
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
            { required: true, message: '请输入用户名!', trigger: 'change' },
            { min: 3, max: 6, message: '用户名长度在 3 到 6 个字符', trigger: 'change' }
          ],
        password: [
            { required: true, message: '请输入密码!', trigger: 'change' },
            { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate( valid => {
        if (valid) {
          // 校验成功 发送ajax请求
          axios({
            method: 'post',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.form
          }).then( res => {
            // console.log(res.data)
            if (res.data.meta.status == 200) {
              this.$message.success('登录成功!')
              this.$router.push({path:'/home'})
            } else {
              this.$message.error('用户名或密码错误!')
            }
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d424b;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 200px auto;
    background-color: #fff;
    padding: 75px 40px 15px 40px;
    border-radius: 20px;
    position: relative;
    >img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: -105px;
      border: 9px solid #fff;
      transform: translateX(-50%)
    }
    .el-button + .el-button {
      margin-left: 80px;
    }
  }
}
</style>
