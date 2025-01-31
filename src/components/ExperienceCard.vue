<script setup>
defineProps({
  companyName: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    class="flex flex-1 flex-col justify-start min-w-64 max-w-sm bg-[#0B0D0E] border border-[#32383E] rounded-lg p-4"
  >
    <h3 class="text-2xl font-bold">
      <a
        v-if="companyWebsite"
        :href="companyWebsite"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white text-bold underline"
      >
        {{ companyName }}
      </a>
      <span v-else class="text-white text-bold">
        {{ companyName }}
      </span>
    </h3>
    <span class="text-md text-gray-100 mt-2">{{ role }}</span>
    <span class="text-md text-gray-100 mt-1">{{ duration }}</span>
    <span class="text-md text-gray-300 mt-5 mb-2">
      {{ shortDescription }}
    </span>
  </div>
</template>

<style scoped></style>
