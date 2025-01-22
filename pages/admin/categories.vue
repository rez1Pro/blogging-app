<script setup>
const categories = ref([])
const newCategory = ref('')

definePageMeta({
    layout: 'auth',
    middleware: ['auth']
})

// Function to fetch categories
const fetchCategories = async () => {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/categories')
        categories.value = await response.json()
    } catch (error) {
        console.error('Error fetching categories:', error)
    }
}

// Function to create new category
const createCategory = async () => {
    if (!newCategory.value) return

    try {
        // Replace with your actual API endpoint
        await fetch('/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newCategory.value }),
        })

        // Refresh categories list
        await fetchCategories()
        newCategory.value = '' // Clear input
    } catch (error) {
        console.error('Error creating category:', error)
    }
}

// Function to delete category
const deleteCategory = async (id) => {
    try {
        // Replace with your actual API endpoint
        await fetch(`/api/categories/${id}`, {
            method: 'DELETE',
        })

        // Refresh categories list
        await fetchCategories()
    } catch (error) {
        console.error('Error deleting category:', error)
    }
}

// Fetch categories on component mount
onMounted(() => {
    fetchCategories()
})
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Categories Management</h1>

        <!-- Add Category Form -->
        <div class="mb-6 bg-white p-4 rounded-lg shadow">
            <form @submit.prevent="createCategory" class="flex gap-4">
                <input v-model="newCategory" type="text" placeholder="Enter category name"
                    class="flex-1 p-2 border rounded" required />
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Category
                </button>
            </form>
        </div>

        <!-- Categories Table -->
        <div class="bg-white rounded-lg shadow">
            <table class="min-w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="category in categories" :key="category.id">
                        <td class="px-6 py-4 whitespace-nowrap">{{ category.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ category.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <button @click="deleteCategory(category.id)" class="text-red-600 hover:text-red-900">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>