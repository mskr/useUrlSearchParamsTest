import { defineStore } from 'pinia'
import { useUrlSearchParams } from '@vueuse/core'

const useA = defineStore('a', {
  state: () => ({
    params: useUrlSearchParams()
  }),
  actions: {
    test() {
      this.params.a = 'test'
    }
  }
})

export default useA