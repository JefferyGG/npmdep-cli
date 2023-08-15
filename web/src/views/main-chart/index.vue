<script setup lang="ts">
import { onMounted, ref } from "vue";
import Echart from "./Echart.vue";
import type { ECOption } from "./echart";

let nodes = [
        {
          name: "a",
          id: "1",
          symbolSize: 60,
          x: 0,
          y: 60
        },
        {
          name: "b",
          id: "2",
          symbolSize: 40,
          y: 0,
          x: 400
        },
        {
          name: "c",
          id: "3",
          symbolSize: 60,
        },
        {
          name: "d",
          id: "4",
          symbolSize: 60,
        },
        {
          name: "e",
          id: "5",
          symbolSize: 60,
        },
      ];
let links = [
  {
    source: "1",
    target: "2",
    label: {
        show: true
    },
  }
];


const options:ECOption = {
  series: [
    {
      type: "graph",
      layout: "circular",//环形布局，此时x,y无效
      tooltip: {
        show: true
      },
      edgeSymbol: ["circle", "arrow"],
      data: nodes,
      links: links,
    }
  ]
};





// onMounted(async () => {
//     const data = await fetch();
//     options.value = data as ECOption[];
// });
</script>

<template>
  <div class="chart-container">
    <Echart
      width="100%"
      height="100%"
      :option="options"
    />
  </div>
</template>

<style scoped>
.chart-container {
    width: 100%;
    min-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
}
</style>

