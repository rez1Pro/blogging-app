<template>
    <button :type="type"
        class="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
        @click="$emit('click')" :disabled="disabled">
        <span v-if="disabled"
            class="inline-block animate-spin h-3 w-3 mr-1 border-2 border-white border-t-transparent rounded-full"></span>
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>