<script setup>
definePageMeta({
    layout: 'auth',
    middleware: 'auth'
})

const page = ref(1)
const search = ref("")

const { data: posts, refresh, processing } = await useApi(() => `posts?page=${page.value}&filter[title]=${search.value}`, {
    // onTransform(data) {
    //     console.log(data)
    //     return data
    // }    
})

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'is_published', label: 'Published' },
    { key: 'published_at', label: 'Published At' },
    { key: 'actions', label: 'Actions' }
]

const handleEdit = (post) => {
    // Add edit logic here
    console.log('Edit post:', post)
}

const handleDelete = (post) => {
    // Add delete logic here
    console.log('Delete post:', post)
}

</script>
<template>
    <div class="p-6 lg:p-8">
        <!-- Header with Actions -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-gray-800">Posts</h1>
                <p class="mt-1 text-sm text-gray-600">Manage your blog posts</p>
            </div>
        </div>

        <!-- Table Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <!-- Table Filters -->
            <div class="p-4 border-b border-gray-200">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1 max-w-xs">
                        <input type="text" placeholder="Search posts..." v-model="search"
                            class="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div class="flex items-center gap-4">
                        <NuxtLink :to="{ name: 'admin-posts-create' }"
                            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                            Create Post
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <BaseDataTable :loading="processing" :columns="columns" :items="posts ?? []"
                @page-change="(pageNum) => page = pageNum">
                <template #category="{ item }">
                    {{ item.category?.name }}
                </template>

                <template #is_published="{ item }">
                    {{ item.is_published ? 'Yes' : 'No' }}
                </template>

                <template #published_at="{ item }">
                    {{ formatDate(item.published_at) }}
                </template>
                <!-- you can cusotmize your table here -->
                <template #actions="{ item }">
                    <div class="flex justify-end gap-2">
                        <button @click="handleEdit(item)"
                            class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200">
                            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                        </button>
                        <button @click="handleDelete(item)"
                            class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200">
                            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                        </button>
                    </div>
                </template>
            </BaseDataTable>
        </div>
    </div>
</template>
