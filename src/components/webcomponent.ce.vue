<template>
  <div class="font-sans space-y-4">
    <div>
      I'm touched - <span class="font-bold">{{ count }}</span> and my version is <span class="font-bold">{{ version }}</span>
    </div>

    <button
      @click="onClick"
      class="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Click Me
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const version = ref('touch me first')

function onClick(e: MouseEvent) {
  // get the shadow root of the web component
  const target = e.target as HTMLElement
  const shadowRoot = target.getRootNode() as ShadowRoot
  const shadowRootHost = shadowRoot.host as SGHTMLElement

  // update the click and version
  count.value++
  version.value = shadowRootHost.version
}
</script>

<style scoped>
@import '../assets/css/tailwind.css';
</style>

