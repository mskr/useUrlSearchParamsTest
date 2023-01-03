import { defineStore } from 'pinia'
import { useUrlSearchParams } from '@vueuse/core'

const useB = defineStore('b', {
  state: () => ({
    params: useUrlSearchParams()
  }),
  actions: {
    clear() {
      delete this.params.b
    },
    test() {
      this.params.b = 'testB'
    }
  }
})

export default useB