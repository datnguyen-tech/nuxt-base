<template>
  <div>
    <h1>{{ route.params.id }}</h1>
    <NuxtLink to="/about">Back</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute('about-id')
  const { data: productsUseFetch } = await useFetch('https://fakestoreapi.com/products', { key: 'johncena' })
  const { data: test } = await useFetch('https://fakestoreapi.com/products', { key: 'johncena' })
  console.log('🚀 ~ test:', test)
  console.log('🚀 ~ productsUseFetch:', productsUseFetch)
</script>

<style lang="scss"></style>
