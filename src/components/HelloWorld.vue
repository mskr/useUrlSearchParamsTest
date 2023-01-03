<script setup lang="ts">
import { ref } from 'vue'
import useA from '../stores/A.ts'

defineProps<{ msg: string }>()

const count = ref('')

setInterval(() => {
  useA().clear()
  useA().test()
  if (Array.from(new URLSearchParams(window.location.search).entries()).length != 2) {
    count.value = Array.from(new URLSearchParams(window.location.search).entries()).join(' ')
  }
}, 200)
</script>

<template>
  <div class="card">
    <button type="button">Error in useURLSearchParams? {{ count ? count : 'no' }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
