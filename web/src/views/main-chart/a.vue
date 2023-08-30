<script setup lang="ts">
  import { getFiles, nodesJson } from "../../api/api";
  import { onMounted, ref } from "vue";

const path = ref([]);
const node = ref([]);
onMounted(async () => {
      try {
        const filesData = await getFiles();
        const nodeData = await nodesJson();
        path.value = filesData;
        node.value = nodeData;
        }catch (err){
      console.log(err);
      
    }
   });

 
  
  
</script>

<template>
  <!-- 展示项目总的包数量 -->
  <div class="top">
    <div class="stats shadow">
      <div class="stat place-items-center">
        <div class="stat-title">
          所有package.json数量
        </div>
        <div class="stat-value">
          {{ path.length }}
        </div>
        <div class="stat-desc">
          -
        </div>
      </div>
  
      <div class="stat place-items-center">
        <div class="stat-title">
          -
        </div>
        <div class="stat-value text-secondary">
          -
        </div>
        <div class="stat-desc text-secondary">
          -
        </div>
      </div>
  
      <div class="stat place-items-center">
        <div class="stat-title">
          -
        </div>
        <div class="stat-value">
          -
        </div>
        <div class="stat-desc">
          -
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top{
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center; 
}
</style>
