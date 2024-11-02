<script setup>
watch(
  () => useState("lightNovelQuery"),
  () => {
    console.log(useState("lightNovelQuery").value)
  }
)
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
