<template>
  <div>
    <el-divider content-position="left">FormItem</el-divider>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
      </el-col>
      <el-col :span="6">
        <el-input></el-input>
      </el-col>
      <el-col :span="6">
        <Cascader></Cascader>
      </el-col>
      <el-col :span="6">
        <el-color-picker></el-color-picker>
      </el-col>
      <el-col :span="6">
        <el-date-picker
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>

      <el-col :span="6">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-col>

      <el-col :span="6">
        <el-radio-group v-model="radio">
          <el-radio-button label="1">上海</el-radio-button>
          <el-radio-button label="2">北京</el-radio-button>
        </el-radio-group>
      </el-col>

      <el-col :span="6">
        <el-rate
          :value="3"
          show-text>
        </el-rate>
      </el-col>

      <el-col :span="6">
        <el-select placeholder="请选择" value="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-slider
          :value="5"
          :step="10"
          show-stops>
        </el-slider>
      </el-col>

      <el-col :span="6">
        <el-switch
          v-model="value1"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
        <el-switch
          v-model="value2"
          disabled>
        </el-switch>
      </el-col>

      <el-col :span="6">
        <el-time-select
          v-model="value"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
      </el-col>

      <el-col :span="6">
        <el-time-picker
          :picker-options="{

        }"
          placeholder="任意时间点">
        </el-time-picker>
      </el-col>

      <el-col :span="6">
        <el-checkbox v-model="checked">备选项</el-checkbox>
      </el-col>

      <el-col :span="6">
        <el-checkbox-group v-model="radio">
          <el-checkbox-button label="1">上海</el-checkbox-button>
          <el-checkbox-button label="2">北京</el-checkbox-button>
        </el-checkbox-group>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import Cascader from './Cascader'

  export default {
    components: {
      Cascader
    },
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: '',
        value2: '',
        radio: '1',
        checked: true
      };
    }
  }
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 10px;
    min-height: 40px;
  }
</style>
