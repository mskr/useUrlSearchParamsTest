<script setup lang="ts">
import { ref } from 'vue'
import useB from '../stores/B.ts'

defineProps<{ msg: string }>()

const count = ref('')

setInterval(() => {
  useB().clear()
  useB().test()
  if (Array.from(new URLSearchParams(window.location.search).entries()).length != 2) {
    count.value = Array.from(new URLSearchParams(window.location.search).entries()).join('')
  }
}, 200)
</script>

<template>
  <h4>Error in useURLSearchParams? {{ count ? count : 'no' }}</h4>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
