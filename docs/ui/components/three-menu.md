# ThreeMenu 3D菜单

用于3D效果的菜单导航或少量数据展示。 文档 <api-link href="components/my-three-menu">MyThreeMenu</api-link>


## 基础用法

:::demo
```html
<template>
    <div class="three-con1">
        <my-three-menu :list="list" height="500px">
        <div slot="item" slot-scope="{ item }"
        class="panel"
        @click="itemClick(item)"
        >
        <div class="img">
            <el-image :src="item.image"></el-image>
        </div>
        <div class="content">
            <a>{{item.name}}</a>
            <a>{{item.desc}}</a>
        </div>
        </div>
        </my-three-menu>
    </div>
</template>
<script>
import { sources } from '$ui/gojs/sources/index'
let list = []
for(let i = 0; i < sources.length; i++) {
  list.push(
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    })
    )
}
list = list.slice(0, 50)
export default {
  components: {
  },
  props: {},
  data() {
    return {
      list
    }
  },
  computed: {},
  methods: {
    itemClick(item) {
      this.$message({
        type: 'success',
        message: item.name
      })
    }
  },
  mounted() {}
}
</script>
<style type="text/scss" lang="scss">
.three-con1{
  width: 100%;
  height: 500px;
   background-image: url('~$ui/assets/bg/05.jpg');
  background-size: cover;
a {
  color: #8ff;
}


.panel{
  width: 200px;
  height: 150px;
  display: flex;
  background-color: rgba(0, 141, 192, 0.8);
  border: 3px solid rgba(24, 89, 236, 1);
  border-radius: 8px;
  flex-flow: row nowrap;
  padding: 10px;
  .img{
    width: 100px;
    height: 120px;
  }
  .content{
    flex: 1;
    padding: 20px 0;
  }
}
}
</style>
```
:::

## 自动播放

:::demo
```html
<template>
    <div class="three-con2">
          <div style="margin-bottom: 5px;">如果把它当成相册，开启play参数可以自动变换布局。
      </div>
        <my-three-menu 
        class="menu2"
        :item-width="84"
        :item-height="84"
        :item-space="20"
        :show-tab="false"
        play
        :list="list"  height="calc(500px - 50px)">
        <div slot="item" slot-scope="{ item }"
        class="panel"
        @click="itemClick(item)"
        >
        <div class="img">
            <el-image :src="item.image"></el-image>
        </div>
        </div>
        </my-three-menu>
    </div>
</template>
<script>
import { sources } from '$ui/gojs/sources/index'
let list = []
for(let i = 0; i < sources.length; i++) {
  list.push(
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r}
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    })
    )
}
list = list.slice(0, 50)
export default {
  components: {
  },
  props: {},
  data() {
    return {
      list
    }
  },
  computed: {},
  methods: {
    itemClick(item) {
      this.$message({
        type: 'success',
        message: item.name
      })
    }
  },
  mounted() {}
}
</script>
<style type="text/scss" lang="scss">
.three-con2{
  width: 100%;
  height: 500px;
 .menu2{
  background-image: url('~$ui/assets/bg/05.jpg');
  background-size: cover;
}
.panel{
  width: 84px;
  height: 84px;
  display: block;
  background-color: rgba(0, 141, 192, 0.8);
  border: 3px solid rgba(24, 89, 236, 1);
  border-radius: 8px;
  &:hover{
    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
    border: 1px solid rgba(127, 255, 255, 0.75);
  }
  .img{
    width: 80px;
    height: 80px;
  }
}
}
</style>
```
:::

## 其它参数控制

