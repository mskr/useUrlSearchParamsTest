<script setup lang="ts">
import { ref } from 'vue'
import useA from '../stores/A.ts'

defineProps<{ msg: string }>()

const count = ref(0)

setInterval(() => {
  useA().clear()
  useA().test()
  if (Array.from(new URLSearchParams(window.location.search).entries()).length != 2) {
    alert(new Error('Bug found').stack)
  }
}, 200)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
