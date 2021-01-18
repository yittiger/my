# Particle 粒子特效

文档 <api-link href="components/my-particle">MyParticle</api-link>

## 基础用法

:::demo
```html
<template>
  <div class="container1">
    <div class="filter">
      <el-form :inline="true" :model="options" class="demo-form-inline">
    <el-form-item label="direction(运动方向):">
        <el-radio-group v-model="options.direction">
          <el-radio label="free"></el-radio>
          <el-radio label="top"></el-radio>
          <el-radio label="right"></el-radio>
          <el-radio label="left"></el-radio>
          <el-radio label="bottom"></el-radio>
          <el-radio label="expand"></el-radio>
          <el-radio label="shrink"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="maxNum(粒子数量):">
       <el-input-number size="mini"  v-model="options.maxNum"  :step="50" :min="50" :max="1000" label="粒子数量"></el-input-number>
       </el-form-item>
     <el-form-item label="initSpeed(新增粒子数/秒):">
         <el-input-number size="mini"  v-model="options.initSpeed"  :step="50" :min="50" :max="500" label="新增粒子数/秒"></el-input-number>
       </el-form-item>
      <el-form-item label="speed(运动速度):">
        <el-input-number size="mini" :precision="2"  v-model="options.speed"  :step="0.05" :min="0.01" :max="5" label="运动速度"></el-input-number>
       </el-form-item>
     <el-form-item label="radius(粒子半径):">
         <el-input-number size="mini" :precision="1"  v-model="options.radius"  :step="0.1" :min="0.2" :max="10" label="粒子半径"></el-input-number>
       </el-form-item>
      <el-form-item label="hole(黑洞大小):" v-if="['expand','shrink'].includes(options.direction)">
         <el-input-number  size="mini" v-model="options.hole"  :step="10" :min="1" :max="250" label="黑洞大小"></el-input-number>
       </el-form-item>
      <el-form-item label="scaleSpeed(粒子缩放速度):" v-if="['expand','shrink'].includes(options.direction)">
          <el-input-number  size="mini" v-model="options.scaleSpeed"  :step="0.005" :min="0.001" :max="5" label="粒子缩放速度"></el-input-number>
       </el-form-item>
       <el-form-item label="rebound(边界反弹):" v-if="!['expand','shrink'].includes(options.direction)">
          <el-switch
          v-model="options.rebound"
          active-text="是"
          inactive-text="否">
        </el-switch>
       </el-form-item>
        <el-form-item label="color(粒子颜色):" >
            <el-color-picker
          v-model="options.color"
          show-alpha
          >
        </el-color-picker>
       </el-form-item>
    </el-form>
    </div>
    <Particle height="400px" width="calc(100% - 350px)" :options="options" class="particle"></Particle>
  </div>
</template>

<script>
export default {
  components: {
    Particle: () => import('$ui/components/my-particle')
  },
  data() {
    return {
      options: {
         maxNum: 200, // 粒子数量
        initSpeed: 50, // 每秒新增的粒子数
        radius: 1.5, // 粒子半径区间, 数字或数组
        speed: 0.5, // 运动速度最大值
        scaleSpeed: 0.001, // expand 或 shrink时有用，粒子放大速度
        direction: 'free', // 运动指向方向
        rebound: false, // 是否反弹
        hole: 50, // 黑洞半径
        color: 'rgba(0,188,212,0.9)'
      }
    }
  }
}
</script>
<style lang="scss" type="text/scss">
.container1{
  width: 100%;
  height: 400px;
  .filter{
    float: left;
    width: 350px;
    height: 100%;
  }
  .particle{
    float: left;
    border: 1px solid #ccc;
  }
  & /deep/ .el-form--inline .el-form-item{
    margin-bottom: 0;
  }
}
</style>
```
:::

## 颜色变换

