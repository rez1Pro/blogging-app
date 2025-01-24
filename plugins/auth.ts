export default defineNuxtPlugin((nuxtApp) => {
    nextTick(() => {
        const token = localStorage.getItem('token')

        if (token) {
            $fetch(`${nuxtApp.$config.public.apiBase}/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => {
                nuxtApp.provide('auth', {
                    isAuthenticated: true,
                    token: token
                })
            }).catch((error) => {
                localStorage.removeItem('token')
            })
        }
    })
})
