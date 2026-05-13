<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="container mx-auto flex flex-1 flex-col items-center justify-center px-6 py-20 text-center text-gray-100"
  >
    <p class="text-6xl font-extrabold text-gray-600" aria-hidden="true">404</p>
    <h1 class="mt-4 text-2xl font-bold tracking-tight">Page not found</h1>
    <p class="mt-3 max-w-md text-gray-400">
      There is no page at this URL. If you were trying to open a section on the
      home page, use the hash link instead—for example
      <code class="rounded bg-[#14181C] px-1.5 py-0.5 text-sm text-gray-300"
        >/#contact</code
      >.
    </p>
    <RouterLink
      to="/"
      class="mt-8 inline-flex rounded-full border border-[#32383E] bg-[#14181C] px-5 py-2.5 text-sm font-medium text-gray-100 transition hover:border-gray-500 hover:bg-[#1a1f24]"
    >
      Back to home
    </RouterLink>
  </div>
</template>
