<script setup lang="ts">
interface InputProps {
    id?: string
    modelValue?: string | number
    type?: string
    required?: boolean
    placeholder?: string
    disabled?: boolean
    name?: string
    autocomplete?: string
}

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    required: false,
    disabled: false
})

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

</script>

<template>
    <input :id="id" :name="name" :value="modelValue" @input="handleInput" :type="type" :required="required"
        :disabled="disabled" :placeholder="placeholder" :autocomplete="autocomplete"
        class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
</template>