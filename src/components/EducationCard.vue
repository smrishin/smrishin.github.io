<script setup>
import { CONSTANTS } from "../data/constants";

defineProps({
  universityName: {
    type: String,
    required: true
  },
  universityWebsite: {
    type: String,
    default: ""
  },
  degree: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  gpa: {
    type: String,
    default: null
  },
  imagePath: {
    type: String,
    default: null
  }
});
</script>

<template>
  <div
    class="flex flex-1 flex-col justify-start min-w-64 max-w-md lg:max-w-sm bg-[#0B0D0E] border border-[#32383E] rounded-lg"
  >
    <img
      class="rounded-t-md h-56 object-cover object-top"
      :src="`${CONSTANTS.GH_PAGES_REPO}/education/${imagePath}`"
    />
    <div class="p-4">
      <h3 class="text-xl font-bold">
        <a
          v-if="universityWebsite"
          :href="universityWebsite"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-bold underline"
        >
          {{ universityName }}
        </a>
        <span v-else class="text-white text-bold">
          {{ universityName }}
        </span>
      </h3>
      <p class="text-md text-gray-100 mt-4">{{ degree }}</p>
      <p v-if="gpa" class="text-md text-gray-100 mt-1">GPA: {{ gpa }}</p>
      <p class="text-md text-gray-100 mt-1">{{ duration }}</p>
    </div>
  </div>
</template>

<style scoped></style>
