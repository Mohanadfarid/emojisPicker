<script setup lang="ts">
import { ref } from 'vue'
import EmojisSelector from './components/EmojisSelector.vue'
import useEmoji from './composables/useEmojis'
const selecteEmoji = ref()

const { findEmoji } = useEmoji()
</script>

<template>
  <div class="w-full h-dvh flex flex-col justify-center items-center">
    <div v-if="selecteEmoji" class="mb-3">
      <span>selecte emoji :</span>
      <component :is="findEmoji(selecteEmoji)" />
    </div>
    <EmojisSelector v-model="selecteEmoji" />
  </div>
</template>

<style></style>
