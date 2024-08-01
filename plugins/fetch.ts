export default defineNuxtPlugin(() => {
  const accessToken = useCookie('access_token')
  const config = useRuntimeConfig()

  const fetch = $fetch.create({
    baseURL: config.app.baseURL ?? 'https://api.nuxt.com',
    onRequest({ options }) {
      if (accessToken.value) {
        options.headers = { ...options.headers, Authorization: `Bearer ${accessToken.value}` }
      }
    },
    onResponse() {
      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo('/login')
      }
    }
  })
  // Expose to useNuxtApp().fetch
  return {
    provide: {
      fetch
    }
  }
})
