import { defineStore } from 'pinia'
import { useUrlSearchParams } from '@vueuse/core'

const useA = defineStore('a', {
  state: () => ({
    params: useUrlSearchParams()
  }),
  actions: {
    clear() {
      delete this.params.a
    },
    test() {
      this.params.a = 'testA'
    }
  }
})

export default useA