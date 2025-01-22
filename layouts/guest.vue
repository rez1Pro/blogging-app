<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" role="main">
        <div>
            <slot name="logo" />
        </div>

        <div class="w-full  sm:rounded-lg" role="region" aria-labelledby="content-title">
            <!-- <h1 id="content-title" class="text-2xl font-bold mb-4">Login</h1> -->
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>
