<script setup>
const featuredArticle = ref({
    id: 1,
    date: '2024-01-24',
    title: 'How to Plan a Successful Team-Building Retreat for Your Company',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    category: 'Corporate Events',
    imageUrl: 'img/blog-6.jpeg'
})

const popularArticles = ref([
    {
        id: 1,
        date: '2021-08-08',
        title: 'Top Trends in Corporate Event Design and Engagement',
        excerpt: 'Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.',
        category: 'CORPORATE EVENTS',
        imageUrl: 'img/blog-1.jpeg'
    },
    {
        id: 2,
        date: '2021-08-09',
        title: 'Making Your Virtual Events More Engaging',
        excerpt: 'Learn the latest techniques and tools to create memorable virtual events that keep your audience engaged and connected.',
        category: 'VIRTUAL EVENTS',
        imageUrl: 'img/blog-2.jpeg'
    },
    {
        id: 3,
        date: '2021-08-10',
        title: 'Sustainable Event Planning: A Guide',
        excerpt: 'Discover how to organize eco-friendly events that minimize environmental impact while maximizing attendee satisfaction.',
        category: 'SUSTAINABILITY',
        imageUrl: 'img/blog-3.jpeg'
    }
])

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    })
}
</script>
<template>
    <!-- Main Content -->
    <div>
        <h1 class="text-5xl font-bold text-gray-900 mt-16 mb-4 md:text-4xl">Events in Minutes Ideas</h1>
        <p class="text-xl text-gray-500 mb-12 md:text-lg">
            Welcome to our Ideas Hub, where we share tips, trends and inspiration for unforgettable events.
        </p>

        <!-- Featured Article -->
        <article
            class="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-20 bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <img :src="featuredArticle.imageUrl" alt="Team Building"
                class="w-full h-[380px] object-cover rounded-l-2xl shadow-sm" />
            <div class="flex flex-col justify-between h-full">
                <div class="space-y-4">
                    <span class="text-sm text-gray-600">{{ formatDate(featuredArticle.date) }}</span>
                    <h2 class="text-2xl font-bold text-gray-900 leading-tight">{{ featuredArticle.title }}</h2>
                    <p class="text-gray-600 text-base leading-relaxed">
                        {{ featuredArticle.content }}
                    </p>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <span class="text-sm font-medium text-gray-600">{{ featuredArticle.category }}</span>
                    <NuxtLink :to="{ name: 'post-id', params: { id: featuredArticle.id } }"
                        class="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center gap-2">
                        Read <span class="text-lg leading-none">→</span>
                    </NuxtLink>
                </div>
            </div>
        </article>

        <!-- Popular Articles Section -->
        <section class="mb-20">
            <h2 class="text-[32px] font-bold text-gray-900 mb-12">Popular Articles</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <article v-for="article in popularArticles" :key="article.id"
                    class="rounded-2xl overflow-hidden bg-white shadow-sm">
                    <div class="relative h-[260px]">
                        <span
                            class="absolute top-6 right-6 bg-white/90 px-4 py-2 rounded-full text-sm font-medium uppercase">
                            {{ article.category }}
                        </span>
                        <img :src="article.imageUrl" :alt="article.title" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-8">
                        <span class="text-sm text-gray-600">{{ formatDate(article.date) }}</span>
                        <h3 class="text-2xl font-bold text-gray-900 mt-4 mb-6 hover:text-gray-700 transition-colors">
                            <NuxtLink :to="{ name: 'post-id', params: { id: article.id } }">{{ article.title }}
                            </NuxtLink>
                        </h3>
                        <p class="text-base text-gray-600 leading-relaxed">
                            {{ article.excerpt }}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>