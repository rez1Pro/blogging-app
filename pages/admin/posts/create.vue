<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
    layout: 'auth',
    middleware: ['auth']
})
const form = ref({
    title: '',
    slug: '',
    content: '',
    status: 'draft',
    category: 'technology'
})

const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', form.value)
}
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Sidebar can be added later -->

        <!-- Main Content -->
        <main class="p-6 lg:p-8">
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-2xl font-semibold text-gray-800">Create New Post</h1>
                <p class="mt-2 text-sm text-gray-600">Add a new blog post to your website</p>
            </div>

            <!-- Form Card -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                <div class="p-6">
                    <form @submit.prevent="handleSubmit">
                        <!-- Title Input -->
                        <div class="mb-6">
                            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                                Post Title
                            </label>
                            <input id="title" v-model="form.title" type="text"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter post title" />
                        </div>

                        <!-- Slug Input -->
                        <div class="mb-6">
                            <label for="slug" class="block text-sm font-medium text-gray-700 mb-2">
                                Slug
                            </label>
                            <input id="slug" v-model="form.slug" type="text"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="post-url-slug" />
                        </div>

                        <!-- Content Editor -->
                        <div class="mb-6">
                            <label for="content" class="block text-sm font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea id="content" v-model="form.content" rows="8"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your post content here..."></textarea>
                        </div>

                        <!-- Status and Category -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select id="status" v-model="form.status"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            <div>
                                <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select id="category" v-model="form.category"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="technology">Technology</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="travel">Travel</option>
                                </select>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex justify-end space-x-4">
                            <button type="button"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                Cancel
                            </button>
                            <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>