<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import type { WidgetSDK, WidgetProps } from "./types";

const { sdk } = defineProps<{ sdk: WidgetSDK }>();
const props = ref<WidgetProps>(sdk.getProps());
const unsubscribe = sdk.on("propsChanged", (newProps) => { props.value = newProps; });
onUnmounted(unsubscribe);
</script>

<template>
  <section class="vue-widget-section">
    <h3 class="vue-widget-title">{{ props.title }}</h3>
    <p v-if="props.description" class="vue-widget-description">{{ props.description }}</p>
  </section>
</template>
