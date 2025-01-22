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
        <article class="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-20">
            <img :src="featuredArticle.imageUrl" alt="Team Building" class="w-full h-[400px] object-cover rounded-lg" />
            <div class="flex flex-col">
                <span class="text-sm text-gray-500 mb-4">{{ formatDate(featuredArticle.date) }}</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6 md:text-3xl">{{ featuredArticle.title }}</h2>
                <p class="text-gray-500 leading-relaxed mb-6">
                    {{ featuredArticle.content }}
                </p>
                <div class="flex justify-between items-center mt-auto">
                    <span class="text-sm text-gray-500">{{ featuredArticle.category }}</span>
                    <NuxtLink :to="{ name: 'post-id', params: { id: featuredArticle.id } }"
                        class="text-gray-900 font-medium no-underline">Read →</NuxtLink>
                </div>
            </div>
        </article>

        <!-- Popular Articles Section -->
        <section class="mb-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <article v-for="article in popularArticles" :key="article.id" class="rounded-lg overflow-hidden">
                    <div class="relative h-60">
                        <span class="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">
                            {{ article.category }}
                        </span>
                        <img :src="article.imageUrl" :alt="article.title" class="w-full h-full object-cover" />
                    </div>
                    <div class="pt-6">
                        <span class="text-sm text-gray-500">{{ formatDate(article.date) }}</span>
                        <h3 class="text-xl font-bold text-gray-900 my-2">
                            <NuxtLink :to="{ name: 'post-id', params: { id: article.id } }">{{ article.title
                                }}</NuxtLink>
                        </h3>
                        <p class="text-sm text-gray-500 leading-relaxed">
                            {{ article.excerpt }}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>