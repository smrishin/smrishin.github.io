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
  logoImage: {
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
    class="flex h-full min-w-0 w-full flex-col justify-start rounded-lg border border-[#32383E] bg-[#0B0D0E] p-4"
  >
    <div class="flex items-center gap-4 md:items-start">
      <img
        v-if="logoImage"
        :src="logoImage"
        :alt="`${companyName} logo`"
        class="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"
      />
      <div class="min-w-0 flex-1">
        <h3 class="text-2xl font-bold">
          <a
            v-if="companyWebsite"
            :href="companyWebsite"
            target="_blank"
            rel="noopener noreferrer"
            class="text-bold text-white underline"
          >
            {{ companyName }}
          </a>
          <span v-else class="text-bold text-white">
            {{ companyName }}
          </span>
        </h3>
        <span class="text-md mt-2 block text-gray-100">{{ role }}</span>
        <span class="text-md mt-1 block text-gray-100">{{ duration }}</span>
      </div>
    </div>
    <span class="text-md mb-2 mt-5 block text-gray-300">
      {{ shortDescription }}
    </span>
  </div>
</template>

<style scoped></style>
