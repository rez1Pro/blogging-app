<script setup>
const handleLogout = () => {
    // Add logout logic here
    navigateTo({
        name: 'login'
    })
}

const navigation = [
    {
        name: 'All Posts',
        to: '/admin/posts',
        icon: 'IconDocument'
    },
    {
        name: 'Create Post',
        to: '/admin/posts/create',
        icon: 'IconPlus'
    },
    {
        name: 'Categories',
        to: '/admin/categories',
        icon: 'IconCategory'
    }
]
</script>
<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Sidebar -->
        <aside
            class="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm">
            <!-- Logo Area -->
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                <h1
                    class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Admin Panel</h1>
            </div>

            <!-- Navigation Menu -->
            <nav class="p-4">
                <ul class="space-y-2">
                    <li v-for="item in navigation" :key="item.to">
                        <NuxtLink :to="item.to"
                            class="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700"
                            :class="{ 'bg-black/5 dark:bg-black text-black dark:text-white font-medium shadow-sm': $route.path === item.to }">
                            <component :is="item.icon" class="w-5 h-5"
                                :class="{ 'text-black dark:text-white': $route.path === item.to }" />
                            <span class="ml-3">{{ item.name }}</span>
                        </NuxtLink>
                    </li>
                </ul>

                <!-- Logout Section -->
                <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
                    <button @click="handleLogout"
                        class="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-150 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:shadow-sm">
                        <span class="ml-3 font-medium">Logout</span>
                    </button>
                </div>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="ml-64">
            <!-- Header -->
            <header
                class="sticky top-0 z-10 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center justify-between px-6 h-full">
                    <!-- Search Bar -->
                    <div class="flex-1 max-w-xl">
                        {{ $route.path.split('/')[2]?.toUpperCase()?.replace('-', ' ') }}
                    </div>

                    <!-- Right Header Items -->
                    <div class="flex items-center space-x-4">
                        <!-- Profile -->
                        <div class="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff"
                                alt="Profile" class="w-8 h-8 rounded-full ring-2 ring-blue-500/20">
                            <span class="font-medium">Admin User</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="p-6">
                <slot />
            </main>
        </div>
    </div>
</template>
