# MyGoCircleMenu 圆形菜单

::: tip 提示
MyGoCircleMenu 实现了一个圆形菜单，文档[MyGoCircleMenu](/api.html?url=/my-go/doc/module-my-go-circle-menu.html)，相关组件 MyGoHtml 文档[MyGoHtml](/api.html?url=/my-go/doc/module-my-go-html.html)
:::

## 基础用法

MyGoCircleMenu 必须与 MyGoHtml 一同使用, 须在 MyGoHtml 定义 menu-name 参数，该参数名称会在模板方法中通过组件的 htmlInfo 对象提供出来

:::demo

```html
<template>
  <my-go
    :diagram-name="'dig1'"
    :nodes="nodes"
    :links="links"
    :type="model"
    :node-template-map="nodeTemplateMap"
    :link-template="linkTemplate"
    :config="config"
    :layout="layout"
    height="200px"
  >
    <my-go-html
      menu-name="circleMenu"
      :before-show-menu="beforeShowMenu"
      :show-context-menu="showMenu"
    >
      <my-go-circle-menu v-bind="menuOptions" @on-item-click="menuClick">
        <template slot="list-item" slot-scope="{item}">
          <div class="text">
            <my-icon
              v-if="item.icon"
              :name="(item.icon || '')"
              style="font-size: 20px"
              svg
            ></my-icon>
            <div style="margin-top:0;font-size:12px;">{{item.label}}</div>
          </div>
        </template>
      </my-go-circle-menu>
    </my-go-html>
  </my-go>
</template>
<script>
  import '$ui/icons/edit';
  import '$ui/icons/delete';
  export default {
    data() {
      return {
        model: 'GraphLinksModel',
        nodes: [
          { key: 'A', category: 'a' },
          { key: 'B', category: 'b' },
          { key: 'C', category: 'c' },
        ],
        links: [
          { from: 'A', to: 'B' },
          { from: 'A', to: 'C' },
        ],
        menuOptions: {
          menuList: [],
          trigger: 'mouseover',
          innerRadius: 25,
          angleRange: [-90, 270],
          itemWidth: 70,
          activeColor: 'rgba(0, 153, 204, .95)',
          normalColor: 'rgba(0, 114, 172, .95)',
          itemStyle: { color: '#fff' },
          textRotate: true,
          itemGap: 15,
        },
      };
    },
    methods: {
      beforeShowMenu(obj, diagram, tool, menu) {
        console.log(obj, diagram, tool, menu);
        this.menuOptions.menuList = [
          { tag: 'edit', label: '编辑', icon: 'icon-edit' },
          { tag: 'delete', label: '删除', icon: 'icon-delete' },
        ];
        let menuLength = this.menuOptions.menuList.length;
        if (menuLength < 5) {
          this.menuOptions.angleRange = {
            1: [45, 135],
            2: [30, 150],
            3: [0, 180],
            4: [-30, 210],
          }[menuLength];
        } else {
          this.menuOptions.angleRange = [-90, 270];
        }
      },
      showMenu(obj, diagram, tool, menu) {
        console.log(obj, diagram, tool, menu);
        menu.style.display = 'block';
        let el = diagram.div;
        let offset = el.getBoundingClientRect();
        let point = diagram.transformDocToView(obj.actualBounds.center);
        menu.style.left = point.x + offset.left + 'px';
        menu.style.top = point.y + offset.top + 'px';
      },
      menuClick(ev, item) {
        console.log(item);
        this.$message({
          type: 'info',
          message: `点击了:${item.tag}`,
        });
      },
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center,
          'toolManager.hoverDelay': 100,
        };
      },
      layout($, go) {
        return new go.TreeLayout();
      },
      nodeTemplate($, go, color, { htmlInfo: { circleMenu } }) {
        console.log(circleMenu);
        return $(
          go.Node,
          'Auto',
          { background: color, contextMenu: circleMenu },
          $(
            go.TextBlock,
            'Default Text',
            { margin: 12, stroke: '#ffffff' },
            new go.Binding('text', 'key')
          )
        );
      },
      linkTemplate($, go) {
        return $(
          go.Link,
          { routing: go.Link.Orthogonal, corner: 5 },
          $(go.Shape, { strokeWidth: 3, stroke: '#555' })
        );
      },
      nodeTemplateMap($, go, vm) {
        const a = this.nodeTemplate($, go, 'red', vm);
        const b = this.nodeTemplate($, go, 'blue', vm);
        const c = this.nodeTemplate($, go, 'green', vm);
        const map = new go.Map();
        map.add('a', a);
        map.add('b', b);
        map.add('c', c);
        return map;
      },
    },
  };
</script>
```

:::
