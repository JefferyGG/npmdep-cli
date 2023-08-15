<script setup lang="ts">
import { testJson } from "./api/api";
import { ref } from "vue";

const axiosTest = ref("");
async function getData() {
  const res = await testJson();
  axiosTest.value = res;
}

getData();

</script>

<template>
  <div class="flex">
    <!-- 左侧窄侧边栏 -->
    <div class="w-56 h-screen bg-gray-100">
      <ul class="menu bg-base-200 w-56 rounded-box p-0">
        <li>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            Item 2
          </a>
        </li>
        <li>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Item 1
          </a>
        </li>
        <li>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Item 3
          </a>
        </li>
      </ul>
    </div>

    <!-- 右侧内容区域 -->
    <div class="flex flex-col flex-1">
      <!-- 顶部标题栏 -->
      <div class="bg-gray-200 h-12 flex items-center px-8">
        <h1 class="text-xl font-bold">
          NPMDEPS-CLI
        </h1>  
      </div>
  
      <!-- 主要内容显示区域 -->
      <div class="flex-1 p-0">
        <!-- 主要内容 -->
        <router-view class="h-full"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