:::demo
```html
<template>
  <div class="container2">
    <div class="filter">
      <div style="height: 30px;">
        <el-button icon="el-icon-circle-plus" @click="add" type="primary" size="mini">添加颜色</el-button>
      </div>
      <div style="height:calc(100% - 30px);overflow:auto;">
          <el-form :inline="true" :model="options" class="demo-form-inline">
          <el-row v-for="(item, idx) in options.color" :key="idx" class="color-item"> 
              <i class="el-icon-error delete" @click="remove(item)"></i>
              <el-form-item label="transitionTime(变色时间):">
                <el-input-number size="mini"  v-model="item.transitionTime"  :step="1000" :min="1000" :max="6000" label="变色时间"></el-input-number>
              </el-form-item>
              <el-form-item label="duration(持续时间):">
                <el-input-number size="mini"  v-model="item.duration"  :step="1000" :min="1000" :max="10000" label="持续时间"></el-input-number>
              </el-form-item>
                <el-form-item label="color(粒子颜色):" >
                    <el-color-picker  
                  v-model="item.color"
                  show-alpha
                  >
                </el-color-picker>
              </el-form-item>
          </el-row>
        </el-form>
      </div>
    </div>
    <Particle height="400px" width="calc(100% - 400px)" :options="options" class="particle"></Particle>
  </div>
</template>

<script>
export default {
  components: {
    Particle: () => import('$ui/components/my-particle')
  },
  data() {
    return {
      options: {
         maxNum: 200, // 粒子数量
        initSpeed: 50, // 每秒新增的粒子数
        radius: 1.5, // 粒子半径区间, 数字或数组
        speed: 0.2, // 运动速度最大值
        direction: 'free', // 运动指向方向
        color:  [ 
                  {
                      color: 'rgba(255,0,0,1)', // 只支持rgba 颜色格式
                      transitionTime: 500, // 变换时长
                      duration: 3000   // 持续时间
                  },
                  {
                      color: 'rgba(0,255,0,1)',
                      transitionTime: 500,
                      duration: 3000 
                  },
                  {
                      color: 'rgba(251, 255, 0, 1)',
                      transitionTime: 500,
                      duration: 3000 
                  }
                ]
      }
    }
  },
  methods: {
    add() {
      this.options.color.push({
        color: 'rgba(255,0,0,1)',
        transitionTime: 1000, // 变换时长
        duration: 5000   // 持续时间
      })
    },
    remove(item) {
      this.options.color.splice(this.options.color.indexOf(item), 1)
    }
  }
}
</script>
<style lang="scss" type="text/scss">
.container2{
  width: 100%;
  height: 400px;
  .filter{
    float: left;
    width: 400px;
    height: 100%;
  }
  .particle{
    float: left;
    border: 1px solid #ccc;
  }
  & /deep/ .el-form--inline .el-form-item{
    margin-bottom: 0;
  }
  .delete{
    position:absolute;right:10px;top:5px;cursor:pointer;color: red;
  }
  .color-item{
    border:1px solid #ccc;
    margin: 5px;
    padding:0 30px 0 15px;position:relative;
  }
}
</style>
```
:::

## 自定义位置

