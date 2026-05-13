<script setup>
import SectionHeading from "@components/SectionHeading.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <SectionHeading section-id="resume" title="Resume" />
    <RouterLink
      to="/resume"
      class="group flex max-w-xl items-center justify-between gap-4 rounded-lg border border-[#32383E] bg-[#0B0D0E] p-6 transition hover:border-gray-500 hover:bg-[#14181C]"
    >
      <div class="flex min-w-0 flex-1 flex-col gap-1">
        <span
          class="text-lg font-semibold text-gray-100 transition group-hover:text-white"
        >
          View my resume
        </span>
        <span
          class="text-sm font-medium text-red-400/90 transition group-hover:text-red-300"
        >
          Open resume →
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-10 w-10 shrink-0 text-gray-500 transition group-hover:text-red-400/90"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    </RouterLink>
  </div>
</template>
