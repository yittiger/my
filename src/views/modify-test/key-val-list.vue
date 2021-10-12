<template>
  <div class="table-origin">
    <div style="width:700px; margin: 10px auto"> 
      <my-detail title="用户信息" >
          <my-detail-item label="名称">http://localhost:8801/#/modify-test/key-val-list/modify-test/key-val-list</my-detail-item>
          <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
          <my-detail-item label="电话">020-88888888</my-detail-item>
          <my-detail-item label="籍贯">广东 广州</my-detail-item>
          <my-detail-item label="备注">无</my-detail-item>
          
      </my-detail>
    </div>

    <div style="width:700px; margin: 10px auto"> 
      <my-detail title="用户信息"  border size="small">
          <my-detail-item label="名称">http://localhost:8801/#/modify-test/key-val-list/modify-test/key-val-list</my-detail-item>
          <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
          <my-detail-item label="电话">020-88888888</my-detail-item>
          <my-detail-item label="籍贯">广东 广州</my-detail-item>
          <my-detail-item label="备注">无</my-detail-item>
          
      </my-detail>
    </div>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
  }
}
</script>