:::demo
```html
<template>
  <div class="container3">
      <div style="margin-bottom: 5px;">自定义粒子的位置等属性：handleParticle参数传入的方法会在requestAnimationFrame的每一帧执行。根据需要改变粒子对象(item)的属性。
      </div>
      <Particle height="calc(50% - 30px)" width="50%" :options="options" :handle-particle="position1" class="particle">
        <div class="title">三角函数</div>
      </Particle>
      <Particle height="calc(50% - 30px)" width="50%" :options="options" :handle-particle="position2" class="particle">
        <div class="title">幂函数</div>
      </Particle>
      <Particle height="calc(50% - 30px)" width="50%" :options="options" :handle-particle="position3" class="particle">
        <div class="title">心型</div>
      </Particle>
      <Particle height="calc(50% - 30px)" width="50%" :options="options" :handle-particle="position4" class="particle">
        <div class="title">双曲线</div>
      </Particle>
  </div>
</template>

<script>
export default {
  components: {
    Particle: () => import('$ui/components/my-particle')
  },
  data() {
    return {
      options: {
         maxNum: 400, // 粒子数量
        initSpeed: 50, // 每秒新增的粒子数
        radius: 1.5, // 粒子半径区间, 数字或数组
        speed: 0.8, // 运动速度最大值
        direction: 'free', // 运动指向方向
        color: 'rgba(255,0,0,1)'
      }
    }
  },
  methods: {
    /*
      @param item 粒子对象
                   粒子的属性包括， 坐标值x, y
                                   速度 vX, vY
                                   半径 radius
                                   颜色 color
      @param canvas 画布对象
      @param time  requestAnimationFrame 的当前时间戳
    */
    position1(item, canvas, time) {
       // 正弦函数
      if(item.y >= canvas.height / 2 - Math.sin((item.x / (canvas.width / 5)) * Math.PI * 2) * 50) {
          item.y = canvas.height / 2 - Math.sin((item.x / (canvas.width / 5)) * Math.PI * 2) * 50
      } 
      if ((item.x + item.radius >= canvas.width) || (item.x - item.radius <= 0)) { 
          item.x = item.vX < 0 ? (canvas.width - item.radius) : item.radius
      }
      if ((item.y + item.radius >= canvas.height) || (item.y - item.radius <= 0)) { 
          item.y = canvas.height / 2 - Math.sin((item.x / (canvas.width / 5)) * Math.PI * 2) * 50
      }
       item.x += item.vX
        item.y += item.vY
    },
    position2(item, canvas, time) {
         // 幂函数
      if(item.y > canvas.height - 20 - (item.x - canvas.width / 2) * (item.x - canvas.width / 2) / 100) {
          item.x = [1,-1][Math.floor(Math.random() * 2)] * Math.random() * Math.sqrt((canvas.height - 20 - item.y) * 100) + canvas.width / 2
      }
      if ((item.y + item.radius >= canvas.height) || (item.y - item.radius <= 0)) { 
          item.y = item.vY < 0 ? (canvas.height - item.radius) : item.radius
          item.x = Math.random() * canvas.width
      }
       item.x += item.vX
        item.y += item.vY
    },
    position3(item, canvas, time) {
       const centerX = canvas.width / 2
        const centerY = canvas.height / 2
      const xStart = centerX - 100
      const xEnd = centerX + 100
      let rX = item.x, rY = item.y
      if(item.x < xStart || item.x > xEnd) {
        rX = xStart + Math.floor(Math.random() * Math.abs(xEnd - xStart));
        item.x = rX;
      }
      const yStart = centerY + 25 - (Math.pow((rX - centerX) * (rX - centerX) / 10000, 1 / 3) - Math.sqrt(1 - (rX - centerX) * (rX - centerX) / 10000)) * 60;
      const yEnd = centerY + 25 - (Math.pow((rX - centerX) * (rX - centerX) / 10000, 1 / 3) + Math.sqrt(1 - (rX - centerX) * (rX - centerX) / 10000)) * 60;
      if(item.y < Math.min(yStart, yEnd) || item.y > Math.max(yStart, yEnd)) {
        rY = Math.min(yStart, yEnd) + Math.random() * Math.abs(yEnd - yStart);
        item.y = rY;
      }
        item.x += item.vX;
        item.y += item.vY;
    },
    position4(item, canvas, time) {
         // 双曲线
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      if(((item.x - centerX) * (item.x - centerX)) / 16 - (item.y - centerY) * (item.y - centerY) / 9 > 25) {
          item.x = [1, -1][Math.floor(Math.random() * 2)] * Math.sqrt(25 - (item.y - centerY) * (item.y - centerY) / 9) * 16 * Math.random() + centerX
      }
      if ((item.y + item.radius >= canvas.height) || (item.y - item.radius <= 0)) { 
          item.y = item.vY < 0 ? (canvas.height - item.radius) : item.radius
          item.x = Math.random() * canvas.width
      }
       item.x += item.vX
        item.y += item.vY
    }
  }
}
</script>
<style lang="scss" type="text/scss">
.container3{
  width: 100%;
  height: 500px;
  .particle{
    float: left;
    border: 1px solid #ccc;
    position: relative;
  }
  .title{
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 3px 5px;
    width: auto;
    color: #fff;
  }
}
</style>
```
:::

