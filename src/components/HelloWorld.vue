<template>
  <div class="hello">
    <el-row>
      <el-col :span="6">
        <div class="input-suffix">
          分析领域：<el-input class="common-input" v-model="anaDomain" :disabled="true"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="input-suffix">
          分析主题：<el-input class="common-input" v-model="anaTheme"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="input-suffix">
          指标编码：<el-input class="common-input" v-model="indexId" :disabled="true"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="input-suffix">
          指标名称：<el-input class="common-input" v-model="indexName"></el-input>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {getTestData} from '../api/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      anaDomain: '',
      anaTheme: '',
      indexId: '',
      indexName: ''
    }
  },
  mounted () {
    this.getInitData()
  },
  methods: {
    getInitData () {
      getTestData().then((data) => {
        console.log(data)
        this.anaDomain = data.province
        this.anaTheme = data.email
        this.indexId = data.username
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-suffix {
  display: block;
}
.common-input {
  width: 200px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
