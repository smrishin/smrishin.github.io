<script setup>
import { CONSTANTS } from "../data/constants";

defineProps({
  imageName: {
    type: String,
    required: true
  },
  tool: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    class="flex justify-start max-h-8 w-auto gap-x-2 bg-[#0B0D0E] border border-[#32383E] rounded-full py-1 px-2"
  >
    <img
      class="rounded-t-md w-3 object-contain"
      :src="`${CONSTANTS.GH_PAGES_REPO}/tools/${imageName}`"
    />
    <p class="text-xs text-gray-100">
      {{ tool }}
    </p>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<style scoped></style>
