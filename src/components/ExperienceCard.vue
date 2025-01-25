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
    <h3 class="text-xl font-bold">
      <a
        :href="companyWebsite"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-100 text-xl text-bold underline"
      >
        {{ companyName }}
      </a>
    </h3>
    <p class="text-sm text-gray-100 mt-2">{{ role }}</p>
    <p class="text-sm text-gray-100 mt-4">
      {{ shortDescription }}
    </p>
  </div>
</template>

<style scoped></style>
