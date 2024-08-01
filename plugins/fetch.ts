export default defineNuxtPlugin(() => {
  const userAuth = useCookie('access_token')
  const config = useRuntimeConfig()

  const fetch = $fetch.create({
    baseURL: config.app.baseURL ?? 'https://api.nuxt.com',
    onRequest({ options }) {
      if (userAuth.value) {
        // Add Authorization header
        options.headers = options.headers || {}
        options.headers = options.headers || {}
        ;(options.headers as Record<string, string>)['Authorization'] = `Bearer ${userAuth.value}`
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
