<script setup>
const { id } = useRoute().params

// Dummy post data
const post = ref({
    title: 'Making Your Virtual Events More Engaging',
    content: `
    <p>Virtual events have become an integral part of our professional landscape. This comprehensive guide explores the latest techniques and tools to create memorable virtual events that keep your audience engaged and connected.</p>
    
    <h2>Key Strategies for Engagement</h2>
    <ul>
      <li>Interactive polling and surveys</li>
      <li>Breakout room activities</li>
      <li>Virtual networking sessions</li>
      <li>Gamification elements</li>
    </ul>
    
    <p>By implementing these strategies, you can create an immersive virtual experience that rivals in-person events.</p>
  `,
    publishedAt: '2024-03-15',
    coverImage: 'img/blog-2.jpeg',
    author: {
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?u=sarah'
    }
})

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 py-8">
        <article class="prose lg:prose-xl">
            <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>

            <div class="flex items-center space-x-4 mb-8 text-gray-600">
                <div class="flex items-center">
                    <img :src="post.author.avatar" :alt="post.author.name" class="w-10 h-10 rounded-full mr-3">
                    <span>{{ post.author.name }}</span>
                </div>
                <span>•</span>
                <time>{{ formatDate(post.publishedAt) }}</time>
            </div>

            <div class="mb-8">
                <img v-if="post.coverImage" :src="post.coverImage" :alt="post.title"
                    class="w-full h-64 object-cover rounded-lg">
            </div>

            <div v-html="post.content" class="prose"></div>
        </article>
    </div>
</template>

<style>
    .prose {
        @apply max-w-none;
    }
</style>