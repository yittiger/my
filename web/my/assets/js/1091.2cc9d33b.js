(window.webpackJsonp=window.webpackJsonp||[]).push([[1091],{2903:function(e,t,i){"use strict";i.r(t);var o=i(452),n=i.n(o);i(0).default.use(n.a);var s={data:function(){return{checked1:!1,checked2:!0}}},r=i(18),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("备选项1")]),e._v(" "),i("el-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("备选项")])],1)}),[],!1,null,null,null);t.default=a.exports},364:function(e,t,i){"use strict";function o(e,t,i){this.$children.forEach((function(n){n.$options.componentName===e?n.$emit.apply(n,[t].concat(i)):o.apply(n,[e,t].concat([i]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,i){for(var o=this.$parent||this.$root,n=o.$options.componentName;o&&(!n||n!==e);)(o=o.$parent)&&(n=o.$options.componentName);o&&o.$emit.apply(o,[t].concat(i))},broadcast:function(e,t,i){o.call(this,e,t,i)}}}},452:function(e,t,i){e.exports=function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=83)}({0:function(e,t,i){"use strict";function o(e,t,i,o,n,s,r,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}i.d(t,"a",(function(){return o}))},4:function(e,t){e.exports=i(364)},83:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"el-checkbox",class:[e.border&&e.checkboxSize?"el-checkbox--"+e.checkboxSize:"",{"is-disabled":e.isDisabled},{"is-bordered":e.border},{"is-checked":e.isChecked}],attrs:{id:e.id}},[i("span",{staticClass:"el-checkbox__input",class:{"is-disabled":e.isDisabled,"is-checked":e.isChecked,"is-indeterminate":e.indeterminate,"is-focus":e.focus},attrs:{tabindex:!!e.indeterminate&&0,role:!!e.indeterminate&&"checkbox","aria-checked":!!e.indeterminate&&"mixed"}},[i("span",{staticClass:"el-checkbox__inner"}),e.trueLabel||e.falseLabel?i("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e._q(e.model,e.trueLabel)},on:{change:[function(t){var i=e.model,o=t.target,n=o.checked?e.trueLabel:e.falseLabel;if(Array.isArray(i)){var s=e._i(i,null);o.checked?s<0&&(e.model=i.concat([null])):s>-1&&(e.model=i.slice(0,s).concat(i.slice(s+1)))}else e.model=n},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,name:e.name},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var i=e.model,o=t.target,n=!!o.checked;if(Array.isArray(i)){var s=e.label,r=e._i(i,s);o.checked?r<0&&(e.model=i.concat([s])):r>-1&&(e.model=i.slice(0,r).concat(i.slice(r+1)))}else e.model=n},e.handleChange],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}})]),e.$slots.default||e.label?i("span",{staticClass:"el-checkbox__label"},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.label))]],2):e._e()])};o._withStripped=!0;var n=i(4),s={name:"ElCheckbox",mixins:[i.n(n).a],inject:{elForm:{default:""},elFormItem:{default:""}},componentName:"ElCheckbox",data:function(){return{selfModel:!1,focus:!1,isLimitExceeded:!1}},computed:{model:{get:function(){return this.isGroup?this.store:void 0!==this.value?this.value:this.selfModel},set:function(e){this.isGroup?(this.isLimitExceeded=!1,void 0!==this._checkboxGroup.min&&e.length<this._checkboxGroup.min&&(this.isLimitExceeded=!0),void 0!==this._checkboxGroup.max&&e.length>this._checkboxGroup.max&&(this.isLimitExceeded=!0),!1===this.isLimitExceeded&&this.dispatch("ElCheckboxGroup","input",[e])):(this.$emit("input",e),this.selfModel=e)}},isChecked:function(){return"[object Boolean]"==={}.toString.call(this.model)?this.model:Array.isArray(this.model)?this.model.indexOf(this.label)>-1:null!==this.model&&void 0!==this.model?this.model===this.trueLabel:void 0},isGroup:function(){for(var e=this.$parent;e;){if("ElCheckboxGroup"===e.$options.componentName)return this._checkboxGroup=e,!0;e=e.$parent}return!1},store:function(){return this._checkboxGroup?this._checkboxGroup.value:this.value},isLimitDisabled:function(){var e=this._checkboxGroup,t=e.max,i=e.min;return!(!t&&!i)&&this.model.length>=t&&!this.isChecked||this.model.length<=i&&this.isChecked},isDisabled:function(){return this.isGroup?this._checkboxGroup.disabled||this.disabled||(this.elForm||{}).disabled||this.isLimitDisabled:this.disabled||(this.elForm||{}).disabled},_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},checkboxSize:function(){var e=this.size||this._elFormItemSize||(this.$ELEMENT||{}).size;return this.isGroup&&this._checkboxGroup.checkboxGroupSize||e}},props:{value:{},label:{},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:String,trueLabel:[String,Number],falseLabel:[String,Number],id:String,controls:String,border:Boolean,size:String},methods:{addToStore:function(){Array.isArray(this.model)&&-1===this.model.indexOf(this.label)?this.model.push(this.label):this.model=this.trueLabel||!0},handleChange:function(e){var t=this;if(!this.isLimitExceeded){var i=void 0;i=e.target.checked?void 0===this.trueLabel||this.trueLabel:void 0!==this.falseLabel&&this.falseLabel,this.$emit("change",i,e),this.$nextTick((function(){t.isGroup&&t.dispatch("ElCheckboxGroup","change",[t._checkboxGroup.value])}))}}},created:function(){this.checked&&this.addToStore()},mounted:function(){this.indeterminate&&this.$el.setAttribute("aria-controls",this.controls)},watch:{value:function(e){this.dispatch("ElFormItem","el.form.change",e)}}},r=i(0),a=Object(r.a)(s,o,[],!1,null,null,null);a.options.__file="packages/checkbox/src/checkbox.vue";var c=a.exports;c.install=function(e){e.component(c.name,c)};t.default=c}})}}]);