:::demo
```html
<template>
    <div class="three-con3">
          <div style="margin-bottom: 5px;"> 组件会根据传入的list长度决定布局的位置。然而，如果你想更精确控制，options参数提供了一些配置项来实现。
      </div>
       <div class="filter">
    <el-form :inline="true" :model="options" class="demo-form-inline">
            <el-form-item label="defaultLayout(默认布局):">
                <el-radio-group v-model="defaultLayout">
                <el-radio label="table"></el-radio>
                <el-radio label="sphere"></el-radio>
                <el-radio label="helix"></el-radio>
                <el-radio label="grid"></el-radio>
            </el-radio-group>
            </el-form-item>

            <div class="con"> 
                <div class="title">options</div>
                    <div class="con1"> 
                        <div class="title">camera</div>
                        <div class="keys">
                            <el-form-item label="camera.deep(默认深度):">
                                <el-input-number size="mini"  v-model="options.camera.deep"  :step="500" :min="0" :max="6000" label="深度"></el-input-number>
                              </el-form-item>
                            <el-form-item label="camera.minDistance(最近):">
                                <el-input-number size="mini"  v-model="options.camera.minDistance"  :step="100" :min="0" :max="6000" label="最近"></el-input-number>
                              </el-form-item>
                            <el-form-item label="camera.maxDistance(最远):">
                                <el-input-number size="mini"  v-model="options.camera.maxDistance"  :step="100" :min="0" :max="10000" label="最远"></el-input-number>
                              </el-form-item>
                            <el-form-item label="camera.minZoom(最小缩放):">
                                <el-input-number size="mini"  v-model="options.camera.minZoom"  :step="0.5" :min="0.5" :max="100" label="最小缩放"></el-input-number>
                              </el-form-item>
                            <el-form-item label="camera.maxZoom(最大缩放):">
                                <el-input-number size="mini"  v-model="options.camera.maxZoom"  :step="0.5" :min="0.5" :max="100" label="最大缩放"></el-input-number>
                              </el-form-item>
                            <el-form-item label="camera.minPolarAngle(垂直最小旋转):">
                                 <el-input-number size="mini"  v-model="options.camera.minPolarAngle"  :step="0.01"  label="垂直最小旋转"></el-input-number>
                             </el-form-item>
                            <el-form-item label="camera.maxPolarAngle(垂直最大旋转):">
                                 <el-input-number size="mini"  v-model="options.camera.maxPolarAngle"  :step="0.01"  label="垂直最大旋转"></el-input-number>
                             </el-form-item>
                              <el-form-item label="camera.minAzimuthAngle(水平最小旋转):">
                                 <el-input-number size="mini"  v-model="options.camera.minAzimuthAngle"  :step="0.01"  label="水平最小旋转"></el-input-number>
                             </el-form-item>
                            <el-form-item label="camera.maxAzimuthAngle(水平最大旋转):">
                                 <el-input-number size="mini"  v-model="options.camera.maxAzimuthAngle"  :step="0.01" label="水平最大旋转"></el-input-number>
                             </el-form-item>
                              <el-form-item label="camera.enableZoom(是否可缩放):">
                                <el-switch
                                v-model="options.camera.enableZoom"
                                active-text="是"
                                inactive-text="否">
                                </el-switch>
                             </el-form-item>
                              <el-form-item label="camera.enableRotate(是否可旋转):">
                                <el-switch
                                v-model="options.camera.enableRotate"
                                active-text="是"
                                inactive-text="否">
                                </el-switch>
                             </el-form-item>
                              <el-form-item label="camera.enablePan(是否鼠标右键可拖动):">
                                <el-switch
                                v-model="options.camera.enablePan"
                                active-text="是"
                                inactive-text="否">
                                </el-switch>
                             </el-form-item>
                        </div>
                    </div>

                     <div class="con1"> 
                        <div class="title">table</div>
                         <div class="keys">
                           <el-form-item label="table.x(x偏移):">
                                <el-input-number size="mini"  v-model="options.table.x"  :step="50" :min="0" :max="500" label="x偏移"></el-input-number>
                              </el-form-item>
                           <el-form-item label="table.y(y偏移):">
                                <el-input-number size="mini"  v-model="options.table.y"  :step="50" :min="0" :max="500" label="y偏移"></el-input-number>
                              </el-form-item>
                           <el-form-item label="table.column(列数):">
                                <el-input-number size="mini"  v-model="options.table.column"  :step="1" :min="0" :max="100" label="列数"></el-input-number>
                              </el-form-item>
                              </div>
                     </div>
                     <div class="con1"> 
                        <div class="title">sphere</div>
                         <div class="keys">
                          <el-form-item label="sphere.radius(半径):">
                                <el-input-number size="mini"  v-model="options.sphere.radius"  :step="20" :min="20" :max="1000" label="半径"></el-input-number>
                              </el-form-item>
                                  <el-form-item label="sphere.x(x偏移):">
                                <el-input-number size="mini"  v-model="options.sphere.x"  :step="50" :min="0" :max="500" label="x左边偏移"></el-input-number>
                              </el-form-item>
                           <el-form-item label="sphere.y(y偏移):">
                                <el-input-number size="mini"  v-model="options.sphere.y"  :step="50" :min="0" :max="500" label="y偏移"></el-input-number>
                              </el-form-item>
                              </div>
                     </div>
                     <div class="con1"> 
                        <div class="title">helix</div>
                         <div class="keys">
                             <el-form-item label="helix.x(x偏移):">
                                <el-input-number size="mini"  v-model="options.helix.x"  :step="50" :min="-500" :max="500" label="x偏移"></el-input-number>
                                </el-form-item>
                             <el-form-item label="helix.y(y偏移):">
                                <el-input-number size="mini"  v-model="options.helix.y"  :step="50" :min="-500" :max="500" label="y偏移"></el-input-number>
                              </el-form-item>
                                 <el-form-item label="helix.radius(半径):">
                                <el-input-number size="mini"  v-model="options.helix.radius"  :step="20" :min="20" :max="1000" label="半径"></el-input-number>
                              </el-form-item>
                                <el-form-item label="helix.dy(卡片高度差):">
                                <el-input-number size="mini"  v-model="options.helix.dy"  :step="50" :min="0" :max="500" label="卡片高度差"></el-input-number>
                              </el-form-item>
                              </div>
                     </div>
                     <div class="con1"> 
                        <div class="title">grid</div>
                         <div class="keys">
                             <el-form-item label="grid.x(x偏移):">
                                <el-input-number size="mini"  v-model="options.grid.x"  :step="50" :min="0" :max="500" label="x左边偏移"></el-input-number>
                              </el-form-item>
                           <el-form-item label="grid.y(y偏移):">
                                <el-input-number size="mini"  v-model="options.grid.y"  :step="50" :min="0" :max="500" label="y偏移"></el-input-number>
                              </el-form-item>
                           <el-form-item label="grid.row(行):">
                                <el-input-number size="mini"  v-model="options.grid.row"  :step="1" :min="1" :max="100" label="行"></el-input-number>
                              </el-form-item>
                           <el-form-item label="grid.column(列):">
                                <el-input-number size="mini"  v-model="options.grid.column"  :step="1" :min="1" :max="100" label="列"></el-input-number>
                              </el-form-item>
                           <el-form-item label="grid.layerSpace(层距):">
                                <el-input-number size="mini"  v-model="options.grid.layerSpace"  :step="50" :min="50" :max="1000" label="层距"></el-input-number>
                              </el-form-item>
                              </div>
                     </div>
            </div>
       </el-form>
           </div>
        <my-three-menu
        v-if="show"
        :default-layout="defaultLayout"
        class="menu3"
        :item-width="84"
        :item-height="84"
        :item-space="20"
        :options="options"
        :list="list"  width="calc(100% - 550px)" height="calc(600px - 50px)">
        <div slot="item" slot-scope="{ item }"
        class="panel"
        @click="itemClick(item)"
        >
        <div class="img">
            <el-image :src="item.image"></el-image>
        </div>
        </div>
        </my-three-menu>
    </div>
</template>
<script>
import { sources } from '$ui/gojs/sources/index'
let list = []
for(let i = 0; i < sources.length; i++) {
  list.push(
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r}
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    }),
    ...sources[i].source.map(r => { 
      return { image: require('$ui/gojs/sources/' + r), name: r }
    })
    )
}
list = list.slice(0, 50)
export default {
  components: {
  },
  props: {},
  data() {
    return {
      list,
      show: true,
      defaultLayout: 'grid',
      options: {
        camera: {
          deep: 1000,
          minDistance: 1000,
        maxDistance: 2000,
        minZoom: 0.5,
        maxZoom: 3,
        minPolarAngle: 60,
        maxPolarAngle: 120,
        minAzimuthAngle: -180,
        maxAzimuthAngle: 180,
        enableZoom: true,
        enableRotate: true,
        enablePan: true
        },
        table: {
          x: 0,
          y: 0,
          column: 10
        },
        sphere: {
            x: 0,
            y: 0,
          radius: 300
        },
        helix: {
          x: 0,
          y: 0, // 圆柱的y坐标偏移
          radius: 300, // 圆柱的半径
          dy: 6 // 卡片的高度差
        },
        grid: {
          row: 3,
          column: 3,
          deep: 0,
          layerSpace: 200,
          x: 0,
          y: 0
        }
      }
    }
  },
  computed: {},
  watch: {
      defaultLayout: {
          handler(val) {
              this.reset()
          }
      },
      options: {
          deep: true,
          handler(val) {
              this.reset()
          }
      }
  },
  methods: {
      reset() {
          this.show = false
              this.$nextTick(() => {
                  this.show = true
              })
      },
    itemClick(item) {
      this.$message({
        type: 'success',
        message: item.name
      })
    }
  },
  mounted() {}
}
</script>
<style type="text/scss" lang="scss">
.three-con3{
  width: 100%;
  height: 600px;
    .filter{
    float: left;
    width: 550px;
    height: calc(100% - 50px);
    overflow-y: auto;
  }
 .menu3{
     float: left;
  background-image: url('~$ui/assets/bg/05.jpg');
  background-size: cover;
}
.con{
    border: 1px solid #888;
    padding: 5px;
    &:after{
        content: "";
        display: block;
        clear: both;
    }
    .title{
        font-weight: bold;
    }
    
}
.con1{
    border: 1px solid #888;
    padding: 5px;
      &:after{
        content: "";
        display: block;
        clear: both;
    }
    .title{
        font-weight: bold;
        width: 60px;
        float: left;
    }
    .keys{
        float: left;
        width: calc(100% - 60px);
    }
    
}
  & /deep/ .el-form--inline .el-form-item{
    margin-bottom: 0;
  }
.panel{
  width: 84px;
  height: 84px;
  display: block;
  background-color: rgba(0, 141, 192, 0.8);
  border: 3px solid rgba(24, 89, 236, 1);
  border-radius: 8px;
  &:hover{
    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
    border: 1px solid rgba(127, 255, 255, 0.75);
  }
  .img{
    width: 80px;
    height: 80px;
  }
}
}
</style>
```
:::
