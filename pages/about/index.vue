<template>
  <div>
    <h1 class="text-red-100">{{ name }}23424</h1>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-if="status === 'success'">Abount {{ a }} {{ data }}</div>
    <button @click="redirect">Click</button>
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { authRepository } from '~/repository/auth'
  import { useMyBaseStore } from '~/stores/base'

  const { $fetch } = useNuxtApp()
  const apiAuth = authRepository($fetch)

  const a = ref(1)
  const { name } = storeToRefs(useMyBaseStore())

  const { data, status } = await useAsyncData(() => apiAuth.get())

  const redirect = () => {
    navigateTo({
      name: 'about-id',
      params: { id: 1 }
    })
  }
</script>

<style lang="scss"></style>
