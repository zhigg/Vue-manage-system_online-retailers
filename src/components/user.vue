<template>
  <div class="user">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话"
        width="200">
      </el-table-column>
      <el-table-column
        prop="mg_state"
        label="用户状态"
        width="200">
        <template slot-scope="scope">
         <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" size="mini" plain>分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[2, 4, 6, 8]"
      :total="total"
      @size-change="handleSizeChange"
      :page-size='pageSize'
      @current-change="updateCurrent">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      query: '',
      current: 1,
      pageSize: 2,
      userList: [],
      total: 0,
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    updateCurrent (current) {
      this.current = current
      this.getUserList()
    },
    getUserList () {
      axios({
      method: 'get',
      url:'http://localhost:8888/api/private/v1/users',
      headers: {
        // 设置请求头
        'Authorization': localStorage.getItem('myToken')
      },
      params: {
        query: this.query,
        pagenum: this.current,
        pagesize: this.pageSize
      }
    }).then(res => {
      console.log(res.data)
      const data = res.data.data
      const meta = res.data.meta
      if (meta.status == 200) {
        this.userList = data.users
        // console.log(this.userList)
        this.total = data.total
      }
    })
    },
    handleSizeChange (num) {
      this.pageSize = num
      this.getUserList()
    }
  }
}
</script>

<style>

</style>
