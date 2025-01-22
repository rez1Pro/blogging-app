<template>
    <button :type="type" class="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
        @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    }
})
</script>