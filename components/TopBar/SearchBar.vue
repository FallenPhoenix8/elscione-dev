<script setup lang="ts">
import { setPathLength } from "~/utilities/drawSvg"

const searchPathElement = ref<SVGPathElement | null>(null)
onMounted(() => {
  setPathLength(searchPathElement.value!)
})

const lightNovelQuery = useState("lightNovelQuery")
</script>
<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search for a light novel..."
      name="search"
      class="search-input"
      v-model="lightNovelQuery"
    />
    <button class="icon w-8 h-8 p-1 text-text-secondary">
      <svg
        class="w-full h-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          ref="searchPathElement"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  </div>
</template>
<style scoped lang="postcss">
.search {
  @apply flex flex-row-reverse flex-1 max-w-md py-1 bg-background-secondary bg-opacity-50 rounded-radius border-text-secondary justify-evenly items-center transition-all duration-150 ease-in;
}

.icon {
  @apply bg-opacity-10 bg-transparent rounded-radius ml-1;
}

.search:has(:focus) .icon {
  @apply text-text;
}

.search-input {
  @apply flex-1 bg-transparent border-none px-2 py-1;
}

.search-input::placeholder {
  @apply text-text-secondary;
}

.search-input:focus {
  @apply border-text text-text;
}

.icon:hover path,
.icon:focus path {
  animation: draw 1s ease-in-out;
}

.icon:hover,
.icon:focus {
  @apply rounded-radius bg-background-active text-text;
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
