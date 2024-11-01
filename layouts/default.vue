<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: String(tw`bg-background text-text p-1`),
  },
})
</script>
<template>
  <TopBar />
  <slot />
</template>
