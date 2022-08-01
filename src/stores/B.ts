import { defineStore } from 'pinia'
import { useUrlSearchParams } from '@vueuse/core'

const useB = defineStore('b', {
  state: () => ({
    params: useUrlSearchParams()
  }),
  actions: {
    test() {
      this.params.b = 'test'
    }
  }
})

export default useB