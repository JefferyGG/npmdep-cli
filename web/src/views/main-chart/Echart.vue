<script setup lang="ts">
import {  ref, onMounted, onBeforeUnmount, watch, markRaw, Ref } from "vue";
import { type EChartsType } from "echarts/core";
import echarts, { ECOption } from "./echart";

interface Props {
  option: ECOption;
  theme?: Object | string | null; // 主题

  width: string; // 必须指定容器的宽高，否则无法显示。（容器内图表会自动获取父元素宽高）
  height: string;
  loading?: boolean; // 受控
}

const props = withDefaults(defineProps<Props>(), {
  theme: null,
  loading: false,
});

const chartRef = ref<Ref<HTMLDivElement> | null>(null);
const chartInstance = ref<EChartsType>();


// 绘制
const draw = () => {
  if (chartInstance.value) {
    chartInstance.value.setOption(props.option, { notMerge: true });
  }
};

// 初始化
const init = () => {
  if (!chartRef.value) return;

  // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
  chartInstance.value = echarts.getInstanceByDom(chartRef.value);
  if (!chartInstance.value) {
    chartInstance.value = markRaw(
      echarts.init(
        chartRef.value,
        props.theme,
        { renderer: "canvas" }
      )
  );
          
    draw();
  }
};

// 窗口自适应并开启过渡动画
const resize = () => {
    if (chartInstance.value) {
        chartInstance.value.resize({ animation: { duration: 300 } });
    }
};

// 对父组件暴露获取 ECharts 实例的方法，可直接通过实例调用原生函数
defineExpose({
  getInstance: () => chartInstance.value,
    resize,
    draw,
});

watch(props, () => {
  draw();
});



onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  // 容器被销毁之后，销毁实例，避免内存泄漏
  chartInstance.value?.dispose();
});
</script>

<template>
  <div
    id="echart"
    ref="chartRef"
    :style="{ width: props.width, height: props.height }"
  />
</template>  


