export default defineNuxtRouteMiddleware((to, from) => {
    if (to.query.redirect) {
        return navigateTo(to.query.redirect as string)
    }

    return
})
