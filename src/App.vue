<template>
  <div>
    <xiaoma-row>
      <xiaoma-button>默认按钮</xiaoma-button>
      <xiaoma-button type="primary">主要按钮</xiaoma-button>
      <xiaoma-button type="success">成功按钮</xiaoma-button>
      <xiaoma-button type="info">信息按钮</xiaoma-button>
      <xiaoma-button type="warning">警告按钮</xiaoma-button>
      <xiaoma-button type="danger">危险按钮</xiaoma-button>
      <xiaoma-button type="primary" icon="el-icon-edit"></xiaoma-button>
      <xiaoma-button type="primary" icon="el-icon-share"></xiaoma-button>
      <xiaoma-button type="primary" icon="el-icon-dxiaomaete"></xiaoma-button>
      <xiaoma-button type="primary" icon="el-icon-search">搜索</xiaoma-button>
      <xiaoma-button type="primary"
        >上传<i class="el-icon-upload xiaoma-icon--right"></i
      ></xiaoma-button>
    </xiaoma-row>
    <xiaoma-date-picker
      v-modxiaoma="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
    >
    </xiaoma-date-picker>
  </div>
</template>
<script>
export default {
  // 注册组件
  name: "App",
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
