<script setup lang="ts">
import { ref } from 'vue'
import useB from '../stores/B.ts'

defineProps<{ msg: string }>()

const count = ref(0)

setInterval(() => {
  useB().clear()
  useB().test()
  if (Array.from(new URLSearchParams(window.location.search).entries()).length != 2) {
    alert(new Error('Bug found').stack)
  }
}, 200)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
