<template>
  <section class="form-section">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="待办事项" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="事项类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="1">常规</el-radio>
          <el-radio label="2">紧急</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="提醒方式" prop="way">
        <el-checkbox-group v-model="ruleForm.way">
          <el-checkbox label="短信"></el-checkbox>
          <el-checkbox label="电话"></el-checkbox>
          <el-checkbox label="邮件"></el-checkbox>
          <el-checkbox label="微信"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="提醒时间" required>
        <el-row>
          <el-form-item prop="date">
            <el-time-picker type="fixed-time" placeholder="选择提醒时间" v-model="ruleForm.date" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-row>
      </el-form-item>
      <el-form-item label="重复提醒" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery" @change="changeOnOff"></el-switch>
      </el-form-item>
      <el-form-item label="重复时间" :required="redStar">
        <el-col :span="10">
          <el-form-item prop="starDate">
            <el-date-picker :disabled="forbidden" type="date" placeholder="选择开始日期" :picker-options="pickerOptionsStart" v-model="ruleForm.starDate" @change="starTimeChang"  style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
    export default {
        name: "form",
        data() {
          return {
            ruleForm: {
              name: '',
              type: '',
              way: [],
              date: '',
              period: '',
              starDate: '',
              endDate: '',
              delivery: false,
              other: ''
            }
          }
        }
    }
</script>

<style scoped>
  .form-section {
    padding: 10px;
    width: 500px;
  }
</style>
