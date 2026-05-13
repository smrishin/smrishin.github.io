<script setup>
import { CONSTANTS } from "../data/constants";
import { computed, ref, watch } from "vue";

const props = defineProps({
  imageName: {
    type: String,
    default: null
  },
  tool: {
    type: String,
    required: true
  }
});

const imageError = ref(false);

watch(
  () => props.imageName,
  () => {
    imageError.value = false;
  }
);

const showImage = computed(
  () => Boolean(props.imageName) && !imageError.value
);

const toolInitial = computed(() =>
  props.tool.trim().charAt(0).toUpperCase() || "?"
);

function onImageError() {
  imageError.value = true;
}
</script>

<template>
  <div
    class="flex max-h-8 w-auto items-center justify-start gap-x-2 rounded-full border border-[#32383E] bg-[#0B0D0E] px-2 py-1"
  >
    <img
      v-if="showImage"
      class="h-3 w-3 shrink-0 rounded-t-md object-contain"
      :src="`${CONSTANTS.GH_PAGES_REPO}/tools/${imageName}`"
      :alt="tool"
      @error="onImageError"
    />
    <span
      v-else
      class="flex h-3 w-3 shrink-0 items-center justify-center rounded bg-[#32383E] text-[7px] font-bold leading-none text-gray-300"
      aria-hidden="true"
    >
      {{ toolInitial }}
    </span>
    <p class="text-xs text-gray-100">
      {{ tool }}
    </p>
  </div>
</template>

<style scoped></style>
