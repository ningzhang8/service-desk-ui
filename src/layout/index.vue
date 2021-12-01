<template>
  <n-layout>
    <navbar />
    <n-layout has-sider>
      <sidebar />
      <n-layout>
        <app-main />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { NLayout } from "naive-ui";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import AppMain from "./components/AppMain.vue";
</script>
