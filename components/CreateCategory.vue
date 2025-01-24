<script setup>
const form = useForm({
    name: ''
})

const createCategory = async () => {
    await form.post('categories')
}
</script>
<template>
    <div class="mb-6 bg-white p-4 rounded-lg shadow">
        <form @submit.prevent="createCategory" class="flex gap-4">
            <input v-model="form.name" type="text" placeholder="Enter category name" class="flex-1 p-2 border rounded"
                required />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Category
            </button>
        </form>
    </div>
</template>