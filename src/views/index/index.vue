<template>
  <section class="chart-container">
    <el-row>
      <div class="show-section top">
        <span>今日系统安全指数：</span>
        <el-rate
          v-model="value5"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}"
        >
        </el-rate>
      </div>
      <div class="show-section">
        <Vcharts></Vcharts>
      </div>
    </el-row>
  </section>
</template>

<script>
    import Vcharts from './echarts'
    export default {
      name: "index",
      components: {Vcharts},
      data() {
          return {
            value5: 4
          }
      }
    }
</script>

<style scoped>
  .chart-container{
    background-color: #F2F2F2;
  }
  .show-section {
    margin: 10px;
    border-radius: 4px;
  }

  .show-section.top {
    background-color: white;
    padding: 10px;
    margin-top: 0;
  }

  .show-section span {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
  }
  .el-rate{
    display:inline;
  }
</style>
