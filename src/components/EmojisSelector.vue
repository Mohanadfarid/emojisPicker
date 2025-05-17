<script setup lang="ts">
import useEmoji from '@/composables/useEmojis'

const selectedEmoji = defineModel<string>()
const { emojis } = useEmoji()

const resolveEmojiClasses = (emojiName: string) =>
  emojiName === selectedEmoji.value ? 'active-emoji h-[37.5px] w-[37.5px] ' : ''
</script>

<template>

  <div class="flex items-center border p-2  rounded-full">
    <div
      v-for="emoji in emojis"
      :key="emoji.name"
      class="cursor-pointer me-1 last:me-0 rounded-full "
    >
      <component
        class="w-[25px] h-[25px] hover:h-[37.5px] hover:w-[37.5px] transition-all "
        :class="resolveEmojiClasses(emoji.name)"
        @click="selectedEmoji = emoji.name"
        :is="emoji.component"
      />
    </div>
  </div>
</template>

<style>
.active-emoji path{
  fill: green !important;
}
</style>
