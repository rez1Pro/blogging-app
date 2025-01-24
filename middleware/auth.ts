export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $auth } = useNuxtApp() as any


    if (process.client) {
        if (!$auth?.isAuthenticated || localStorage.getItem('token') == null) {
            return navigateTo({
                name: 'login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
    // On server-side, allow the initial render to proceed
    return;
})
