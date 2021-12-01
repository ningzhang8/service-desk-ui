<template>
  <n-layout-header bordered>
    <div class="nav-logo">
      <span>Service Desk</span>
    </div>
    <div class="nav-menu">
      <n-menu
        mode="horizontal"
        v-model:value="activeKey"
        @update:value="handleUpdateMenu"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </div>
    <div class="nav-end">
      <!-- <n-button text>主题</n-button>
      <n-button text>语言</n-button> -->
      <n-dropdown :options="options" trigger="hover">
        <n-button text
          ><n-icon size="large"><user-icon /></n-icon
        ></n-button>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>

<script setup>
import { h, ref, computed } from "vue";
import { useStore } from "vuex";
import { NLayoutHeader, NButton, NDropdown, NIcon, NMenu } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";

//使用vuex
const store = useStore();

const activeKey = ref();
console.log(activeKey);
const menuOptions = computed(() => store.state.auth.navBar);

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  {
    label: "个人中心",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];

const handleUpdateMenu = (key, item) => {
  activeKey.value = key;
}

</script>

<style>
.n-layout-header {
  height: 64px;
  display: grid;
  --side-padding: 32px;
  grid-template-columns: calc(239px - var(--side-padding)) 1fr auto;
  align-items: center;
  padding: 0 var(--side-padding);
}
.nav-end {
  display: flex;
  align-items: center;
}
</style>
