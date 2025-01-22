<script setup>
const posts = ref([
    {
        id: 1,
        title: 'Making Your Virtual Events More Engaging',
        excerpt: 'Learn the latest techniques and tools...',
        category: 'Virtual Events',
        status: 'published',
        date: '2024-03-15',
        imageUrl: '/img/blog-2.jpeg'
    },
    {
        id: 2,
        title: 'Top Trends in Corporate Event Design',
        excerpt: 'Discover the latest trends in...',
        category: 'Corporate Events',
        status: 'draft',
        date: '2024-03-14',
        imageUrl: '/img/blog-1.jpeg'
    },
    // Add more dummy posts as needed
])

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

definePageMeta({
    layout: 'auth'
})
</script>
<template>
    <div class="p-6 lg:p-8">
        <!-- Header with Actions -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-gray-800">Posts</h1>
                <p class="mt-1 text-sm text-gray-600">Manage your blog posts</p>
            </div>
            <NuxtLink :to="{ name: 'admin-posts-create' }"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Create Post
            </NuxtLink>
        </div>

        <!-- Table Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <!-- Table Filters -->
            <div class="p-4 border-b border-gray-200">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1 max-w-xs">
                        <input type="text" placeholder="Search posts..."
                            class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div class="flex items-center gap-4">
                        <select
                            class="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="">All Categories</option>
                            <option value="technology">Technology</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="travel">Travel</option>
                        </select>
                        <select
                            class="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="">All Status</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="post in posts" :key="post.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <img :src="post.imageUrl" :alt="post.title"
                                        class="h-10 w-10 rounded-lg object-cover mr-3" />
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">{{ post.title }}</div>
                                        <div class="text-sm text-gray-500">{{ post.excerpt }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {{ post.category }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    :class="[post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800', 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full']">
                                    {{ post.status }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ formatDate(post.date) }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end gap-3">
                                    <button class="text-blue-600 hover:text-blue-900">Edit</button>
                                    <button class="text-red-600 hover:text-red-900">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="text-sm text-gray-500">
                        Showing 1 to 10 of 20 results
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
                        <button
                            class="px-3 py-1 text-sm text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">1</button>
                        <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">2</button>
                        <button
                            class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
