import type { Emoji } from '@/types/Emoji'
import { ref, type Component } from 'vue'

const useEmoji = () => {
  const emojis = ref<Emoji[]>([])

  const emojisModules = import.meta.glob('../assets/emojis/*.svg', { eager: true })

  for (const path in emojisModules) {
    const name = path.replace('../assets/emojis/', '').replace('-emoji.svg', '')
    const component = emojisModules[path] as Component
    emojis.value.push({ name, component })
  }

  const findEmoji = (emojiName: string) =>
    emojis.value.find((el) => el.name === emojiName)?.component

  return { emojis, findEmoji }
}

export default useEmoji