## 自定义形状

:::demo
```html
<template>
  <div class="container4">
      <div style="margin-bottom: 5px;">自定义粒子的形状：使用handleDraw参数传入的方法绘制自定义图形。可配合initParticle方法初始化粒子属性,并在绘制时使用。
      </div>
      <Particle height="calc(50% - 20px)" width="50%" :options="options"
      :handle-draw="draw1"
       class="particle">
        <div class="title">形状</div>
      </Particle>
      <Particle height="calc(50% - 20px)" width="50%" :options="options" :handle-particle="position"
      :handle-draw="draw2"
      :init-particle="initParticle"
       class="particle">
        <div class="title">文字</div>
      </Particle>
      <Particle height="calc(50% - 20px)" width="100%" :options="{speed: 1, maxNum: 50}"
      :handle-draw="draw3"
       class="particle">
        <div class="title">图片</div>
      </Particle>
  </div>
</template>

<script>
export default {
  components: {
    Particle: () => import('$ui/components/my-particle')
  },
  data() {
    return {
      logo: require('$ui/assets/logo.png'),
      options: {
         maxNum: 150, // 粒子数量
        initSpeed: 50, // 每秒新增的粒子数
        radius: 1.5, // 粒子半径区间, 数字或数组
        speed: 2, // 运动速度最大值
        direction: 'bottom', // 运动指向方向
        color: '#7cb305'
      }
    }
  },
  methods: {
    initParticle() {
      // 可覆盖粒子的固有属性或自定义属性
      return {
            text: [0, 1][Math.floor(Math.random() * 2)],
            vX: 0
        }
    },
    position(item, canvas, time) {
       const centerX = canvas.width / 2
        const centerY = canvas.height / 2
      const xStart = centerX - 100
      const xEnd = centerX + 100
      let rX = item.x, rY = item.y
      if(item.x < xStart || item.x > xEnd) {
        rX = xStart + (Math.floor(Math.random() * 5) / 5) * Math.abs(xEnd - xStart);
        item.x = rX;
      }
      const yStart = centerY - (Math.sqrt(10000 - (rX - centerX) * (rX - centerX)));
      const yEnd = centerY + (Math.sqrt(10000 - (rX - centerX) * (rX - centerX)));
      if(item.y < Math.min(yStart, yEnd) || item.y > Math.max(yStart, yEnd)) {
        rY = Math.min(yStart, yEnd) + Math.random() * Math.abs(yEnd - yStart);
        item.y = rY;
      }
        item.x += item.vX;
        item.y += item.vY;
    },
    draw1(cxt, item, time) {
         cxt.beginPath();
        cxt.fillStyle = item.color;
        cxt.moveTo(item.x, item.y)
        cxt.lineTo(item.x + item.radius * 5, item.y)
        cxt.lineTo(item.x + item.radius * 2.5, item.y + item.radius * 5)
        cxt.closePath()
        cxt.fill();
    },
    draw2(cxt, item, time) {
       cxt.beginPath();
        cxt.fillStyle = item.color;
        // item.text 即是在初始化粒子时定义的
        cxt.fillText(item.text, item.x, item.y)
        cxt.fill();
    },
    draw3(cxt, item, time) {
      let img = new Image()
      img.src = this.logo
      cxt.drawImage(img, item.x, item.y, item.radius * 10, item.radius * 10);
    }
  }
}
</script>
<style lang="scss" type="text/scss">
.container4{
  width: 100%;
  height: 500px;
  .particle{
    float: left;
    border: 1px solid #ccc;
    position: relative;
  }
  .title{
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 3px 5px;
    width: auto;
    color: #fff;
  }
}
</style>
```
:::