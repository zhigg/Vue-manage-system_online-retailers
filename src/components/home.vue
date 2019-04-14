<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="logo"></div>
        <div class="logout">
          欢迎光临
          <a href="javascript:;" @click="logout">退出</a>
        </div>
        <div class="title">
          <h3>电商后台管理系统</h3>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            unique-opened	
            default-active="/user"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/user">
                <i class="el-icon-menu"></i>
                <span slot="title">用户列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">角色列表</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">权限列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span slot="title">商品列表</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span slot="title">分类参数</span>
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品分类</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">订单列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">数据报表</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      // 退出弹出模态框 确认
      this.$confirm('你确定要退出系统吗?','温馨提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('退出成功!')
        localStorage.removeItem('myToken')
        this.$router.push('Login')
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '退出取消了!'
          });          
        });
    }
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  >.el-container {
    height: 100%;
  }
  .el-header {
    background-color: #b3c1cd;
    .logo {
      float: left;
      height: 60px;
      width: 180px;
      background: url(../assets/logo.png) no-repeat center;
      background-size: contain;
    }
    .logout {
      float: right;
      height: 60px;
      line-height: 60px;
      width: 180px;
      font-size: 16px;
      font-weight: 700;
      text-align: right;
      >a {
        color: darkorange;
      }
    }
    .title {
      height: 60px;
      overflow: hidden;
      text-align: center;
      line-height: 60px;
      color: #fff;
      font-size: 24px;
    }
  }
  .el-aside {
    background-color: #545C64;
    .el-menu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #EAEEF1;
  }
}
</style>

