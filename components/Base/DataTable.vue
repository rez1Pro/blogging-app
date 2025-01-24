<script setup lang="ts">
import { computed } from 'vue';
import type { PostsApiResponse } from '@/types/pagination';

interface Column {
    key: string;
    label: string;
}

interface Item {
    id: string | number;
    [key: string]: any;
}

const props = defineProps<{
    columns: Column[];
    items: PostsApiResponse<Item>;
    loading?: boolean;
    page?: number;
}>()

const emit = defineEmits<{
    (e: 'page-change', page: number): void;
}>()

// Simplified computed properties using PostsApiResponse values
const totalPages = computed(() => props.items.last_page)

const startItem = computed(() => props.items.from)

const endItem = computed(() => props.items.to)

const totalItems = computed(() => props.items.total)

const currentPage = computed(() => props.items.current_page)

const shouldShowPageButton = (pageNum: number) => {
    if (!currentPage.value) return true;
    // Always show first and last pages
    if (pageNum === 1 || pageNum === totalPages.value) return true;
    // Show pages around current page
    return Math.abs(pageNum - currentPage.value) <= 2;
}

const shouldShowEllipsis = (pageNum: number) => {
    if (!currentPage.value) return false;
    if (pageNum === 1 || pageNum === totalPages.value) return false;
    const showCurrentPage = shouldShowPageButton(pageNum);
    const showPreviousPage = shouldShowPageButton(pageNum - 1);
    return !showCurrentPage && showPreviousPage;
}
</script>

<template>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="min-w-full table-auto">
                <thead class="bg-gray-50">
                    <tr>
                        <th v-for="column in columns" :key="column.key"
                            class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider"
                            :class="{
                                'text-right': column.key === 'actions',
                                'w-48': ['title', 'content'].includes(column.key),
                                'w-32': ['published_at', 'created_at', 'updated_at'].includes(column.key),
                            }">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <template v-if="items.data && items.data.length > 0">
                        <tr v-for="(item, index) in items.data" :key="item.id || index"
                            class="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            <td v-for="column in columns" :key="column.key"
                                class="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                                <slot v-if="$slots[column.key]" :name="column.key" :item="item" :column="column">
                                </slot>
                                <template v-else>
                                    {{ item?.[column.key] }}
                                </template>
                            </td>
                        </tr>
                    </template>
                    <tr v-else>
                        <td :colspan="columns.length" class="text-center py-12 bg-white dark:bg-gray-800">
                            <div class="flex flex-col items-center justify-center">
                                <svg class="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-lg font-medium text-gray-600 dark:text-gray-400">No data found</p>
                                <p class="text-sm text-gray-500 dark:text-gray-500">Try adjusting your search or filters
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Updated responsive pagination section -->
        <div v-if="totalItems" class="px-4 sm:px-6 py-4 border-t border-gray-200">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
                    Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} results
                </div>
                <div class="flex gap-1 sm:gap-2 order-1 sm:order-2">
                    <button @click="emit('page-change', currentPage - 1)" :disabled="!items.prev_page_url"
                        :class="{ 'opacity-50 cursor-not-allowed': !items.prev_page_url }"
                        class="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-150">
                        Previous
                    </button>

                    <template v-for="pageNum in totalPages" :key="pageNum">
                        <button v-if="shouldShowPageButton(pageNum)" @click="emit('page-change', pageNum)" :class="[
                            'px-2 sm:px-3 py-1 text-xs sm:text-sm border rounded-md transition-colors duration-150',
                            pageNum === currentPage
                                ? 'text-white bg-blue-600 border-blue-600 hover:bg-blue-700'
                                : 'border-gray-300 hover:bg-gray-50'
                        ]">
                            {{ pageNum }}
                        </button>
                        <span v-else-if="shouldShowEllipsis(pageNum)"
                            class="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-500">
                            ...
                        </span>
                    </template>

                    <button @click="emit('page-change', currentPage + 1)" :disabled="!items.next_page_url"
                        :class="{ 'opacity-50 cursor-not-allowed': !items.next_page_url }"
                        class="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-150">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>