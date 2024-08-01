import { defineStore } from 'pinia'

export const useMyBaseStore = defineStore('base', () => {
  const name = ref('DAT')

  return { name }
})
