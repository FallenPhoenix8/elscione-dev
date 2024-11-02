<script setup lang="ts">
import { setPathLength } from "~/utilities/drawSvg"
function toggleMode() {
  useColorMode().value = useColorMode().value === "dark" ? "light" : "dark"
  localStorage.setItem("nuxt-color-mode", useColorMode().value)
}

const pathSun = ref<SVGPathElement | null>(null)
const pathMoon = ref<SVGPathElement | null>(null)

onMounted(async () => {
  await nextTick()
  setPathLength(pathSun.value!)
  setPathLength(pathMoon.value!)
})
</script>
<template>
  <ClientOnly>
    <button @click="toggleMode">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ hidden: useColorMode().value === 'dark' }"
      >
        <path
          ref="pathSun"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
        />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ hidden: useColorMode().value === 'light' }"
      >
        <path
          ref="pathMoon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
        />
      </svg>
    </button>
  </ClientOnly>
</template>
<style scoped lang="postcss">
button {
  @apply flex justify-center items-center mx-2 w-10 h-10 p-1 rounded-radius text-text-secondary;
}

button:hover,
button:focus {
  @apply bg-background-active text-text;
}

button:hover path,
button:focus path {
  animation: draw 1s ease-in-out;
}

button:hover svg,
button:focus svg {
  @apply animate-pulse;
}

button > svg {
  @apply w-full h-full;
}

@keyframes draw {
  from {
    stroke-dashoffset: var(--length);
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
