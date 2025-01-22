<script setup>
// Dummy categories data
const categories = ref([
    {
        id: 1,
        name: 'Virtual Events',
        description: 'Tips and strategies for hosting engaging online events',
        postCount: 12,
        image: 'img/virtual-events.jpg'
    },
    {
        id: 2,
        name: 'Remote Work',
        description: 'Best practices for effective remote team collaboration',
        postCount: 8,
        image: 'img/remote-work.jpg'
    },
    {
        id: 3,
        name: 'Digital Marketing',
        description: 'Latest trends in online marketing and promotion',
        postCount: 15,
        image: 'img/digital-marketing.jpg'
    }
])
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8">Categories</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="category in categories" :key="category.id" :to="`/categories/${category.id}`"
                class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="aspect-video overflow-hidden">
                    <img :src="category.image" :alt="category.name"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">{{ category.name }}</h2>
                    <p class="text-gray-600 mb-4">{{ category.description }}</p>
                    <div class="text-sm text-gray-500">
                        {{ category.postCount }} posts
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
