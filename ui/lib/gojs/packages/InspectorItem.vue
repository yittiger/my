<template>
<div :class="classes">
    <div class="my-go-inspector__add" v-if="keyItems.length">
        <el-popover
            :popper-class="popperClasses"
            placement="right-start"
            title="添加属性"
            width="100"
            trigger="hover"
            >
            <div class="my-go-inspector__add-key">
                <div class="my-go-inspector__add-keyitem" v-for="(item, idx) in keyItems" :key="idx" @click="addKeyItem(item)">
                    {{item.name}}
                </div>
            </div>
        <el-button slot="reference" icon="el-icon-plus" size="mini" circle ></el-button>
        </el-popover>
    </div>
       <div v-for="item in keyArray" :key="item.key" class="my-go-inspector__row">
            <div class="my-go-inspector__title" :style="`width:${item.labelWidth || 60}px;`" v-if="data[item.key] !== undefined">
                {{item.name}}: 
            </div>
            <span  class="my-go-inspector__input" :style="`width: calc(100% - ${(item.labelWidth || 60) + 10}px);`"  v-if="data[item.key] !== undefined">
                <template v-if="['string', 'number'].includes(item.type)">
                    <el-input v-if="item.key === ''" v-model="dataProxy[item.key]" size="mini"
                    @change="dataChange"></el-input>
                    <el-input v-else v-model="dataProxy[item.key]" size="mini" @change="dataChange"></el-input>
                </template>
                <template v-else-if="item.type === 'color'">
                    <el-color-picker v-model="dataProxy[item.key]" @change="dataChange"></el-color-picker>
                </template>
                <template v-else-if="item.type === 'number'">
                    <el-input :precision="2" :step="0.1" v-model="dataProxy[item.key]" @change="dataChange"></el-input>
                </template>
                <template v-else-if="item.type === 'select'">
                    <el-select v-model="dataProxy[item.key]" :popper-class="popperClasses" @change="dataChange" size="mini">
                         <el-option
                            v-for="opt in item.options"
                            :key="opt.value"
                            :label="opt.label"
                            :value="opt.value || opt.label">
                            </el-option>
                    </el-select>
                </template>
                <template v-else-if="item.type === 'boolean'"  >
                    <el-radio-group v-model="dataProxy[item.key]" @change="dataChange">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>
                </template>
                <template v-else-if="item.type === 'array'">
                    <div v-for="(it, idx) in data[item.key]" :key="idx">
                        <el-input v-model="dataProxy[item.key][idx]" size="mini" @change="dataChange"></el-input>
                    </div>
                </template>
                <template v-else-if="item.type === 'objectArray'">
                    <div v-for="(it, idx) in dataProxy[item.key]" :key="idx">
                        <InspectorItem  is-array-item :key-array="item.children" 
                         :index="idx"
                         :item-key="item.key"
                         :data="it"
                        @change="dataChange"></InspectorItem>
                    </div>
                </template>
            </span>
        </div>
</div>
</template>
<script>
import { cloneDeep } from '$ui/utils/util'
const defaultValues = {
    string: '文本',
    color: '#ccc',
    array: [''],
    number: 0,
    objectArray: [{}]
}
export default {
    name: 'InspectorItem',
    inject: ['myDiagram'],
    props: {
        keyArray: {
            type: Array,
            default() {
                return []
            }
        },
        data: {
            type: [Object, Array],
            default() {
                return {}
            }
        },
        isArrayItem: Boolean,
        itemKey: {
            type: String,
            default: ''
        },
        index: {
            type: Number
        }
    },
    data() {
        return {
            dataProxy: cloneDeep(this.data)
        }
    },
    watch: {
        data(val) {
            this.dataProxy = cloneDeep(val)   
        },
        dataProxy(val) {
            this.$emit('update:data', val)
        }
    },
    computed: {
      classes() {
          return ['my-go-inspector__item', {'is-array-item': this.isArrayItem}]
      },
      popperClasses() {
        return `my-go-inspector__popper ${this.myDiagram?.dark ? 'is-dark' : ''}`;
      },
      keyItems() {
        return this.keyArray.filter(r => this.data[r.key] === undefined)
      }
    },
    methods: {
       dataChange(data, key, index) {
           // key值非空，则为数组内对象的改变,通过删除再插入强行改变
           if(key) {
               this.dataProxy[key].splice(index, 1, data)
           }
            this.$emit('change', this.dataProxy, this.itemKey, this.index)
       },
       addKeyItem(item) {
         let defaultValue
         if(item.type === 'select') {
             const keyItem = this.keyArray.find(r => r.key === item.key)
             if(keyItem) {
                 defaultValue = keyItem.options[0].value
             }
         } else {
             defaultValue = cloneDeep(defaultValues[item.type])
         }
         this.$set(this.dataProxy, item.key, defaultValue)
          this.$emit('change', this.dataProxy)
       }
    },
    created() {
    }
}
</script>
<style type="text/scss" lang="scss" scoped>

</style>