<template>
  <n-layout-content>
    <n-tabs
      v-model:value="nameRef"
      type="card"
      size="small"
      closable
      @close="handleClose"
    >
      <n-tab-pane
        v-for="panel in panelsRef"
        :key="panel"
        :tab="panel.toString()"
        :name="panel"
        @contextmenu="handleContextMenu"
      >
        {{ panel }}
        <n-dropdown
          placement="bottom-start"
          @select="handleSelect"
          trigger="manual"
          :x="x"
          :y="y"
          :options="options"
          :show="showDropdown"
          :on-clickoutside="onClickoutside"
        />
      </n-tab-pane>
    </n-tabs>
  </n-layout-content>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { NLayoutContent, NTabs, NTabPane, NDropdown } from "naive-ui";

const options = [
  {
    label: "关闭其他",
    key: "closeOther",
  },
  {
    label: "全部关闭",
    key: "closeAll",
  },
];

const nameRef = ref("首页");
const panelsRef = ref(["首页", "用户管理", "权限管理"]);
const showDropdown = ref(false);
const x = ref(0);
const y = ref(0);

const handleSelect = () => {
  showDropdown.value = false;
};

const handleClose = (name) => {
  const { value: panels } = panelsRef;
  const index = panels.findIndex((v) => name === v);
  panels.splice(index, 1);
  if (nameRef.value === name) {
    nameRef.value = panels[Math.min(index, panels.length - 1)];
  }
};

const handleContextMenu = (e) => {
  e.preventDefault();
  showDropdown.value = false;
  nextTick().then(() => {
    showDropdown.value = true;
    x.value = e.clientX;
    y.value = e.clientY;
  });
};

const onClickoutside = (e) => {
  showDropdown.value = false;
};
</script>

<style>
.n-tabs-tab-wrapper:nth-child(2) i {
  display: none;
}
</style>
