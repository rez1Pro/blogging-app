<script setup lang="ts">
import { useRoute } from 'vue-router';

definePageMeta({
    layout: "guest",
    middleware: 'guest'
})

const route = useRoute()
const form = useForm({
    email: 'sajib@gmail.com',
    password: 'password'
})

const handleLogin = async () => {
    await form.post('login', {
        onSuccess: (response) => {
            localStorage.setItem('token', response.token)
            navigateTo(route.query.redirect as string || '/admin/posts')
        }
    })
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900">Admin Login</h2>
                <p class="mt-2 text-sm text-gray-600">Please sign in to your account</p>
            </div>

            <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <label for="email" class="sr-only">Email address</label>
                        <BaseInput id="email" v-model="form.email" type="email" required placeholder="Email address" />

                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <BaseInput id="password" v-model="form.password" type="password" required
                            placeholder="Password" />
                    </div>
                </div>

                <div>
                    <BasePrimaryButton type="submit" :disabled="form.processing">
                        Sign in
                    </BasePrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>