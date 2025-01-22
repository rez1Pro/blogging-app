<template>
    <header class="flex justify-between items-center py-6 border-b border-gray-200">
        <div class="flex items-center gap-8">
            <img src="https://placehold.co/200x50?text=Events+in+Minutes" alt="Events in Minutes" class="logo" />
            <a href="tel:+1(628)587-3235" class="flex items-center gap-2 text-sm text-gray-900 no-underline">
                <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/device-mobile-16.svg"
                    alt="Phone" />
                +1 (628) 587-3235
            </a>
        </div>
        <div class="flex items-center gap-6">
            <nav>
                <a href="#" class="text-sm text-gray-900 no-underline mr-6">Top Vendors</a>
                <a href="#" class="text-sm text-gray-900 no-underline">Apply Now!</a>
            </nav>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                        d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                </svg>
            </button>
            <NuxtLink :to="{ name: 'login' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                        d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
                </svg>
            </NuxtLink>
        </div>
    </header>
</template>